///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.01: 预解析流程分析

//NO.01.1: 变量预解析

//NO.01.2: 函数预解析

//NO.01.3: 变量 & 函数 & 声明 预解析


//NO.02: 作用域链

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


//NO.01.1: 全局变量预解析


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//error example
//
// console.log(num2)                       //Error: num2 is nor defined


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 1
//
// 全局变量预解析( 变量未赋值 )

//step - 1
//
// console.log(num1);
//
// var num1;                              //全局变量预解析( 变量未赋值 )


//step - 2
//
// 隐士转换: 全局变量预解析: 仅提升 "全局变量声明" 至 "当前作用域最顶端( 零级作用域 )"
//
// var num1;                              //全局变量声明提升
//
//console.log(num1);                      //undefined


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 2
//
// 全局变量预解析( 变量已赋值 )

//step - 1
//
// console.log(num2);
//
// var num2 = 10;                          //全局变量预解析


//step - 2
//
// 隐是转换: 1. 全局变量预解析: 仅提升 "全局变量声明" 至 "当前作用域最顶端( 零级作用域 )"
//          2. 全局变量预解析: 仅提升 " 声明变量 "，并不提升 " 变量赋值 "
//
// var num2;                              //声明变量变量，未赋值
// console.log(num2);                     //undefined
// num2 = 10


//-------------------------------------------------------------------------------------------------------------------//


//NO.01.2: 函数预解析


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 1
//
// 单个函数预解析

//step - 1
//
myFunction1();                           //函数预解析
function myFunction1() {
    console.log("Hello World");
}


//step - 2
//
// 隐式转换: 局部变量预解析: "函数体" 提升至 "调用函数" 之前
//
function myFunction2() {
    console.log("Hello World");
}

myFunction2();                           //Hello World


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 2
//
// 多个函数同时预解析( 从上至下 顺序执行解析 )

//step - 1
//
function myFunctionBefore() {
    console.log("Hello World");
}

myFunctionBefore();
myFunctionAfter();                          //函数预解析

function myFunctionAfter() {
    console.log("See you again");
}


//step - 2
//
// 隐式转换: 1. 函数预解析: "函数体" 提升至 "调用函数" 之前
//          2. 多个函数预解析: 顺序执行函数调用( 从上至下 )
//
function myFunctionBefore2() {
    console.log("Hello World");
}

myFunctionBefore2();                          //Hello World

function myFunctionAfter2() {
    console.log("See you again");
}

myFunctionAfter2();                           //See you again


//-------------------------------------------------------------------------------------------------------------------//


// 变量 & 函数  预解析


//Example - 1
//
// 函数预解析 & 局部变量预解析

//step - 1
//
// myFunction3();                           //函数预解析
//
// function myFunction3() {
//
//     console.log(num);
//     var num = 10;                        //局部变量预解析
// }


//step - 2
//
// 隐式转换: 1. 函数预解析: "函数体" 提升至 "调用函数" 之前
//          2. 局部变量预解析: 仅提升 "局部变量声明" 至 "当前作用域顶端( 函数内部作用域 )"
//
// function myFunction4() {
//
//     var num;                             //局部变量声明提前，变量赋值不提前
//
//     console.log(num);                    //undefined
//     num = 10;
// }
// myFunction3();                           //undefined


//error example
//
// myFunction5();
// function myFunction5() {
//     console.log(num);                  //Error: num is  nor defined
// }


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 2
//
// 全局变量预解析 & 函数预解析 & 局部变量预解析
//
// "变量声明提升" 会在 "函数体提升" 之上
//
// "局部声明提升" 仅在 "局部作用域" 之内提升

//step - 1
//
// myFunction5();                          //函数预解析
//
// console.log(num);
//
// var num = 20;                           //全局变量预解析
//
// function myFunction5() {
//
//     console.log(num);
//     var num = 10;                       //变量预解析( 局部变量 )
// }


//step - 2
//
// 隐式转换: 1. 全局变量预解析: 仅提升 "全局变量声明" 至 "当前作用域最顶端( 零级作用域 )"
//          2. 函数预解析: "被调用函数体" 提升至 "调用函数之前"
//          3. 函数局部变量预解析: 仅提升 "局部变量声明" 至 "当前作用域最顶端( 函数内部作用域 )"

// var num;                                //全局变量声明提升( "全局变量声明" 提升至 "当前作用域的最顶端( 零级作用域 )" )
//
// console.log(num);                       //undefined
//
// function myFunction5() {
//
//     var num;                            //局部变量声明提前( 仅提升 "变量声明" 到当前作用域的最顶端 )
//
//     console.log(num);                   //undefined
//     num = 10;                           //局部变量赋值位置不变
// }
//
// myFunction5();                          //undefined
//
// num = 20;                               //全局变量赋值位置不变


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 3
//
//// 局部变量不会作用域 全局调用

//step - 1
//
// function myFunction8() {
//
//     console.log(num);
//     var num = 10;                        //局部变量预解析
// }
//
// myFunction8();
//
// console.log(num);                        //无法调用局部变量


//step - 2
//
// function myFunction8() {
//
//     var num;                             //局部变量声明提前，变量赋值不提前
//     console.log(num);                    //undefined
//     num = 10;
// }
//
// myFunction8();                           //undefined
//
// console.log(num);                        //无法调用局部变量


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.02: 作用域链

//                                          //第一个零级作用域
//
//
//                                          //如果在所有作用域中均没有找到 num，则返回 "undefined"
//
//
// <script>                                 //全局作用域( 零级作用域 ): 两个零级作用域中的 "重名变量" 互不影响
//
//
// var num = 999;                           //如果在函数作用域中，都没有找到 num ，则执行 零级作用域中的 num
//
//
// function Fn() {                          //局部作用域
//
//     function F(n - 1)() {
//                                                      //(n - 1)级别作用域
//     var num = 100                                    //如果在当前作用域中没有找到 num, 则去上一级作用域中继续寻找
//
//         function F(n - 2)() {
//                                                      //(n - 2)级别作用域
//         var num = 90;                                //如果在当前作用域中没有找到 num, 则去上一级作用域中继续寻找
//
//             function F(n - 3)() {
//                                                      //(n - 3)级别作用域
//             var num = 80;                            //如果在当前作用域中没有找到 num, 则去上一级作用域中继续寻找
//
//                 function F(n - x)() {
//                                                      //(n - x)级别作用域
//                 var num = 50;                        //如果在当前作用域中没有找到 num, 则去上一级作用域中继续寻找
//
//                     function F3() {
//                                                      //三级作用域
//                     var num = 30;                    //如果在当前作用域中没有找到 num, 则去上一级作用域中继续寻找
//
//                         function F2() {
//                                                      //二级作用域
//                         var num = 20;                //如果在当前作用域中没有找到 num, 则去上一级作用域中继续寻找
//
//                             function F1() {
//                                                      //一级作用域
//                                var num = 10;         //如果在当前作用域中没有找到 num, 则去上一级作用域中继续寻找
//                                console.log(num);
//
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
//
//
// </script>                               //第一个零级作用域


//                                          //零级作用域 "互不影响"
//
// <script>                                //另一个零级作用域
//
// function F(n - 1)() {                    //局部作用域
//
//          ...
//
//          ... ...
//
//          ...
//
// }
//
// </script>                               //另一个零级作用域


//-------------------------------------------------------------------------------------------------------------------//


//单独的 <script> </script> 作用域之间 重名变量 提升不会互相影响


//Example - 1
//
// myFirstFunction(); 在第一对 <script> </script> 作用域中


// <script>                                    //第一个零级作用域
//
// myFirstFunction();                          //Hello World
//
// function myFirstFunction() {
//     console.log("Hello World");
// }
//
// </script>                                   //第一个零级作用域


// <script>                                    //第二个零级作用域
//
// function mySecondFunction() {
//     console.log("See you again");
// }
//
// </script>                                   //第二个零级作用域


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 2
//
// mySecondFunction(); 在第二对 <script> </script> 作用域中


// <script>                                    //第一个零级作用域
//
// function myFirstFunction() {
//     console.log("Hello World");
// }
//
// </script>                                   //第一个零级作用域


// <script>                                    //第二个零级作用域
//
// mySecondFunction();                         //See you again
//
// function myFunction5() {
//     console.log("See you again");
// }
//
// </script>                                   //第二个零级作用域


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 3
//
// 零级作用域之间互不影响
//
// mySecondFunction(); 在第二对 <script> </script> 作用域中
// 无法调用 第一对 <script> </script> 中的 myFirstFunction();


// <script>                                    //第一个零级作用域
//
// function myFirstFunction() {
//     console.log("Hello World");
// }
//
// </script>                                   //第一个零级作用域


// <script>                                    //第二个零级作用域
//
// myFirstFunction();                          //undefined: 无法调用其他零级作用域中任何值
//
// function myFunction5() {
//     console.log("See you again");
// }
//
// </script>                                   //第二个零级作用域


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 4
//
//变声声明提升 在 函数声明之上

//step - 1
//
// console.log(num);                        //函数预解析
//
// function num() {
//     console.log("Hello World")
// }
//
// var num = 1;                             //变量预解析
// console.log(num);


//step - 2
//
// var num;                                 //"全局变量声明" 提升至 "当前作用域的顶端( 并且在 "函数提升" 之上 )"
//
// function num() {
//     console.log("Hello World");
// }
// console.log(num);                        //num() { console.log("Hello World"); }
//
// num = 1;
// console.log(num);                        //1


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 4
//
// 变量声明 和 函数声明 重名，都会会覆盖


//step - 1
//
// var num = 20;                            //变量预解析
// myFunction10();                          //函数预解析
//
// function myFunction10() {
//
//     var b = 9;
//     console.log(a);
//     console.log(b);
//     var a = "123";                       //局部变量预解析
// }


//step - 2
//
// var num = 20;
//
// function myFunction10() {
//
//     var a;                               //局部变量声明提升
//
//     var b = 9;
//     console.log(a);                      //undefined
//     console.log(b);                      //9
//     a = "123";
// }
//
// myFunction10();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Example - 1
//
// 未声明 已赋值 的 "局部变量", 视为 "全局变量"


//step - 1
//
// myFunction();
//
// console.log(c);
// console.log(b);
// console.log(a);
//
// function myFunction() {
//
//     var a = b = c = 9;
//
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//
// console.log(parseInt(Math.random() * 57 + 1));


//step -2
//
// function myFunction() {
//
//     var a;                          //因为 a 声明在函数中声明了，所以视为 "局部变量"
//
//     a = 9;
//     b = 9;                          //b 没有在函数中声明，所以视为 "全局变量"
//     c = 9;                          //c 没有在函数中声明，所以视为 "全局变量"
//
//     console.log(a);                 //9
//     console.log(b);                 //9
//     console.log(c);                 //9
// }
//
// myFunction();
//
// console.log(c);                     //9
// console.log(b);                     //9
// console.log(a);                     //Error: a is nor defined( 无法调用局部变量 )
//
// console.log(parseInt(Math.random() * 57 + 1));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 2
//
// 声明变量形式创建函数( 导致函数体为定义 )
//
// 函数体报错，后续代码不执行


//step - 1
//
// myFunction11();                          //函数预解析
//
// var myFunction11 = function () {         //全局变量预解析
//
//     console.log(a);
//     var a = 10;                          //局部变量预解析
// };


//step - 2
//
// var myFunction11;                        //全局变量声明提升
//
// myFunction11 = function () {             //Error: myFunction11 is not a function
//                                          //函数体报错，后续代码不执行
//
//     var a;                               //局部变量声明提升
//     console.log(a);                      //undefined
//     a = 10;
// };
//
// myFunction11();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Example - 3
//
// 验证你输入的是否是质数

var alertText = prompt("Please enter a number");

//如果输入为空
if (alertText === "") {
    console.log("Your input is incorrect")

} else {

    //输入不为空，是否输入为数字
    if (!isNaN(parseInt(alertText))) {
        console.log(getPrimeNumber(alertText));
    }
}

//判断是否是质数
function getPrimeNumber(num) {

    for (var i = 2; i <= num / 2; i++) {

        if (num % i === 0) {
            return "Your input is not a prime number";
        }
    }
    return "Your input is a prime number";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



































