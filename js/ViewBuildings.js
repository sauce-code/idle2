import Building from "./logic/Building.js";

export default class ViewBuildings extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
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
                th.innerText = "";
                tr.appendChild(th);
            }
            this.table.appendChild(tr);
        }
        for (let i = 0; i < Building.length(); i++) {
            const tr = document.createElement("tr");
            {
                const td = document.createElement("td");
                td.innerText = "Gebäude";
                tr.appendChild(td);
            }
            {
                const td = document.createElement("td");
                td.innerText = "0";
                tr.appendChild(td);
            }
            {
                const td = document.createElement("td");
                td.innerText = "0";
                tr.appendChild(td);
            }
            {
                const td = document.createElement("td");
                td.innerText = "0";
                tr.appendChild(td);
            }
            {
                const td = document.createElement("td");
                const button = document.createElement("button");
                button.innerText = "buy";
                td.appendChild(button);
                tr.appendChild(td);
            }
            this.table.appendChild(tr);
        }
        this.append(this.table);
    }

}