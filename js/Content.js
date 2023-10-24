import View from "./View.js";

export default class Content extends View {

    static SUMMARY = 0;
    static BUILDINGS = 1;

    constructor() {
        super();
    }

    connectedCallback() {

    }

    /**
     * 
     * @param {number} content 
     */
    setContent(content) {
        throw new Error("Method 'setContent()' must be implemented.");
    }

}