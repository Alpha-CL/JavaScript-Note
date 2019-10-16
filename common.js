/**
 * 根据元素 Id 获取元素
 *
 * @param element
 * @returns {HTMLElement}
 */
function my$(element) {

    return document.getElementById(element);
}


/**
 * 设置元素的文本内容
 *
 * @param element
 * @param text
 */
function setInnerText(element, text) {

    if (typeof (element.textContent) == 'undefined') {

        element.innerText = text;

    } else {

        element.textContent = text;
    }
}

/**
 * 获取元素的文本内容
 *
 * @param element
 * @returns {*|string|string}
 */
function getInnerText(element) {

    if (typeof (element.textContent) == 'undefined') {

        return element.innerText;

    } else {

        return element.textContent;
    }
}


/**
 * 获取父级元素中的第一个子元素
 *
 * @param element
 * @returns {(() => (Node | null)) | ActiveX.IXMLDOMNode | ChildNode|Element}
 */
function getFirstElement(element) {

    if (element.firstElementChild) {

        return element.firstElementChild;

    } else {

        var node = element.firstChild;

        while (node && node.nodeType != 1) {

            node = node.nextSibling;
        }

        return node;
    }
}

/**
 * 获取某个元素的前一个兄弟元素
 *
 * @param element
 * @returns {Node | (() => (Node | null)) | ActiveX.IXMLDOMNode|Element}
 */
function getPreviousElement(element) {

    if (element.previousElementSibling) {

        return element.previousElementSibling;
    } else {

        var node = element.previousSibling;

        while (node && node.nodeType != 1) {

            node = node.previousSibling;
        }
        return node;
    }
}


/**
 * 获取某个元素的后一个兄弟元素
 *
 * @param element
 * @returns {ChildNode | (() => (Node | null)) | ActiveX.IXMLDOMNode | Node|Element}
 */
function getNextElement(element) {

    if (element.nextElementSibling) {

        return element.nextElementSibling;

    } else {

        var node = element.nextSibling;

        while (node && node.nodeType != 1) {

            node = node.nextSibling;
        }
        return node;
    }
}


/**
 * 获取父级元素中最后一个子元素
 *
 * @param element
 * @returns {ActiveX.IXMLDOMNode | ChildNode | (() => (Node | null))|Element}
 */
function getLastElement(element) {

    if (element.lastElementChild) {

        return element.lastElementChild;

    } else {

        var node = element.lastChild;

        while (node && node.nodeType != 1) {

            node = node.previousSibling;
        }
        return node;
    }
}

/**
 * 获取某个元素的所有兄弟元素
 *
 * @param element
 */
function getSiblings(element) {

    if (!element) return;

    var elements = [];

    var ele = element.previousSibling;

    while (ele) {

        if (ele.nodeType === 1) {

            elements.push(ele);
        }
        ele = ele.previousSibling;
    }

    ele = element.nextSibling;

    while (ele) {

        if (ele.nodeType === 1) {

            elements.push(ele);

        }
        ele = ele.nextSibling;
    }
    return elements;
}


function userBrowser() {

    var browserName = navigator.userAgent.toLowerCase();

    if (/msie/i.test(browserName) && !/opera/.test(browserName)) {

        console.log("IE");

    } else if (/firefox/i.test(browserName)) {

        console.log("Firefox");

    } else if (/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)) {

        console.log("Chrome");

    } else if (/opera/i.test(browserName)) {

        console.log("Opera");

    } else if (/webkit/i.test(browserName) && !(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))) {

        console.log("Safari");

    } else {

        console.log("不知道什么鬼!");
    }
}

/**
 * 获取任意元素饿任意一个属性的当前的值
 *
 * @param element
 * @param attr
 * @returns {string}
 */
function getStyle(element, attr) {

    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currencyStyle[attr || 0];
}



/**
 * 最终版动画函数( 有 bug )
 *
 * @param element
 * @param json: {'attrName': attrValue}
 * @param fn
 */
function animate(element, json, fn) {

    clearInterval(element.timeId);

    element.timeId = setInterval(function () {

        var flag = true;

        for (var attr in json) {

            if (attr == "opacity") {

                var current = getStyle(element, attr) * 100;

                var target = json[attr] * 100;

                var step = (target - current) / 10;

                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                current += step;

                element.style[attr] = current / 100;

            } else if (attr = 'zIndex') {

                element.style[attr] = json[attr];

            } else {

                var current = parseInt(getStyle(element, attr)) || 0;

                var target = json[attr];

                var step = (target - current) / 10;

                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                current += step;

                element.style[attr] = current + "px";

            }//end if

            if (current != target) {

                flag = false;
            }

        }//end for

        if (flag) {

            clearInterval(timeId);

            if (fn) {

                fn();
            }//end if

        }//end if

        console.log("target:" + target + "current:" + current + "step:" + step);

    }, 10)

}






























































