import Base from "@patternslib/patternslib/src/core/base";
import Parser from "@patternslib/patternslib/src/core/parser";

const plugin_map = {
    advlist: { deps: ["lists"] },
    anchor: {},
    autolink: {},
    autoresize: {},
    autosave: {},
    charmap: {},
    code: {},
    codesample: {},
    //colorpicker: {}, // is now in core
    //contextmenu: {}, // is now in core
    directionality: {},
    emoticons: { extra_imports: ["js/emojiimages"] },
    fullscreen: {},
    help: {},
    hr: {},
    //"image": {},
    //"imagetools": {},
    //"importcss": {},
    insertdatetime: {},
    //"legacyoutput": {}, // If included we're in HTML 3 compatibility mode.
    link: {},
    lists: {},
    media: {},
    nonbreaking: {},
    noneditable: {},
    pagebreak: {},
    paste: {},
    preview: {},
    print: {},
    //"quickbars": {},
    save: {},
    searchreplace: {},
    //"spellchecker": {},
    tabfocus: {},
    table: {},
    //"template": {},
    //textcolor: {}, // is now in core
    //"textpattern": {},
    visualblocks: {},
    visualchars: {},
    wordcount: {},
};

export const parser = new Parser("tinymce");
parser.addArgument("inline", true);
parser.addArgument("content-css", false);
parser.add_argument("plugins", Object.keys(plugin_map), Object.keys(plugin_map), true);

export default Base.extend({
    name: "tinymce",
    trigger: ".pat-tinymce",
    plugins: {},

    async init() {
        this.options = parser.parse(this.el, this.options);

        const TinyMCE = (await import("tinymce")).default;

        // UI, design, skin
        import("tinymce/icons/default");
        import("tinymce/themes/silver");
        import("tinymce/skins/ui/oxide/skin.css");

        let content_css_cors = false;
        if (!this.options.inline && !this.options.contentCss) {
            // In <iframe> mode and no content CSS load the default.
            // We're loading from a CDN to have it in reach for TinyMCE as
            // Webpack bundling makes it unavailable otherwise.
            this.options.contentCss =
                "https://cdnjs.cloudflare.com/ajax/libs/tinymce/5.6.2/skins/content/default/content.min.css";
            content_css_cors = true;
        }

        this.tinyel = this.el;
        if (
            this.options.inline &&
            ["textarea", "input"].includes(this.el.nodeName.toLowerCase())
        ) {
            this.tinyel = document.createElement("div");
            this.tinyel.setAttribute("contenteditable", "");
            this.tinyel.innerHTML = this.el.value;
            this.el.parentNode.insertBefore(this.tinyel, this.el);
            this.el.setAttribute("hidden", "");
        }

        // load plugins
        for (const plugin of this.options.plugins) {
            this.plugins[plugin] = await import(`tinymce/plugins/${plugin}`);
            const plugin_dependencies = plugin_map[plugin].deps || [];
            for (const dep of plugin_dependencies) {
                if (!this.options.plugins.includes(dep)) {
                    // Extend the options with necessary plugin dependencies,
                    // if they are not yet in.
                    this.options.plugins.push(dep);
                }
            }
            // Extra imports
            for (const imp of plugin_map[plugin].extra_imports || []) {
                // Extra imports need to be relative to the plugin base folder
                import(`tinymce/plugins/${plugin}/${imp}`);
            }
        }

        const config = {
            target: this.tinyel,
            skin: false,
            inline: this.options.inline,
            content_css: this.options.contentCss,
            content_css_cors: content_css_cors,
            plugins: this.options.plugins.join(" "),
        };

        this.tinymce = await TinyMCE.init(config);
        // apparently it's returning the editor wrapped in a list
        this.tinymce = this.tinymce[0];

        if (this.tinyel !== this.el) {
            // Update <textarea> or <input>, if one of these were the
            // initializing elements.
            this.tinymce.on("input", () => {
                //this.el.value = this.tinymce.getContent();
                // TODO: in inline mode `getContent` and source view seem to be
                // broken.
                this.el.value = this.tinyel.innerHTML;
            });
        }
    },

    destroy() {
        if (this.tinymce) {
            if (this.tinyel !== this.el) {
                // destroy also inline editable
                // save back first.
                this.el.value = this.tinyel.innerHTML;
                this.tinyel.remove();
                this.el.removeAttribute("hidden");
            }
            this.tinymce.destroy();
            this.tinymce = null;
        }
    },
});
