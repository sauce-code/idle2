export default class Resource {

    static WATER = 0;
    static FOOD = 1;
    static LUMBER = 2;
    static CLAY = 3;
    static STONE = 4;
    static ORE = 5;
    static GOLD = 6;

    static length() {
        return 7;
    }

    static name(resource) {
        switch (resource) {
            case this.WATER:
                return "Wasser";
            case this.FOOD:
                return "Nahrung";
            case this.LUMBER:
                return "Holz";
            case this.CLAY:
                return "Lehm";
            case this.STONE:
                return "Stein";
            case this.ORE:
                return "Erz";
            case this.GOLD:
                return "Gold";
            default:
                throw new Error("No such Enum.");
        }
    }

}