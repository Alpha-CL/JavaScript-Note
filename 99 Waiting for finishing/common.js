/**
 * Get target type
 * get(target: any): string;
 */

function getType(target) {

    const template = {

        "[object Array]": "array",
        "[object Object]": "object",
        "[object Number]": "object-number",
        "[object String]": "object-string",
        "[object Boolean]": "object-boolean"
    };

    if (target === null) {

        return "null";
    }

    if (typeof (target) == "object") {

        let str = Object.prototype.toString.call(target);

        return template[str];

    } else {

        return typeof (target);
    }
}


/**
 * Remove duplicate items from an array
 * unique(): void;
 */

Array.prototype.unique = function () {

    let temp = {},
        arr = [],
        len = this.length;

    for (let i = 0; i < len; i++) {

        if (!temp[this[i]]) {

            temp[this[i]] = 'abc';

            arr.push(this[i]);
        }
    }

    return arr;
};



