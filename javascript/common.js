

function setInnerText(element, text) {

    //判断浏览器是否支持这个属性( 判断这个属性的类型，是否是 undefined，如果是则不支持，如果不是则支持 )
    if (typeof element.textContent == "undefined") {

        element.innerText = text;

    } else {

        element.textContent = text;
    }
}



