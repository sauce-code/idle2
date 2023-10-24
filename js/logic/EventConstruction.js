import Event from "./Event.js";

export default class EventConstruction extends Event {

    building;

    constructor(dateStart, duration, building) {
        super(dateStart, duration);
        this.building = building;
    }

    fire() {
        this.building.level += 1;
        console.log(`Finished construction for building ${building.level} level ${this.building.level}.`)
    }

}