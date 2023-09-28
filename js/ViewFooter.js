import View from "./View.js";

export default class ViewFooter extends View {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerText = "Footer"
    }

    update() {

    }

}