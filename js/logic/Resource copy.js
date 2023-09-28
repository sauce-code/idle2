export default class ResourceCopy {

    static WATER = new Resource("Wasser");
    static FOOD = new Resource("Essen");
    static LUMBER = new Resource("Holz");
    static CLAY = new Resource("Lehm");
    static STONE = new Resource("Stein");
    static ORE = new Resource("Erz");
    static GOLD = new Resource("Gold");

    constructor(name) {
        this.name = name;
    }

    static all() {
        return Object.keys(Resource);
    }

    toString() {
        return `Resource.${this.name}`;
    }

}