import ProductionBuilding from "./ProductionBuilding.js";
import Stash from "./Stash.js";

export default class LumberJack extends ProductionBuilding {

    constructor() {
        super();
    }

    //override
    getIncome() {
        return 11 * (1,2 ** this.level);
    }

    //override
    getCost() {
        const costLumber = 9 * (1,2 ** this.level);
        const costStone = 300 * (1,2 ** this.level);
        return new Stash(0, 0, costLumber, 0, costStone, 0, 0);
    }

    getUpgradeTime() {
        return (this.level + 1) * 10 * 1_000;
    }

}