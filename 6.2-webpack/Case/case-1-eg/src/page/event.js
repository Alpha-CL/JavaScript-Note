import productionFigures from "../util/productionFigures";
import appendNumber from "./appendNumber";

const n = new productionFigures(50);

n.numberIsPrime = function (n, isPrime) {

    appendNumber(n, isPrime);
};

let isStart = false;

window.onclick = () => {

    if (isStart) {

        n.stop();

        isStart = false;

    } else {

        n.start();

        isStart = true;
    }
};


