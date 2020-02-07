///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.01_01.1: if syntax

// if (condition) {
//     // block of code to be executed if the condition is true
// }


//Example

if (9 > 6) {
    console.log("Hello World");                  //Hello Word
}

if (6 > 9) {
    console.log("Hello World");                 //no output, because condition is false
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NO.01_01.2: if ... else ... syntax

// if (condition) {
//     // block of code to be executed if the condition is true
// } else {
//     // block of code to be executed if the condition is false
// }


//Example

if (6 > 9) {                                  //The condition is false
    console.log("Hello World");               //Output nothing, because condition is false
} else {
    console.log("See you again");             //Output See you again, because condition is false
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NO.01_01.3: if ... if else ... syntax

// if (condition1) {
//     // block of code to be executed if the condition is true
// } else if (condition2) {
//     // block of code to be executed if the condition1 is false and condition2 is true
// }


//Example


if (6 > 9) {                                  //The condition1 is false
    console.log("Hello World");               //Output nothing, because condition is false

} else if (9 > 6) {                           //The condition is true
    console.log("See you again");             //Output: See you again, because condition2 is true
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NO.01_01.4: if ... if else ... else ... syntax


// if (condition1) {
//     // block of code to be executed if the condition is true
// } else if (condition2) {
//     //block of code to be executed if the condition1 is false and condition2 is true
// } else if (condition3) {
//     //block of code to be executed if the condition1 is false and condition3 is true
// } else {
//     //block of code to be executed if the all other condition is false
// }


//Example

if (6 > 9) {                                   //condition is false，judge next condition
    console.log("Hello World");
} else if (7 > 9) {                           //condition is false，judge next condition
    console.log("See you again");
} else if (8 > 9) {                           //condition is false，judge next condition
    console.log("See you again");
} else {
    console.log("Goodbye")                    //Output: Goodbye, because all other condition is false
}


//-------------------------------------------------------------------------------------------------------------------//


//NO.01_02: 三元表达式
//使用条件: 两个分支最终结果是两个分支中的一个

// if 同类语句

// if (condition) {
//     console.log('Hello world');                 // expression1
// } else {
//     console.log('See you again');               // expression2
// }
//

// 三元 语句

// var demo = condition ? expression1 : expression2;

// 如果 condition 为 true，则执行 expression1，然后将 expression1 赋给变量 demo
// 如果 condition 为 false，则执行 expression2，然后将 expression2 赋给变量 demo


//此时两个语句作用一样


//-------------------------------------------------------------------------------------------------------------------//


//NO.01_03: 短路语句
//多用于接收后端数据时，对数据类型等，先进行初步判断

// if 同类语句

if (1 > 2) {
    console.log('Hello world');
}


// 短路语句

var a = 1 > 2 && console.log('Hello world');


//此时两个语句作用一样


//-------------------------------------------------------------------------------------------------------------------//


//NO.01_Epl_01: 判断两个数字中最大的并输出


var bigNum1 = 10;
var bigNum2 = 20;


// if 语句

if (bigNum1 > bigNum2) {
    console.log(bigNum1);
} else {
    console.log(bigNum2);
}


// 三元表达式

// var bigNum = bigNum1 > bigNum2 ? bigNum1 : bigNum2;


//此时两个语句作用一样


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NO.01_Epl_02: 判断输入的数字是奇数还是偶数

var oddEvenNum = parseInt(prompt('Please input a number'));

if (oddEvenNum % 2 == 0) {
    console.log('Is a even number')
} else {
    console.log("Is a odd number");
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.02.1: switch ... case syntax


// switch (variable_expression) {

//     case constant_expr1_value:
//         //statements
//         break;
//     case constant_expr2_value:
//         //statements
//         break;
//     case constant_exprN_value:
//         //statements
//         break;
//     default:
//         console.log('other');
// }


//-------------------------------------------------------------------------------------------------------------------//


//NO.02_Epl_01: 获取日行星期几

switch (new Date().getDate()) {

    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
    default:
        console.log('Input is wrong');
}


//-------------------------------------------------------------------------------------------------------------------//


//NO.02_Epl_02: 等级选择

var grade = 'A';

switch (grade) {
    case 'A':
        console.log('90 ~ 100');
        break;
    case 'B':
        console.log('80 ~ 90');
        break;
    case 'C':
        console.log('70 ~ 80');
        break;
    case 'D':
        console.log('60 ~ 70');
        break;
    default:
        console.log('Please re-enter');
        break;
}


//-------------------------------------------------------------------------------------------------------------------//


//NO.02_Epl_03: 判断 平年 或 闰年
//能被 4 整除， 但不能被 100 整除，或能被 400 整除 的年份就是闰年


var leapYear = 2016;

if (leapYear % 4 == 0 && leapYear % 100 != 0 || leapYear % 400 == 0) {
    console.log('闰年');
} else {
    console.log('平年');
}


//三元语句

var aLeapYear = leapYear % 4 == 0 && leapYear % 100 != 0 || leapYear % 400 == 0 ? console.log('闰年') : console.log('平年');


//-------------------------------------------------------------------------------------------------------------------//


//NO.02_Epl_04: 根据月份显示天数

//1、3、5、7、8、10、12 ==> 31天

//4、6、9、11 ==> 30 天

//2 ==> 28天

//利用 break 特性简写代码
//最后一个语句可以省略 break

var daysOfTheMonth = 8;


switch (daysOfTheMonth) {

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('31天');
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('30天');
        break;
    case 2:
        console.log('28天');
        break;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// while loop syntax

var counter = 1;                    //计数器 启始值

while (counter < 10) {              //循环终止条件

    counter += counter;             //循环语句
    counter++;                      //循环必要条件: 计数器 +1，如果不加则会一直循环( 死循环 )
}

console.log(counter);


//-------------------------------------------------------------------------------------------------------------------//


// 计算 1 ～ 100 之间所有数字的和

var numCounterSum = 1;

var numSum = 0;

while (numCounterSum < 100) {

    numSum += numCounterSum;
    numCounterSum++;
}

console.log(numSum);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 计算 6 的阶乘
// 从 1 递增相乘，乘到等于自身停止


var factorialCounter = 1;

var factorialSum = 1;                           //因为是阶乘，不能等于 0 ，否则结果无意义(永远等于 0)

while (factorialCounter < 7) {

    factorialSum *= factorialCounter;
    factorialCounter++;
}

console.log(factorialSum);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 计算 1 ～ 100 中所有偶数的和

var eventCounter = 1;

var eventSum = 0;

while (eventCounter <= 100) {

    if (eventCounter % 2 == 0) {
        eventSum += eventCounter;
    }
    eventCounter++;
}

console.log(eventSum);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 计算 1 ～ 100 中所有奇数的和

var oddCounter = 1;

var oddSum = 0;

while (oddCounter <= 100) {

    if (oddCounter % 2 != 0) {
        oddSum += oddCounter;
    }
    oddCounter++;
}

console.log(oddCounter);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 逢 7 过

// 求 1 ～ 100 中 "数字位带 7" 和 "7 的倍数"

var sevenGoCounter = 1;

var sevenGo = [];

while (sevenGoCounter < 100) {

    if (sevenGoCounter % 10 == 7 || sevenGoCounter % 7 == 0) {
        sevenGo += sevenGoCounter + ' ';
    }
    sevenGoCounter++;
}

console.log(sevenGo);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 求账号和密码是否一致，登陆效果实现
//
// 提示用户输入账号
// 提示用户输入密码
//
// 如果账号和密码不对，则一直提示用户输入账号和密码
//
// 账号: admin
// 密码: 123 ( string )


var userName = prompt('Please enter the user name( admin )');
var userPwd = prompt('Please enter the password( 123 )');


while (userName !== "admin" || userPwd !== "123") {

    userName = prompt('Please return you user name');
    userPwd = prompt('Please return you password');
}

console.log('Login in successfully');


//-------------------------------------------------------------------------------------------------------------------//


//do ... while ... syntax

// do {
//     //statements
// } while ( condition );               // " ; " 必须条件


//statement
//至少执行一次的语句，并在每次 condition 值为真时重新执行

//condition
//循环中每次都会计算的表达式。如果 condition 值为真，statement 会再次执行
//当 condition 值为假，则跳转到 do ... while 之后的语句


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//打印数字 1 ～ 5

var numResult = "";
var numCol5 = 0;

do {
    numCol5 += 1;
    numResult += numCol5 + " ";
} while (numCol5 < 5);

console.log(numResult);
// expected result: "12345"


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 提示用户输入 y / n
//
// 如果输入 n 就一直提示
// 如果输入 y 就输出 Hello world


do {
    var yesResult = prompt('Please enter y / n( n )');
} while (yesResult !== 'y');

console.log('Hello world');


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//计算 1 ～ 100 中所有 3 的倍数的和

var threeSumCounter = 1;
var threeSum = 0;


// while (threeSumCounter <= 100) {
//
//     if (threeSumCounter % 3 === 0) {
//
//         threeSum += threeSumCounter;
//     }
//     threeSumCounter++;
// }


do {
    if (threeSumCounter % 3 === 0) {

        threeSum += threeSumCounter;
    }
    threeSumCounter++;
} while (threeSumCounter <= 100);

console.log(threeSum);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// for ... syntax

// 循环机制
//
// ( 使用有意义的声明变量 )
// ( 注意循环的执行循环 )
//
// 1. 循环次数变量 ===> initialization
// 2. 循环终止条件 ===> condition
// 3. 循环语句 ===> statements
// 4. 循环条件( 递增 或 递减 ) ===> final-expression
//


// for (initialization; condition; final-expression) {
//     //statements
// }

//initialization: 初始化一个计数器，可以用 var 或 let 关键字声明新变量
//                使用 var 声明的变量不是该循环的局部变量，而是与 for 循环处于在同样的作用域中

//condition: 该表达式的结果 ( true / false ) 条件被用于判断循环是否继续执行
//           如果为 true 继续执行，为 false 则跳出循环体
//           该表达式是可选的，如果被忽略，那么永远认为 condition 的结果为 true


//final-expression: 每次循环的最后执行的表达式
//                  执行于下一次 condition 条件计算之前
//                  通常被用于更新或递增计数器变量


//-------------------------------------------------------------------------------------------------------------------//


// 计算 1 ～ 100 中所有奇数的和

var forEvenSum = 0;

for (var i = 0; i <= 100; i++) {

    if (i % 2 !== 0) {
        forEvenSum += i;
    }
}

console.log(forEvenSum);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 计算 1 ～ 100 中所有奇数的和

var forOddSum = 0;

for (var i = 0; i <= 100; i++) {

    if (i % 2 !== 0) {
        forOddSum += i;
    }
}

console.log(forOddSum);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 计算 1 ～ 100 中所有能被 3 整除数的和


var forThreeSum = 0;

for (var i = 0; i <= 100; i++) {

    if (i % 3 === 0) {
        forThreeSum += i;
    }
}

console.log(forThreeSum);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 逢 3 过

// 求 1 ～ 100 中 "数字位带 3" 和 "3 的倍数"

var threeGo = [];

for (var i = 1; i <= 100; i++) {

    if (i % 10 === 3 || i % 3 === 0) {
        threeGo += i + " ";
    }
}

console.log(threeGo);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 9 * 9 乘法口诀表

//列出 9 * 9 乘法口诀表

for (var i = 1; i <= 9; i++) {

    for (var j = 1; j <= 9; j++) {
        console.log(i + '*' + j + '=' + j * i);
    }
}


// 每行长度随 i 增大而加长

for (var i = 1; i <= 9; i++) {

    for (var j = 1; j <= i; j++) {
        console.log(i + '*' + j + '=' + j * i);
    }
}


//打印出 html 表格央视的 9 * 9 乘法口诀表

document.write("<table border = '1' cellpadding ='10' cellspacing = '0'>");

for (var i = 1; i <= 9; i++) {

    document.write("<tr>");

    for (var j = 1; j <= 9; j++) {

        document.write("<td>");

        document.write(i + '*' + j + '=' + i * j);

        document.write("</td>");
    }
    document.write("</tr>");
}

document.write("</table>");


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 本金 10000 元存入银行，年利率千分支三，每过一年，将被禁和利息作为新的本金
//
// 计算五年后本金是多少

var principal = 10000;
var rate = 0.003;

for (var i = 1; i < 6; i++) {

    principal += principal * rate;
}

console.log(principal);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 斐波那契数列: 1、1、2、3、5、8、13、21、34 ...
//
// 已知有 2 只兔子，并且 2 只兔子每月可以繁殖 2 只兔子
//
// 新生的兔字 第三个月起，每月繁殖 2 只兔子
//
// 求假如以一年没有发生死亡，那么一对兔子一年能繁殖多少对兔子 ？
//


var num1 = 1;                   //第一位
var num2 = 1;                   //第二位

var sum = 0;                    //第三位

for (var i = 3; i <= 12; i++) {

    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
}

console.log(sum);
//expected output: 144


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// break

for (var i = 0; i < 10; i++) {

    while (true) {

        console.log('go out');
        break;                                      //立即终止循环( 与 return 不同，仅能作为终止循环 )

        console.log('I was still in');              //failed
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 求整数 1 ～ 100 的累加值，要求碰到个位为 3 的数则终止累加

var addThreeSum = 0;

for (var i = 1; i < 101; i++) {

    addThreeSum += i;
    if (i % 10 === 3 && i > 10) {
        console.log(i);                     //expected output: 13
        break;
    }
}

console.log(addThreeSum);
//expected output: 91


//-------------------------------------------------------------------------------------------------------------------//


// continue

var continueArr = [];

for (var i = 0; i < 10; i++) {

    if (i % 3 === 0) {
        continue;                                   //跳出满足当前条件的循环( true )，继续下一圈循环
    }
    continueArr += i + " ";
}

console.log(continueArr);
//expected output: 1 2 4 5 7 8


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 计算整数 1 ～ 100 的累加值， 要求跳过所有个位数为 3 的数

var continueSum = 0;

for (var i = 1; i < 101; i++) {

    if (i % 10 === 3) {
        continue;
    }
    continueSum += i;
}

console.log(continueSum);
//expected output: 4570


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 找到 100 ～ 200 之间第一个可以被 7 整除的数字

for (var i = 100; i <= 201; i++) {

    if (i % 7 === 0) {
        console.log(i);                             //expected output: 105
        break;
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//计算 100 ～ 300 之间所有的奇数的和 ( 用 continue )

var allEventSum = 0;

for (var i = 100; i < 301; i++) {

    if (i % 2 === 0) {
        continue;
    }
    allEventSum += i;

}

console.log(allEventSum);


//-------------------------------------------------------------------------------------------------------------------//


// return

function returnValue() {

    let arrSum = 0;

    for (let i = 1; i < 10; i++) {
        arrSum += i;
        return arrSum;                          //跳出所有直接返回值
    }
    return arrSum;                              //failed
    //expected output: 45                       //没有执行，不输出
}

console.log(returnValue());
//expected output: 1


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









