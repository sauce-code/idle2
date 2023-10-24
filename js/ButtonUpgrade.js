export default class ButtonUpgrade extends HTMLButtonElement {

    game;
    building;

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerText = "ausbauen";
    }

    setBuilding(building) {
        this.building = building;
        this.addEventListener("click", function () { this.game.upgradeBuilding(building) });
    }

}