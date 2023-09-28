import View from "./View.js";
import Resource from "./logic/Resource.js";

export default class ViewNav extends View {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerText = "Nav";
    }

    update() {
        const resources = this.game.getResources();
        for (let i = 0; i < Resource.length(); i++) {
            this.resources.innerText = resources[i];
        }
    }

}