import radColor from '../util/radColor';
import {getRandom} from '../util/radColor';

let container = document.querySelector('.container'),
    oCenter = document.querySelector('.center');

export default function (n, isPrime) {

    let span = document.createElement('span');

    span.innerText = n;

    if (isPrime) {

        span.style.color = radColor();

        createCenterPrimeNumber(n, isPrime, radColor());
    }

    container.appendChild(span);

    createCenterNumber(n);

};

function createCenterNumber(n) {

    oCenter.innerText = n;
}

function createCenterPrimeNumber(n, isPrime, color) {

    let oDiv = document.createElement('div');

    oDiv.innerText = n;
    oDiv.className = 'center';
    oDiv.style.color = color;

    document.body.appendChild(oDiv);

    getComputedStyle(oDiv).left;

    oDiv.style.transform = `translate(${getRandom(-200, 200)}px, ${getRandom(-200, 200)}px)`;
    oDiv.style.opacity = '0';
}