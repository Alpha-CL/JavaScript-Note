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


//Math Methods


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * Math.abs(x: number): number;
 *
 * 返回绝对值
 */

console.log(Math.abs('-1'));            //1
console.log(Math.abs('-2'));            //2
console.log(Math.abs(null));            //0

console.log(Math.abs('string'));        //NaN


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * Math.PI: number;
 * @type {number}
 */

console.log("Math.PI: " + Math.PI);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

/**
 * ceil(x: number): number;
 *
 * 无论小数点后面是什么，向上取整数( 进1 )
 */


console.log(Math.ceil(12.3));           //13

/**
 * floor(x: number): number;
 *
 * 无论小数点后面是什么, 都舍去
 */


console.log(Math.floor(12.3));          //12


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * fround(x: number): number;
 *
 * 将任意的数字转换为离他最近的，单精度浮点型数字
 */

console.log(Math.fround(2));
console.log(Math.fround(2.1));
console.log(Math.fround(2.9));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * max(...values: number[]): number;
 *
 * 返回一组数中的最大值
 */


console.log(Math.max(10, 1, 32, 31, 5, 6, 132));            //132

/**
 * min(...values: number[]): number;
 *
 * 返回一组数中的最小值
 */

console.log(Math.min(10, 1, 32, 31, 5, 6, 132));            //1


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * pow(x: number, y: number): number;
 *
 * 计算一个数字的 x 次 幂
 */

console.log(Math.pow(2, 4));             //16


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * Math.sqrt(x: number): number;
 *
 * 计算一个数字的平方根
 */

console.log(Math.sqrt(9));              //3


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * Math.random()
 *
 * 返回一个随机数，数值范围 0 ～ 1
 */


//返回随机数: 0 ~ 1 之间
console.log(Math.random());                             //0.37670336591849085

//返回随机整数数: 0 ~ 1 之间
console.log(parseInt(Math.random()));                   //0

//返回指定范围随机数: 0 ~ 4
console.log(parseInt(Math.random() * 5));           //0 ~ 4

//返回指定范围随机数: 0 ~ 5
console.log(parseInt(Math.random() * 5) + 1);       //0 ~ 5


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


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

    var str = "#";

    //十六进制值的数组
    var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    for (var i = 0; i < 6; i++) {

        //产生的随机数是 "十六进制数组的位数索引值"，再根据索引值找到相应的值
        var num = parseInt(Math.random() * 16);

        //拼接随机数产生索引找到的随机数
        str += arr[num];
    }
    return str;
}

console.log(getColor());

window.onclick = function () {

    document.getElementById("dv").style.backgroundColor = getColor();
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//显示当前服务器的时间
var date1 = new Date();
console.log(date1);
//expected output: Wed Aug 28 2019 10:39:28 GMT+0800 (China Standard Time)


//传入object，显示Date类型
var date11 = new Date("2019-01-08");
console.log(date11);
//expected output: Tue Jan 08 2019 08:00:00 GMT+0800 (China Standard Time)


//传入object，显示Date类型
var date12 = new Date("2019/01/08");
console.log(date12);
//expected output: Tue Jan 08 2019 00:00:00 GMT+0800 (China Standard Time)


//Date.now()
//
// 显示 当前时间 到 1970/01/01 之间的 毫秒数

var date13 = Date.now();
console.log(date13);
//expected output: 1566960786720
//1 s = 1000 hs


//-------------------------------------------------------------------------------------------------------------------//


var dt = new Date();


//年
dt.getFullYear();

//月( 从 0 开始 ）
dt.getMonth();

//日
dt.getDate();

//小时
dt.getHours();

//分钟
dt.getMinutes();

//秒
dt.getSeconds();


//星期
dt.toDateString();

//日期
dt.toLocaleDateString();


//时间
dt.toTimeString();

//时间
dt.toLocaleTimeString();


//毫秒
dt.valueOf();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//格式化日期和时间

/**
 * 获取: 指定格式的时间
 * @param dt1 日期对象
 * @returns {string} 返回: 字符串形式的日期
 */
function getDate(dt1) {

    // var dt = new Date();

    //Obtain year
    var year = dt1.getFullYear();

    //Obtain month
    var month = dt1.getMonth();

    //Obtain day
    var day = dt1.getDate();

    //Obtain hour
    var hour = dt1.getHours();

    //Obtain minute
    var minute = dt1.getMinutes();

    //Obtain
    var second = dt1.getSeconds();


    // var arr = [month, day, hour, minute, second];

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;


    return year + "年" + month + "月" + day + "日" + hour + ":" + minute + ":" + second;
}


var dt1 = new Date();

console.log(getDate(dt1));

//也可以直接吧 new Date()；传入进去
//
// console.log(getDate(new Date()));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//字符串对象类型
//

//在 JS 中只要用双引号或单引号包裹的数据就是 "字符串"
//
// var str1 = "中文";
// var str2 = "español";
// var str3 = "Deutsch";
// var str4 = "English";
// var str5 = "देवनागरी";
// var str6 = "العربية";
// var str7 = "português";
// var str8 = "বাংলা";
// var str9 = "한국어";


var str11 = "萨瓦迪卡";


//强类型语言声明
//
//整数
//
// int num = 10;
//
//小数
//
// float num = 9.9;


//字符串
//
// string str = "Hello";                //强类型语言中 '字符串' 必须用 "双引号" 包裹
//
//
//字符
//
// char ch = 'h';                       //强类型语言中 '字符' 必须用 '单引号' 包裹
//                                      //字符的值: 只有一个
//
// 'h' + 'e' + 'l' + 'l' + 'o' ==> "hello"
//


//字符串:
//
// 可以用 '单引号' 或 "双引号" 包裹
//
// 可以存储 '任意长度' 的 "任意值"

//字符:
//
// 必须用 '单引号' 包裹
//
// 并且 '字符' 的值 '只有一个'


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//遍历字符串中的 '字符'
//
// JS 中并没有字符类型( 仅代表意义上的 )

var str12 = "hello";

for (var i = 0; i < str12.length; i++) {

    console.log(str12[i]);
}

//expected output:
//
// h
// e
// l
// l
// o


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//字符串的特性
//
// 值的不可改变性
//
//
// 字符串可以通过索引访问 字符串中的某个值
//
// 但是仅 "只读"
// 不能 "设置修改"


var str13 = "hello";

str13[1] = "W";
// 仅通过索引访问 字符串中的值，并不能修改( !important )

console.log(str13);
//expected output: hello


var str13 = "world";
// 声明新变量赋值
//
// step - 1 -> 在 "栈" 中申请另一个空间，命名为 str13，
//
// step - 2 -> 把之前的 str13 空间的名字抹掉，还原数据空间的序列名称( 并不会抹去数据内容: 字符串的堆地址 )
//
// step - 3 -> 在 "堆" 中申请一部分空间，存放 "新复杂数据的值( world )" 和 "复杂数据的地址"
//
// step - 4 -> 再把 "堆" 中 "新复杂数据的地址" 存储到 "新声明变量的值中" 形成新指向链接


console.log(str13);
//expected output: world


//-------------------------------------------------------------------------------------------------------------------//


// String Methods


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//charAt()
//
// 返回指定索引位置的 '字符'
//
// 如果超出当前字符串索引长度，则返回 ""( 空串 )


var str14 = "HelloWorld";

console.log(".charAt: " + str14.charAt(0));               // H
console.log(".charAt: " + str14.charAt(1));               // e
console.log(".charAt: " + str14.charAt(2));               // l
console.log(".charAt: " + str14.charAt(3));               // l
console.log(".charAt: " + str14.charAt(4));               // o

console.log(".charAt: " + str14.charAt(999));             // ""


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//String.fromCharCode(num1, num2, ... numN)
//
// 返回 指定的 Unicode 值 序列 创建的字符串


var str151 = String.fromCharCode(83);               // S

var str15 = String.fromCharCode(83, 79, 83);        // SOS

console.log("String.fromCharCode: " + str15);
//expected output: SOS


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//.concat(string1, string2 ..., stringN)
//
// 拼接多个字符串


var str16 = "My";

// console.log(str + "name" + "is" + "alpha");
//
//
console.log(".concat: " + str16.concat(" name", " is", " alpha"));
//expected output: "My name is alpha"


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//.indexOf(searchValue, [ fromIndex])
//
// 从左到右检索字符串，返回正序字符串的位置
//
// searchValue: "要搜索字符串"
//
// fromIndex: "从左第几位开始检索字符串索引"
//
// 如果检索不到对应字符串，则返回: -1


var str17 = "It's easy, isn't it";

var index1 = str17.indexOf("t");                 // 1

var index2 = str17.indexOf("t", 3);              // 15

var index3 = str17.indexOf("o");                 // -1

console.log(".indexOf: " + index1);
console.log(".indexOf: " + index2);
console.log(".indexOf: " + index3);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//.lastIndexOf(searchValue, [ fromIndex])
//
// 从右到左检索字符串，返回正序字符串的位置
//
// searchValue: "要搜索字符串"
//
// fromIndex: "从左第几位开始检索字符串索引"
//
// 如果检索不到对应字符串，则返回: 1


var str18 = "It's easy, isn't it";

var index4 = str18.lastIndexOf("t");                // 18

var index5 = str18.lastIndexOf("t", 5);             // 1

var index6 = str18.lastIndexOf("o");                // 1


console.log(".lastIndexOf: " + index4);
console.log(".lastIndexOf: " + index5);
console.log(".lastIndexOf: " + index5);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//.replace(regexp|substr, newSubStr|function)
//
// regexp|substr: "原来的字符串( 用来检索的 )"
//
// newSubStr|function: "新的字符串( 需要替换的 )"


var str19 = "What you don't know is that I miss you very much every day";

//判断 "原字符串" 中是否有这个 "新字符串"
if (str19.indexOf("miss") != -1) {

    //如果有，则替换
    str19 = str19.replace("miss", "love");
} else {
    o
    //如果没有，则输出 "N find miss"
    console.log("No find miss");
}

console.log(".replace: " + str19);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//.slice(beginSlice [, endSlice])
//
// beginSlice: 返回原字符串索引的开始位数
//
// endSlice: 返回原字符串索引的结束位数( 返回值不包括最后一位 )


var str20 = "See you again";

str20 = str20.slice(4, 8);

console.log(".slice: " + str20);
//expected output:


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//.split(separator [, limit])
//
// separator: 分割器 -> 根据所输入的值 分割字符串
//
// limit: 切割后留下的个数


var str21 = "乔峰|慕容|凤姐|梅超风|大蛇丸";

var arr1 = str21.split("|");


for (var i = 0; i < arr1.length; i++) {

    console.log(".split: " + arr1[i]);
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//.substr(start[, length])
//
// start: 返回新字符串的启始索引值
//
// length: 返回新字符串的长度


var str22 = "What you don't know is that I miss you very much every day";

str22 = str22.substr(5, 10);

console.log(".substr: " + str22);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//.toLocaleLowerCase()
//
// 把英文大写字母转小写


var str23 = "HELLO";

str23 = str23.toLocaleLowerCase();

console.log(".toLocaleLowerCase: " + str23);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//.toLocaleUpperCase()
//
// 把英文小写字母转大写


var str24 = "hello";

str24 = str24.toLocaleUpperCase();

console.log(".toLocaleUpperCase: " + str24);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//.trim()
//
// 只能去除 字符串 "两端" 的所有空格


var str25 = "    I     love you       ";

str25 = str25.trim();

console.log(".trim: " + str25);


//-------------------------------------------------------------------------------------------------------------------//


//Example - 1
//
// 从字符串中截取，用于输入的字符串


var str26 = "I love becca the most. It's so beautiful";

//提示用户输入需要截取的字符串
var key = prompt("请输入需要截取的字符串");

//获取 需要截取字符串的启始索引位置
var index = str26.indexOf(key);

//截取字符串
str26 = str26.substr(index, key.length);

console.log(str26);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 2
//
// 检索字符串中所有的 o 出现的索引位置


var str27 = "hello wod odd ott fbo nhyo";

//设置开始检索的位置值
var index8 = 0;

//设置检索对象
var key3 = "o";

//如果值为 -1 则说明找完了
while ((index8 = str27.indexOf(key3, index8)) !== -1) {

    console.log(index8);

    //每次检索完，从下一位继续检索
    index8 += key.length;
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 3
//
// 检索这个字符串中每个字符出现了多少次


var str28 = "WhatOranigawhbdwaljdwaldwahdlwahajdiwoajiod";

//Step - 1
//
// 把所有字母转换转换为 统一的大写 或者 小写
//
str28 = str28.toLocaleLowerCase();


//Step - 2
//
// 创建一个空对象，
//
// 目的: 把字母作为 "键", 次数作为 "值"
//
var obj9 = {};

//Step - 3
//
// 遍历字符串，获取每个字符
//
for (var i = 0; i < str28.length; i++) {

    //
    var key9 = str28[i];

    //如果字符串中有 key
    if (obj9[key9]) {

        //有key， 则增加 key 出现的次数
        obj9[key9]++;

    } else {

        //没key，则添加 "新 key 的 键值对"
        obj9[key9] = 1;
    }
}

//遍历 json 数据
for (key9 in obj9) {

    console.log(key9 + " 出现了 " + obj9[key9] + " 次");

}


//-------------------------------------------------------------------------------------------------------------------//


//Array Methods


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//判断是不是数组的两种方法
//
// 1. instanceof
//
// 2. Array.isArray()


//构造函数方法创建数据
var arr11 = new Array();

//字面量方法创建对象
var arr12 = [];


//Method - 1
//
// instanceof

console.log(arr11 instanceof Array);            //true


//Method -2
//
// Array.isArray()

console.log(Array.isArray(arr12));              //true


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Array.from()
//
// 产生一个新数组


arr13 = ["a", "b", "c"];

Array.from(arr13);
//expected output: ["a", "b", "c"]

Array.from('foo');
//expected output: ["f", "o", "o"]


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//.concat()
//
//
// 用于合并两个或多个数组
//
// 此方法不会更改现有数据，而是返回一个新数组


var arr15 = [10, 20, 30];

var arr16 = [40, 50, 60];

console.log(arr15.concat(arr15));
//expected output: [10, 20, 30, 40, 50, 60]


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * .every(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
 *
 * @callback(回掉函数) 一个测试每个元素的函数，有三个参数
 * @index(可选的) 数组中正在处理的当前元素的索引
 * @array(可选的) 返回被调用的数组
 * @thisArg this 执行时使用的值 callback
 */


var arr18 = [1000, 2000, 300];

var arr19 = arr18.every(function (ele, idx, arr) {

    console.log(ele + " " + idx + " " + arr);
    /**
     * ele arr19[0] === 1000 => 1000
     * idx arr19[0] => 0
     * arr arr19 = [1000 , 2000, 3000] => 1000 , 2000, 3000
     */

    //如果数据中每个元素的值都大于 2000，则返回 true
    return ele > 2000;
    /**
     * 1000 ?> 2000 => 1000 !> 2000
     * 2000 ?> 2000 => 2000 !> 2000
     * 3000 ?> 2000 => 3000 >  2000
     *
     * false
     */

    /**
     * return ele > 500; => true
     */
});

console.log(arr19);             //false


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * filter(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
 *
 * @callbackfn 用来测试数据中没有个元素的函数
 * @thisArg(可选) 执行是 callback 时所用的 数组
 *
 * 把满足条件数据值返回，并创建新数组返回
 */


var arr20 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

var newArr20 = arr20.filter(function (ele, idx, arr) {

    return ele > 50;
    /**
     * 10 > 50 => no return
     * 20 > 50 => no return
     * 30 > 50 => no return
     * ...
     * 60 > 50 => return 60
     * 60 > 50 => return 70
     * 60 > 50 => return 80
     * 60 > 50 => return 90
     */
});

console.log(newArr20);              //[60, 70, 80, 90]


var arr21 = [10, 0, 20, 0, 40, 50, 60, 80];

var newArr21 = arr21.filter(function (ele) {

    return ele != 0;
});

console.log(newArr21);              //[10, 20, 40, 50, 60, 80]


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * push(...items: T[]): number;
 *
 * 增添一个值进数组
 *
 * 返回新数组的长度值
 */


var arr22 = [20, 30, 50, 32, 14];

var newArr22 = arr22.push(1000, 2000, 3000);

console.log(arr22);                //[20, 30, 50, 32, 14, 1000]

console.log(newArr22);             //newArr.length => 6


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * pop(): T | undefined;
 *
 * 删除数组中的最后一位，并返回最后一位的值
 */


var arr23 = [24, 25, 26, 26, 28, 29];

var newArr23 = arr23.pop();

console.log(newArr23);              //29


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * shift
 *
 * 删除数组中的第一位，并返回第一位的值
 */


var arr24 = [24, 25, 26, 26, 28, 29];

var newArr24 = arr24.shift();

console.log(newArr24);              //24


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * unshift
 *
 * 向数组的第一个元素前插入一个新元素
 *
 * 返回插入元素后的数组长度
 */

var arr25 = [24, 25, 26, 26, 28, 29];

var newArr25 = arr25.unshift();

console.log(newArr25);              //6


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
 *
 * 遍历数组
 */


var arr26 = [24, 25, 26, 26, 28, 29];

var newArr26 = arr26.forEach(function (ele, idx, arr) {

    console.log("forEach: " + ele + " - " + idx);
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * indexOf(searchElement: T, fromIndex?: number): number;
 *
 * 从左向右检索，返回对应字符值的索引
 *
 * 如果没有对应的字符，则返回 -1
 */

var arr27 = [24, 25, 26, 26, 28, 29];


var newArr271 = arr27.indexOf(28);              //4

var newArr272 = arr27.indexOf(300);             //-1

console.log(newArr271);
console.log(newArr272);


/**
 * lastIndexOf(searchElement: T, fromIndex?: number): number;
 *
 * 从右向左检索，返回对应字符值的索引
 *
 * 第二个参数: 从第几个索引值开始检索
 *
 * 如果没有对应的字符，则返回 -1
 *
 */

var arr28 = [24, 25, 28, 26, 26, 28, 29];


var newArr281 = arr28.lastIndexOf(28, 4);           //2

var newArr282 = arr28.lastIndexOf(300);             //-1

console.log(newArr281);
console.log(newArr282);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * join(separator?: string): string;
 *
 * @separator add string separator
 *
 * return: string
 */

var arr29 = ["我", "怎", "么", "那", "么", "好", "看"];


var newStr29 = arr29.join("|");

console.log(newStr29);              //我|怎|么|那|么|好|看


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
 *
 * 数组中的每个元素都要执行这个函数
 *
 * 把执行后的结果全部放在一个新的数组中
 */


var arr30 = [1, 4, 9];

var newArr30 = arr30.map(Math.sqrt);

console.log(newArr30);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * reverse(): T[];
 *
 * 反转数组
 */


var arr31 = [1, 2, 3, 4, 5, 6, 7];

var newArr31 = arr31.reverse();

console.log(newArr31);              //[7, 6, 5, 4, 3, 2, 1]


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * sort(compareFn?: (a: T, b: T) => number): this;
 *
 * 数组排序( 单独使用 sort 不稳定 )
 *
 * 需要传入函数后，稳定使用
 */


var arr32 = [2, 20, 14, 100, 34, 12];

var newArr32 = arr32.sort(function (a, b) {

    if (a > b) {

        return 1;
    } else if (a == b) {

        return 0;
    } else {

        return -1;
    }
});

console.log(newArr32);              //[2, 12, 14, 20, 34, 100]


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

/**
 * slice(start?: number, end?: number): T[];
 *
 * 筛选出 第一个参数( 开始索引位置 ) 到 第二个参数( 结束索引位置: 不包括最后一位 )
 *
 * 返回: 创建一个新数组，存储他们
 */

var arr33 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var newArr33 = arr33.slice(3, 6);

console.log(newArr33);              //[40, 50, 60]


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * splice(start: number, deleteCount: number, ...items: T[]): T[];
 *
 * @start 从第几位开始检索
 * @deleteCount 从检索后的第几位开始更改
 * @item, item2 ... 增加的 新 数组
 */

var myFish1 = ["angel", "clown", "mandarin", "sturgeon"];
var myFish2 = ["angel", "clown", "mandarin", "sturgeon"];

myFish1.splice(2, 0);                //["angel", "clown", "mandarin", "sturgeon"]
//从第二位索引开始检索，删除索引为 0 的值

myFish2.splice(2, 1);                //["angel", "clown", "sturgeon"]
//从第二位索引开始检索，删除索引为 1 的值

console.log(myFish1);
console.log(myFish2);


var myFish3 = ["angel", "clown", "mandarin", "sturgeon"];
var myFish4 = ["angel", "clown", "mandarin", "sturgeon"];

myFish3.splice(2, 0, "alpha", "beta");
//从第二位索引开始检索，从 index[0] 开始增加数组

myFish4.splice(2, 1, "alpha", "beta");
//从第二位索引开始检索，从 index[1] 开始增加数组( 此时回替换 index[1] 的值)

console.log(myFish3);
console.log(myFish4);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 基本包装类型
 * 基本类型: number、string、boolean
 *
 * 普通变量 => 不能直接调用 "属性" 或 "方法"
 *
 * 对象 => 可以直接调用 "属性" 和 "方法"
 *
 */

var str30 = "hello";            //普通变量 基本类型

str30 = str30.replace('ll', 'hh');
/**
 * 本身 str30 是普通变量( 基本类型 )
 * 但是在执行代码的过程中，如果这种类型的变量调用了 属性 或 方法
 * 那么这种类型就不再是基本类型了，而是 "基本包装类型"
 * 这个变量也不是普通的变量了
 * 而是 "基本包装类型对象"
 */


console.log(str30);

/**
 * 内部转换原理:
 *
 * var str30 = new String('hello);
 * str = str.replace('ll'. 'hh');
 * console.log(str30);
 * str = null;
 *
 * 只在运行的瞬间转换和使用，运行之后就释放回原来的类型
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var flag = new Boolean(false);

var result30 = flag && true;            //object && true ==> true

// var result30 = true && flag;         //object && true ==> object

console.log(result30);                  //true


/**
 * 只有 new 了才转换 基本包装类型
 *
 * 基本包装类型只在 number、string、boolean 中转换
 */

var num31 = 10;                         //基本数字类型

var num32 = Number("10");         //转换，没有 new 类型转

var num33 = new Number("10");    //基本包装类型


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Example - 1
//
// 将一个字符串组输出为 "|" 分割的形式，比如 "张飞|刘备|关羽" 使用两种方式实现


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 2
//
// 将一个字符串数组的元素的顺序进行反转
// ["a", "b", "c", "d"] ==> ["d", "c", "b", "a"]
// 使用两种方式实现，提示: 第一个 i 和 第 "leanth - 1 - i" 个进行交换


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

//Example - 3
//
// 工资数组 [1500, 1200, 2000, 2100, 1800]，把工资超过 2000 的删除


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 4
//
// ["c", "a", "z", "a", "x", "a"] 找到数组中每一个 "a" 出现的位置


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 5
//
// 通过实例对象调用的方法模拟 sort 排序

var arr99 = [1, 10, 24, 100, 23];

function MyArray(arr) {

    this.mySort = function (arr) {

        for (var i = 0; i < arr.length - 1; i++) {

            for (var j = 0; j < arr.length - 1 - i; j++) {

                if (arr[j] > arr[j + 1]) {

                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                }
            }
        }
    }
}

var myArr = new MyArray();

console.log(myArr.mySort(arr99));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 如何清空数组
 *
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 如何把获取的毫秒数改变成日期时间
 *
 *
 */


var dt22 = new Date;

console.log(dt.valueOf());

var dt23 = new Date(dt.valueOf());              //毫秒数转 Date() 对象

console.log(dt23);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//




















