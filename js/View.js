export default class View extends HTMLElement {

    game;
    visible;

    constructor() {
        super();
    }

    connectedCallback() {
        this.setVisible(true);
        this.state = View.OVERVIEW;
    }

    setVisible(visible) {
        this.visible = visible;
        this.style.display = visible ? "" : "none";
    }

    setGame(game) {
        this.game = game;
    }

    update() {
        throw new Error("Method 'update()' must be implemented.");
    }

}