import Content from "./Content.js";
import View from "./View.js";

export default class ViewNav extends View {

    buttons = [];

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerText = "Nav";
        {
            this.append(document.createElement("br"));
            const button = document.createElement("button");
            button.innerText = "Overview";
            this.append(button);
            this.buttons[Content.SUMMARY] = button;
        }
        {
            this.append(document.createElement("br"));
            const button = document.createElement("button");
            button.innerText = "Buildings";
            this.append(button);
            this.buttons[Content.BUILDINGS] = button;
        }
    }

    update() {

    }

    setViewMain(viewMain) {
        this.buttons[Content.SUMMARY].addEventListener("click", function () { viewMain.setContent(Content.SUMMARY) });
        this.buttons[Content.BUILDINGS].addEventListener("click", function () { viewMain.setContent(Content.BUILDINGS) });
    }

}