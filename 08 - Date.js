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


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//
//
//
























