///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Create new function

// function newFunctionName([param,[param,[...param]]]) {
//
//     [ statements ] // The function returns the product of p1 and p2
//
// }

//transfer function
// myFunction(realParam, realParam, realParam);

//newFunctionName
//函数名
//普通函数: 遵循小驼峰命名
//自定义构造函数: 遵循大驼峰命名( 首字母必须大写 )

//param1、param2、param3 ... paramN
//要传递给函数的参数的名称
//参数的最大数量在不同的引擎中是不同的

//statements
//组成函数主体的语句


//-------------------------------------------------------------------------------------------------------------------//


// 计算两个数的和


//无参数，不能更换值

function doubleSum1() {

    var num1 = 20;
    var num2 = 10;

    return num1 + num2;
}

console.log(doubleSum1());


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 有参数，通式
function doubleSum2(num1, num2) {

    return num1 + num2;
}

console.log(doubleSum2(20, 10));
//expected output: 30


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 输入两个值参数值
function doubleSum3(num3, num4) {

    return num3 + num4;
}

var num3 = parseInt(prompt('请输入第一个数字'));
var num4 = parseInt(prompt('请输入第二个数字'));

console.log(doubleSum3(num3, num4));


//-------------------------------------------------------------------------------------------------------------------//


//计算 1 ～ 100 之间数的和
function oneHundredSum() {

    var sum = 0;

    for (var i = 0; i <= 100; i++) {

        sum += i;
    }
    return sum;
}

console.log(oneHundredSum());


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//计算 1 ～ lastNum 之间数的和
function oneLastNumSum(lastNum) {

    var sum = 0;

    for (var i = 0; i <= lastNum; i++) {

        sum += i;
    }
    return sum;
}

console.log(oneLastNumSum(100));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//计算 firstNum ~ lastNum 之间数的和

function firstNumLastNumSum(fNum, lNum) {

    var sum = 0;

    for (var i = fNum; i <= lNum; i++) {

        sum += i;
    }
    return sum;
}

console.log(firstNumLastNumSum(1, 100));


//-------------------------------------------------------------------------------------------------------------------//


//计算圆的面积

//Math.PI

function circleArea(rad) {

    return Math.PI * rad * rad;
}

console.log(circleArea(2));


//-------------------------------------------------------------------------------------------------------------------//


//判断一个数是否是素数( 质数 )

//只能被 1 和 自身整出的数字


function isPrimeNum(num) {

    for (var i = 2; i < num; i++) {

        if (num % i === 0) {
            return 'not prime number';
        }
    }
    return 'prime number'
}

console.log('Number is ' + isPrimeNum(10));


//-------------------------------------------------------------------------------------------------------------------//


//计算两个数中的最大值

function doubleMax(x, y) {

    return x > y ? x : y;
}

console.log(doubleMax(10, 20));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//计算三个数中的最大值


function threeMax(x, y, z) {

    return x > y ? (x > z ? x : z) : (y > z ? y : z);
}

console.log(threeMax(10, 20, 30));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//计算两个数的差

function doublePoor(x, y) {

    return x > y ? x - y : y - x;
}

console.log(doublePoor(10, 20));


//-------------------------------------------------------------------------------------------------------------------//


//计算一组数中的最大值

function arrMax(arr) {

    var max = arr[0];

    for (var i = 0; i < arr.length; i++) {

        if (max < arr[i]) {

            max = arr[i];
        }
    }
    return max;
}

console.log(arrMax([10, 20, 30, 40, 50, 60]));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//计算一组数中的最小值

function arrMin(arr) {

    var min = arr[0];

    for (var i = 0; i < arr.length; i++) {

        if (min > arr[i]) {

            min = arr[i];
        }
    }
    return min;
}

console.log(arrMin([10, 20, 30, 40, 50, 60]));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//计算一组数的和

function arrSum(arr) {

    var sum = 0;

    for (var i = 0; i < arr.length; i++) {

        sum += arr[i];
    }
    return sum;
}

console.log(arrSum([10, 20, 30, 40, 50, 60]));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//计算数组 最大值、最小值、和


function arrCalculatet(arr) {

    var max = arr[0];
    var min = arr[0];
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {

        if (max < arr[i]) {
            max = arr[i];
        }// if end

        if (min > arr[i]) {
            min = arr[i]
        }// if end

        sum += arr[i];
    }

    var newArr = [max, min, sum];
    return newArr;
}

console.log(arrCalculatet([10, 20, 30, 40, 50, 60]));


//-------------------------------------------------------------------------------------------------------------------//


//数组反转

function reverseArr(arr) {

    for (var i = 0; i < arr.length / 2; i++) {

        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(reverseArr([1, 2, 3, 4, 5]));


//-------------------------------------------------------------------------------------------------------------------//


//冒泡排序


function arrArrage(arr) {

    for (var i = 0; i < arr.length - 1; i++) {

        for (var j = 0; j < arr.length - 1 - i; j++)

            if (arr[j] > arr[j + 1]) {

                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
    }
    return arr;
}

console.log(arrArrage([1, 20, 50, 23, 14, 100]));


//-------------------------------------------------------------------------------------------------------------------//


//计算阶乘

//eg: 5 的阶乘 5 * 4 * 3 * 2 * 1

function getFactorial(num) {

    var factorial = 1;

    for (var i = 1; i <= num; i++) {

        factorial *= i;
    }
    return factorial;
}

console.log(getFactorial(3));


//-------------------------------------------------------------------------------------------------------------------//


//斐波那契数列

function getFib(num) {

    var num1 = 1;
    var num2 = 1;
    var sum = 0;

    for (var i = 3; i <= num; i++) {

        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return sum;
}

console.log(getFib(12));


//-------------------------------------------------------------------------------------------------------------------//


//输入年月日 计算总天数

function getDays(year, month, day) {


    var days = day;

    //如果是一月，则直接输出天数
    if (month === 1) {

        return days;
    }


    //如果不是一月，则用天数加每月的天
    var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    for (var i = 0; i < month - 1; i++) {

        days += months[i];
    }


    //判断是否是闰年，如果是，则增加一天
    function isLeapYear(year) {

        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }

    if (isLeapYear(isLeapYear(year) && month > 2)) {

        days++;
    }
    return days;
}

console.log(getDays(2014, 2, 3));


//-------------------------------------------------------------------------------------------------------------------//


//计算阶乘的和

function getFactorialSum(num) {

    var factorialSum = 0;

    for (var i = 1; i <= num; i++) {

        factorialSum += getFactorial(i);
    }
    return factorialSum;
}

console.log(getFactorialSum(3));


//-------------------------------------------------------------------------------------------------------------------//


//计算形参的和

function getArgumentsSum() {

    var sum = 0;

    for (var i = 0; i < arguments.length - 1; i++) {

        sum += arguments[i];
    }
    return sum;
}

console.log(getArgumentsSum(1, 2, 3, 4, 5, 6, 7, 8, 9));


//-------------------------------------------------------------------------------------------------------------------//










































