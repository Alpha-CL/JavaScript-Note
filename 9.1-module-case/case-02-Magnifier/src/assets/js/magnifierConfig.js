import {Magnifier} from "./Magnifier";

export const magnifier = new Magnifier({
    smallBg: "img/mouse.jpg",
    bigBg: "img/mouseBig.jpg",
    domSmall: document.querySelector("#spec-img"),
    domBig: document.querySelector("#bigimg")
});

magnifier.init();
