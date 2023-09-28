import View from "./View.js";

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
        this.header = document.createElement("view-header");
        this.append(this.header);
        // menu
        this.nav = document.createElement("view-nav");
        this.append(this.nav);
        // content
        this.main = document.createElement("view-main");
        this.append(this.main);
        // footer
        this.footer = document.createElement("view-footer");
        this.append(this.footer);
    }

    update() {
        this.header.update();
        this.nav.update();
        this.main.update();
        this.footer.update();
    }

    setGame(game) {
        super.setGame(game);
        this.header.setGame(game);
        this.nav.setGame(game);
        this.main.setGame(game);
        this.footer.setGame(game);
    }

}