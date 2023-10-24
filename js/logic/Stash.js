export default class Stash {

    constructor(water = 0, food = 0, lumber = 0, clay = 0, stone = 0, ore = 0, gold = 0) {
        this.water = water;
        this.food = food;
        this.lumber = lumber;
        this.clay = clay;
        this.stone = stone;
        this.ore = ore;
        this.gold = gold;
    }

    add(other) {
        this.water += other.water;
        this.food += other.food;
        this.lumber += other.lumber;
        this.clay += other.clay;
        this.stone += other.stone;
        this.ore += other.ore;
        this.gold += other.gold;
    }

    subtract(other) {
        this.water -= other.water;
        this.food -= other.food;
        this.lumber -= other.lumber;
        this.clay -= other.clay;
        this.stone -= other.stone;
        this.ore -= other.ore;
        this.gold -= other.gold;
    }

    addNew(other) {
        const water = this.water + other.water;
        const food = this.food + other.food;
        const lumber = this.lumber + other.lumber;
        const clay = this.clay + other.clay;
        const stone = this.stone + other.stone;
        const ore = this.ore + other.ore;
        const gold = this.gold + other.gold;
        return new Stash(water, food, lumber, clay, stone, ore, gold);
    }

    includes(other) {
        let includes = true;
        if (this.water < other.water) includes = false;
        if (this.food < other.food) includes = false;
        if (this.lumber < other.lumber) includes = false;
        if (this.clay < other.clay) includes = false;
        if (this.stone < other.stone) includes = false;
        if (this.ore < other.ore) includes = false;
        if (this.gold < other.gold) includes = false;
        return includes;
    }

}