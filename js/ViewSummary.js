export default class ViewSummary extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerText = "Summary";
        this.root = document.createElement("div");
        this.root.innerText = this.foo; 
        this.append(this.root);
    }

}