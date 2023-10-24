export default class Event {

    static CONSTRUCTION = 0;
    static RESEARCH = 1;

    dateStart;
    dateEnd;
    duration;
    cost;

    constructor(dateStart, duration) {
        this.dateStart = dateStart;
        this.duration = duration;
        this.dateEnd = dateStart + duration;
    }

    fire() {
        
    }

    abort() {
        return this.cost;
    }

}