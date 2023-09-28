import ViewMain from "./js/ViewMain.js";
import ViewFooter from "./js/ViewFooter.js";
import ViewHeader from "./js/ViewHeader.js";
import ViewContainer from "./js/ViewContainer.js";
import ViewNav from "./js/ViewNav.js";
import Game from "./js/logic/Game.js";
import ViewBuildings from "./js/ViewBuildings.js";

customElements.define("view-container", ViewContainer);
customElements.define("view-buildings", ViewBuildings);
customElements.define("view-header", ViewHeader);
customElements.define("view-nav", ViewNav);
customElements.define("view-main", ViewMain);
customElements.define("view-footer", ViewFooter);

const viewContainer = document.createElement("view-container");
viewContainer.setGame(new Game());
document.body.appendChild(viewContainer);

setInterval(viewContainer.update(), 1_000);