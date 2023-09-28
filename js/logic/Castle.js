import ConstructionCenter from "./ConstructionCenter.js";
import FoodYard from "./FoodYard.js";
import GoldMine from "./GoldMine.js";
import LumberJack from "./LumberJack.js";
import OreMine from "./OreMine.js";
import ResearchCenter from "./ResearchCenter.js";
import StoneMason from "./StoneMason.js";
import WaterSpring from "./WaterSpring.js";

export default class Castle {

    waterSpring;
    foodYard;
    lumberJack;
    stoneMason;
    oreMine;
    goldMine;
    constructionCenter;
    researchCenter;

    constructor() {
        this.waterSpring = new WaterSpring();
        this.foodYard = new FoodYard();
        this.lumberJack = new LumberJack();
        this.stoneMason = new StoneMason();
        this.oreMine = new OreMine();
        this.goldMine = new GoldMine();
        this.constructionCenter = new ConstructionCenter();
        this.researchCenter = new ResearchCenter();
    }

}