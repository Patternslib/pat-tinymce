import pattern from "./tinymce";
import utils from "@patternslib/patternslib/src/core/utils";

describe("pat-tinymce", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async () => {
        const text_1 = "<h1>first</h1>";

        document.body.innerHTML = `
            <textarea
                class="pat-tinymce"
                data-pat-tinymce="inline: false">${text_1}</textarea>
        `;

        pattern.init(document.querySelector(".pat-tinymce"));
        await utils.timeout(1);

        // Textarea is hidden
        expect(
            document.querySelector("textarea.pat-tinymce").hasAttribute("aria-hidden")
        ).toBeTruthy();

        // TinyMCE application wrapper exists
        expect(document.querySelector("div[role=application]")).toBeTruthy();

        // TinyMCE iframe exists
        expect(document.querySelector("iframe")).toBeTruthy();
    });

    it("Updates the hidden textarea in inline mode", async () => {
        const text_1 = "<h1>first</h1>";
        const text_2 = "<h2>second</h2>";

        document.body.innerHTML = `
            <textarea
                class="pat-tinymce"
                data-pat-tinymce="inline: true;">${text_1}</textarea>
        `;

        pattern.init(document.querySelector(".pat-tinymce"));
        await utils.timeout(1);

        const textarea = document.querySelector("textarea");
        const tiny_el = document.querySelector("div[contenteditable]");
        expect(tiny_el).toBeTruthy();

        tiny_el.innerHTML += text_2;
        tiny_el.dispatchEvent(new Event("input"));
        await utils.timeout(1);

        expect(textarea.value).toBe(text_1 + text_2);
    });

    it("Updates the hidden textarea in inline mode correctly with multiple instances", async () => {
        const text_1 = "<h1>first</h1>";
        const text_2 = "<h2>second</h2>";
        const text_3 = "<h1>third</h1>";
        const text_4 = "<h2>forth</h2>";

        document.body.innerHTML = `
            <textarea
                class="pat-tinymce"
                data-pat-tinymce="inline: true;">${text_1}</textarea>

            <textarea
                class="pat-tinymce"
                data-pat-tinymce="inline: true;">${text_3}</textarea>
        `;

        pattern.init(document.querySelectorAll(".pat-tinymce")[0]);
        await utils.timeout(1);
        pattern.init(document.querySelectorAll(".pat-tinymce")[1]);
        await utils.timeout(1);

        const textarea_1 = document.querySelectorAll("textarea.pat-tinymce")[0];
        const tiny_el_1 = document.querySelectorAll("div[contenteditable]")[0];
        expect(tiny_el_1).toBeTruthy();

        tiny_el_1.innerHTML += text_2;
        tiny_el_1.dispatchEvent(new Event("input"));
        await utils.timeout(1);

        const textarea_2 = document.querySelectorAll("textarea.pat-tinymce")[1];
        const tiny_el_2 = document.querySelectorAll("div[contenteditable]")[1];
        expect(tiny_el_2).toBeTruthy();

        tiny_el_2.innerHTML += text_4;
        tiny_el_2.dispatchEvent(new Event("input"));
        await utils.timeout(1);

        expect(textarea_1.value).toBe(text_1 + text_2);
        expect(textarea_2.value).toBe(text_3 + text_4);
    });
});
