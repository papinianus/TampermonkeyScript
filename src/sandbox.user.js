// ==UserScript==
// @name         sandbox
// @namespace    https://github.com/papinianus/TampermonkeyScript
// @version      0.12
// @description  sandbox for testing
// @author       papinianus
// @match        http://*/*
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @updateURL    https://github.com/papinianus/TampermonkeyScript/raw/main/src/sandbox.user.js
// @downloadURL  https://github.com/papinianus/TampermonkeyScript/raw/main/src/sandbox.user.js
// @supportURL   https://github.com/papinianus/TampermonkeyScript
// @grant        GM_download
// ==/UserScript==

(function () {
    'use strict';
    document.addEventListener('keydown', (keyboardEvent) => {
        if (!keyboardEvent.ctrlKey) return;
        if (keyboardEvent.key !== "s") return;
        const content = ['<a id="a"><b id="b">hey!</b></a>', 'test'];
        const blob = new Blob(content, { type: 'text/plaintext' });
        const obj = URL.createObjectURL(blob);
        GM_download({ url: obj, name: "test.txt", saveAs: true });
        keyboardEvent.preventDefault;
    }, false);

})();
