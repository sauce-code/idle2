import Building from "./Building.js";

export default class BuildingHarvest extends Building {

    static WATER_SPRING = 0;
    static FOOD_YARD = 1;
    static LUMBER_JACK = 2;
    static CLAY_PIT = 3;
    static STONE_MASON = 4;
    static ORE_MINE = 5;
    static GOLD_MINE = 6;

    static length() {
        return 7;
    }

    constructor(level=0) {
        super(level);
        if (this.constructor == BuildingHarvest) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    getIncome() {
        throw new Error("Method 'getIncome()' must be implemented.");
    }

}