import View from "./View.js";
import ViewFooter from "./ViewFooter.js";
import ViewHeader from "./ViewHeader.js";
import ViewMain from "./ViewMain.js";
import ViewNav from "./ViewNav.js";

export default class ViewContainer extends View {

    header;
    nav;
    main;
    footer;

    constructor() {
        super();
    }

    connectedCallback() {
        // header
        customElements.define("view-header", ViewHeader);
        this.header = document.createElement("view-header");
        this.append(this.header);
        // content
        customElements.define("view-main", ViewMain);
        this.main = document.createElement("view-main");
        this.append(this.main);
        // menu
        customElements.define("view-nav", ViewNav);
        this.nav = document.createElement("view-nav");
        this.append(this.nav);
        this.nav.setViewMain(this.main);
        // footer
        customElements.define("view-footer", ViewFooter);
        this.footer = document.createElement("view-footer");
        this.append(this.footer);
    }

    update() {
        this.game.update();
        this.header.update();
        this.nav.update();
        this.main.update();
        this.footer.update();
    }

    setGame(game) {
        this.game = game;
        this.header.setGame(game);
        this.nav.setGame(game);
        this.main.setGame(game);
        this.footer.setGame(game);
    }

}