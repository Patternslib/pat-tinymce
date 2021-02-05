import "regenerator-runtime/runtime"; // needed for ``await`` support
import pattern from "./tinymce";
import utils from "patternslib/src/core/utils";

describe("pat-tinymce", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async (done) => {
        document.body.innerHTML = `<div class="pat-tinymce" />`;

        const instance = pattern.init(
            document.querySelector(".pat-tinymce")
        );
        await utils.timeout(1);

        expect().toBe("");

        done();
    });
});
