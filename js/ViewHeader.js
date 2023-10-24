import View from "./View.js";
import Resource from "./logic/Resource.js";

export default class ViewHeader extends View {

    tdResources = [];

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerText = "Header";
        this.table = document.createElement("table");
        {
            const tr = document.createElement("tr");
            for (let i = 0; i < Resource.length(); i++) {
                const th = document.createElement("th");
                th.innerText = Resource.name(i);
                tr.appendChild(th);
            }
            this.table.appendChild(tr);
        }
        {
            const tr = document.createElement("tr");
            for (let i = 0; i < Resource.length(); i++) {
                const td = document.createElement("td");
                td.innerText = "0";
                this.tdResources.push(td);
                tr.appendChild(td);
            }
            this.table.appendChild(tr);
        }
        this.append(this.table);
    }

    update() {
        const resources = this.game.getResources();
        for (let i = 0; i < Resource.length(); i++) {
            this.tdResources[i].innerText = Math.floor(Object.values(resources)[i]);
        }
    }

}