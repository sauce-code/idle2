import Content from "./Content.js";

export default class ContentSummary extends Content {

    constructor() {
        super();
    }

    connectedCallback() {
        this.setVisible(false);
        this.innerText = "Summary"
    }

    setContent(state) {
        this.setVisible(state === Content.SUMMARY);
    }

    update() {

    }

}