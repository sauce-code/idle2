export default class View extends HTMLElement {

    game;
    visible;

    constructor() {
        super();
        this.setVisible(true);
    }

    connectedCallback() {

    }

    setVisible(visible) {
        this.visible = visible;
        this.style.display = visible ? "" : "none";
    }

    setGame(game) {
        this.game = game;
    }

}