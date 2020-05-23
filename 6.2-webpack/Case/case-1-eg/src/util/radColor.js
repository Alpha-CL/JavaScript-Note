let colors = ['#f26395', '#62efab', '#ffe868', '#80e3f7', '#d781f9'];

export function getRandom(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}

export default function () {

    let i = getRandom(0, colors.length);

    return colors[i];
}
