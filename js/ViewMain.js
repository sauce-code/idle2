import View from "./View.js";
import ContentBuildings from "./ContentBuildings.js"
import ContentSummary from "./ContentSummary.js";

export default class ViewMain extends View {

    contentBuildings;
    contentSummary;

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerText = "Main";
        customElements.define("content-buildings", ContentBuildings);
        this.contentBuildings = document.createElement("content-buildings");
        this.append(this.contentBuildings);
        customElements.define("content-summary", ContentSummary);
        this.contentSummary = document.createElement("content-summary");
        this.append(this.contentSummary);
    }

    update() {
        this.contentBuildings.update();
        this.contentSummary.update();
    }

    setGame(game) {
        this.game = game;
        this.contentBuildings.setGame(game);
    }

    setContent(content) {
        this.contentSummary.setContent(content);
        this.contentBuildings.setContent(content);
    }

}