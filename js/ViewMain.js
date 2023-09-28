import View from "./View.js";

export default class ViewMain extends View {

    buildings;

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerText = "Main";
        this.buildings = document.createElement("view-buildings");
        this.append(this.buildings);
    }

    update() {

    }

}