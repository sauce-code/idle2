import ButtonUpgrade from "./ButtonUpgrade.js";
import Content from "./Content.js";
import Building from "./logic/Building.js";

export default class ContentBuildings extends Content {

    tdName = [];
    tdLevel = [];
    tdCostLumber = [];
    tdCostStone = [];
    tdDuration = [];
    buttons = [];

    constructor() {
        super();
    }

    setContent(state) {
        this.setVisible(state === Content.BUILDINGS);
    }

    connectedCallback() {
        this.setVisible(true);
        this.innerText = "Buildings";
        this.table = document.createElement("table");
        {
            const tr = document.createElement("tr");
            {
                const th = document.createElement("th");
                th.innerText = "Gebäude";
                tr.appendChild(th);
            }
            {
                const th = document.createElement("th");
                th.innerText = "Level";
                tr.appendChild(th);
            }
            {
                const th = document.createElement("th");
                th.innerText = "Kosten H";
                tr.appendChild(th);
            }
            {
                const th = document.createElement("th");
                th.innerText = "Kosten S";
                tr.appendChild(th);
            }
            {
                const th = document.createElement("th");
                th.innerText = "Dauer";
                tr.appendChild(th);
            }
            {
                const th = document.createElement("th");
                th.innerText = "";
                tr.appendChild(th);
            }
            this.table.appendChild(tr);
        }
        for (let i = 0; i < Building.length(); i++) {
            const tr = document.createElement("tr");
            { //name
                const td = document.createElement("td");
                td.innerText = this.#getBuildingName(i);
                this.tdName.push(td);
                tr.appendChild(td);
            }
            { // level
                const td = document.createElement("td");
                td.innerText = "0";
                this.tdLevel.push(td);
                tr.appendChild(td);
            }
            { // kosten H
                const td = document.createElement("td");
                td.innerText = "0";
                this.tdCostLumber.push(td);
                tr.appendChild(td);
            }
            { // kosten S
                const td = document.createElement("td");
                td.innerText = "0";
                this.tdCostStone.push(td);
                tr.appendChild(td);
            }
            { // duration
                const td = document.createElement("td");
                td.innerText = "0";
                this.tdDuration.push(td);
                tr.appendChild(td);
            }
            { // button
                const td = document.createElement("td");
                const button = document.createElement("button");
                button.innerText = "buy";
                this.buttons.push(button);
                td.appendChild(button);
                tr.appendChild(td);
            }
            this.table.appendChild(tr);
        }
        this.append(this.table);
    }

    update() {
        for (let i = 0; i < this.tdName.length; i++) {
            const cost = this.game.getBuildingCost(i);
            this.tdCostLumber[i].innerText = cost.lumber;
            this.tdCostStone[i].innerText = cost.stone;
            this.tdLevel[i].innerText = this.game.getBuildingLevel(i);
            const date = new Date(this.game.getBuildingUpgradeTime(i));
            this.tdDuration[i].innerText = `${(date.getHours() - 1).toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`
            this.buttons[i].innerText = (this.game.getBuildingLevel(i) === 0) ? "bauen" : "ausbauen";
            this.buttons[i].disabled = !(this.game.getResources().includes(cost));
        }
    }

    #getBuildingName(building) {
        switch (building) {
            case Building.WATER_SPRING:
                return "Brunnen";
            case Building.FOOD_YARD:
                return "Jäger";
            case Building.LUMBER_JACK:
                return "Holfäller";
            case Building.CLAY_PIT:
                return "Lehmgrube";
            case Building.STONE_MASON:
                return "Steinmetz";
            case Building.ORE_MINE:
                return "Erzmine";
            case Building.GOLD_MINE:
                return "Goldmine";
            case Building.CONSTRUCTION_CENTER:
                return "Hauptgebäude";
            case Building.RESEARCH_CENTER:
                return "Forschungszentrum";
        }
    }

}