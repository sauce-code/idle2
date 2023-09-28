export default class Building {

    static WATER_SPRING = 0;
    static FOOD_YARD = 1;
    static LUMBER_JACK = 2;
    static CLAY_PIT = 3;
    static STONE_MASON = 4;
    static ORE_MINE = 5;
    static GOLD_MINE = 6;
    static CONSTRUCTION_CENTER = 7;
    static RESEARCH_CENTER = 8;

    static length() {
        return 9;
    }

    constructor(level=0) {
        if (this.constructor == Building) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.level = level;
    }

    getCost() {
        throw new Error("Method 'getCost()' must be implemented.");
    }

    getLevel() {
        return this.level;
    }

    doUpgrade() {
        throw new Error("Method 'doUpgrade()' must be implemented.");
    }

    isVisible() {
        throw new Error("Method 'isVisible()' must be implemented.");
    }

}