import ProductionBuilding from "./ProductionBuilding.js";
import Stash from "./Stash.js";

export default class StoneMason extends ProductionBuilding {

    constructor() {
        super();
    }

    getIncome() {
        return 10 * (1,2 ** this.level);
    }

    getCost() {
        const costLumber = 7 * (1,2 ** this.level);
        const costStone = 3.5 * (1,2 ** this.level);
        return new Stash(0, 0, costLumber, 0, costStone, 0, 0);
    }

    getUpgradeTime() {
        return this.level * 10 * 1_000;
    }

}