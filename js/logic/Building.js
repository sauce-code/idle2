import Event from "./Event.js";
import Stash from "./Stash.js";

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

    level;

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
        return new Stash();
        //throw new Error("Method 'getCost()' must be implemented.");
    }

    getUpgradeTime() {
        return 1;
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

    upgrade(stash) {
        const cost = this.getCost();
        if (!stash.includes(cost)) {
            return undefined;
        }
        stash.subtract(cost);
        return new Event(new Date(), this.getUpgradeTime());
    }

}