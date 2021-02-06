import "regenerator-runtime/runtime"; // needed for ``await`` support
import Base from "patternslib/src/core/base";
import Parser from "patternslib/src/core/parser";

const parser = new Parser("tinymce");
parser.addArgument("inline", false);
parser.addArgument("content-css", false);

export default Base.extend({
    name: "tinymce",
    trigger: ".pat-tinymce",

    async init() {
        this.options = parser.parse(this.el, this.options);

        let TinyMCE = await import("tinymce");
        TinyMCE = TinyMCE.default;

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

        let el = this.el;
        if (
            this.options.inline &&
            ["textarea", "input"].includes(this.el.nodeName.toLowerCase())
        ) {
            el = document.createElement("div");
            el.setAttribute("contenteditable", "");
            el.innerHTML = this.el.value;
            this.el.parentNode.insertBefore(el, this.el);
            this.el.setAttribute("hidden", "");
        }

        const config = {
            target: el,
            skin: false,
            inline: this.options.inline,
            content_css: this.options.contentCss,
            content_css_cors: content_css_cors,
        };

        this.tinymce = await TinyMCE.init(config);
        // apparently it's returning the editor wrapped in a list
        this.tinymce = this.tinymce[0];

        if (el !== this.el) {
            // Update <textarea> or <input>, if one of these were the
            // initializing elements.
            this.tinymce.on("input", () => {
                //this.el.value = this.tinymce.getContent();
                // TODO: in inline mode `getContent` and source view seem to be
                // broken.
                this.el.value = el.innerHTML;
            });
        }
    },
});
