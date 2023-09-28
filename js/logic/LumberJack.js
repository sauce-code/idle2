import BuildingHarvest from "./BuildingHarvest.js";
import Stash from "./Stash.js";

export default class LumberJack extends BuildingHarvest {

    constructor() {
        super();
    }

    getIncome() {
        return 11 * (1,2 ** this.level);
    }

    getCost() {
        const costLumber = 9 * (1,2 ** this.level);
        const costStone = 3 * (1,2 ** this.level);
        return new Stash(0, 0, costLumber, 0, costStone, 0, 0);
    }

}