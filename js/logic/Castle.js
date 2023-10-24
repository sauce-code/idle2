import Building from "./Building.js";
import ClayPit from "./ClayPit.js";
import ConstructionCenter from "./ConstructionCenter.js";
import FoodYard from "./FoodYard.js";
import GoldMine from "./GoldMine.js";
import LumberJack from "./LumberJack.js";
import OreMine from "./OreMine.js";
import ResearchCenter from "./ResearchCenter.js";
import Settings from "./Settings.js";
import Stash from "./Stash.js";
import StoneMason from "./StoneMason.js";
import WaterSpring from "./WaterSpring.js";

export default class Castle {

    date;
    resources;
    waterSpring;
    foodYard;
    lumberJack;
    stoneMason;
    oreMine;
    goldMine;
    constructionCenter;
    researchCenter;
    eventConstruction;
    constructing;

    constructor() {
        this.date = new Date();
        this.resources = new Stash();
        this.waterSpring = new WaterSpring();
        this.foodYard = new FoodYard();
        this.lumberJack = new LumberJack();
        this.lumberJack.level = 1;
        this.clayPit = new ClayPit();
        this.stoneMason = new StoneMason();
        this.stoneMason.level = 1;
        this.oreMine = new OreMine();
        this.goldMine = new GoldMine();
        this.constructionCenter = new ConstructionCenter();
        this.researchCenter = new ResearchCenter();
        this.constructing = false;
    }

    getResources() {
        return this.resources;
    }

    upgrade(building) {
        this.eventConstruction = this.#getBuilding(building).upgrade();
    }

    #getBuilding(building) {
        switch (building) {
            case Building.WATER_SPRING:
                return this.waterSpring;
            case Building.FOOD_YARD:
                return this.foodYard;
            case Building.LUMBER_JACK:
                return this.lumberJack;
            case Building.CLAY_PIT:
                return this.clayPit;
            case Building.STONE_MASON:
                return this.stoneMason;
            case Building.ORE_MINE:
                return this.oreMine;
            case Building.GOLD_MINE:
                return this.goldMine;
            case Building.CONSTRUCTION_CENTER:
                return this.constructionCenter;
            case Building.RESEARCH_CENTER:
                return this.researchCenter;
        }
    }

    update() {
        const now = new Date();
        const diff = (now - this.date) / 1_000 * Settings.SPEED;
        const water = 0;
        const food = 0;
        const lumber = diff * this.lumberJack.getIncome();
        const clay = 0;
        const stone = diff * this.stoneMason.getIncome();
        const ore = 0;
        const gold = 0;
        this.resources.add(new Stash(water, food, lumber, clay, stone, ore, gold));
        this.date = now;
    }

    getBuildingCost(building) {
        return this.#getBuilding(building).getCost();
    }

    getBuildingUpgradeTime(building) {
        return this.#getBuilding(building).getUpgradeTime();
    }

    getBuildingLevel(building) {
        return this.#getBuilding(building).getLevel();
    }

    isConstrucing() {
        return this.constructing;
    }

    getEventConstruction() {
        return this.eventConstruction;
    }

}