import Castle from "./Castle.js";
import Persistence from "./Persistence.js";

export default class Game {

    castle;
    persistence;

    constructor() {
        this.persistence = new Persistence();
        //const saveGame = this.persistence.read("castle");
        //this.castle = (saveGame === undefined ? new Castle() : JSON.parse(saveGame));
        this.castle = new Castle();
        this.persistence.write("castle", JSON.stringify(this.castle));
    }

    upgrade(building) {
        this.castle.upgrade(building);
        this.persistence.write(this.castle);
    }

    research(upgrade) {
        this.castle.research(upgrade);
        this.persistence.write(this.castle);
    }

    getResources() {
        return this.castle.getResources();
    }

    getBuildingLevel(building) {
        return this.castle.getBuildingLevel(building);
    }

    getBuildingCost(building) {
        return this.castle.getBuildingCost(building);
    }

    getBuildingUpgradeTime(building) {
        return this.castle.getBuildingUpgradeTime(building);
    }

    isConstrucing() {
        return this.castle.isConstrucing();
    }

    reset() {
        this.persistence.erase("castle");
        this.castle = new Castle();
        this.persistence.write("castle", JSON.stringify(this.castle));
    }

    update() {
        this.castle.update();
    }

    getEventConstruction() {
        return this.castle.getEventConstruction();
    }

}