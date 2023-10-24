import ViewContainer from "./js/ViewContainer.js";
import Game from "./js/logic/Game.js";

customElements.define("view-container", ViewContainer);
const viewContainer = document.createElement("view-container");
document.body.appendChild(viewContainer);
viewContainer.setGame(new Game());
//viewContainer.update();

setInterval(function () { viewContainer.update() }, 1_000);