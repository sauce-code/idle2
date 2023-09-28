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
        const water = this.water + other.water;
        const food = this.food + other.food;
        const lumber = this.lumber + other.lumber;
        const clay = this.clay + other.clay;
        const stone = this.stone + other.stone;
        const ore = this.ore + other.ore;
        const gold = this.gold + other.gold;
        return new Stash(water, food, lumber, clay, stone, ore, gold);
    }

}