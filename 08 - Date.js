///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.01:

//NO.02:

//NO.03:

//NO.04:

//NO.05:

//NO.06:

//NO.07:

//NO.08:

//NO.09:

//NO.10:

//NO.11:

//NO.12:


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//系统自带 Math.max 语法
var result1 = Math.max(10, 20, 30, 40);
console.log(result1);                            //40


//自定义创建 Math.max 语法
function MyMath() {

    this.getMax = function () {

        var max = arguments[0];

        for (var i = 0; i <= arguments.length; i++) {

            if (max < arguments[i]) {
                max = arguments[i];
            }
        }

        return max;
    }
}


var mt = new MyMath();

var result2 = mt.getMax(10, 20, 30, 40, 50, 100, 3);

console.log(result2);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//随机产生一个十六进制颜色值
//封装成一个函数

console.log(parseInt(Math.random() * 5));

function getColor() {

    let str = "#";

    //十六进制值的数组
    let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    for (let i = 0; i < 6; i++) {

        var num = parseInt(Math.random() * 16);

        str += arr[num];
    }

    return str;
}

console.log(getColor());

window.onclick = function () {

    document.getElementById("dv").style.backgroundColor = getColor();
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var date1 = new Date();
console.log(date1);
//expected output: Wed Aug 28 2019 10:39:28 GMT+0800 (China Standard Time)


var date11 = new Date("2019-01-08");
console.log(date11);
//expected output: Tue Jan 08 2019 08:00:00 GMT+0800 (China Standard Time)


var date12 = new Date("2019/01/08");
console.log(date12);
//expected output: Tue Jan 08 2019 00:00:00 GMT+0800 (China Standard Time)


//Date.now()

var date1 = Date.now();
console.log(date1);
//expected output: 1566960786720
//1 s = 1000 hs


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//格式化日期和时间

/**
 * 获取: 指定格式的时间
 * @param dt 日期对象
 * @returns {string} 返回: 字符串形式的日期
 */
function getDate(dt) {

    // var dt = new Date();

    //Obtain year
    var year = dt.getFullYear();

    //Obtain month
    var month = dt.getMonth();

    //Obtain day
    var day = dt.getDate();

    //Obtain hour
    var hour = dt.getHours();

    //Obtain minute
    var minute = dt.getMinutes();

    //Obtain
    var second = dt.getSeconds();


    // var arr = [month, day, hour, minute, second];

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;


    return year + "年" + month + "月" + day + "日" + hour + ":" + minute + ":" + second;
}


var dt = new Date();

console.log(getDate(dt));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









