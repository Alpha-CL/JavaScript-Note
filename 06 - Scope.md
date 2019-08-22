
<h3 id="#">作用域</h3>


* 变量

    * 全局变量 ( 不能被删除 )
    
        * 除函数外，任何位置声明的变量都是全局变量
        
        * 一直占用内存空间
        
            * 如果页面不关闭，那么就不会释放，会一直占用内存，消耗内存空间
    
        * 
        
    * 局部变量
    
        * 在函数内部声明的变量，称为局部变量，函数外不能调用此变量
        
        * 临时占用内存空间
        
            * 局部变量被使用后，会释放所占有的内存
        
        * 
        
    * 隐式全局变量 ( 可以被删除: delete variable; )
    
        * 声明的变量没有用 关键字 " var " 等声明变量
        
        * 函数中使用 没有声明的变量，在外部依然可以调用 ( 因为此时的变量为 隐式全局变量 )
        
        * 
    
* 作用域

    * 全局作用域
    
        * 全局变量的使用范围
        
        * 
    
    * 局部作用域
    
        * 局部变量的使用范围
        
        * 
         
    * 块级作用域
    
        * JS 中并没有 块级作用域中声明的变量 依然是 全局变量
    
        * { } 中的代码称为 块级别作用域 ( 函数除外 )
        
        * 可以在 块级别作用域内 和 全局 使用
        
        * 
        
* 作用域链

    * 零级作用域

        * < script > </ script >
        
        * 
        
    * 一级作用域
        
        * function f1() { var num = 20; function F2 (); }
        
        *
        
    * 二级作用域
    
        * function F2() { var num = 30; function F3 (); }
        
    * 三级作用域
    
        * function F3() { var num = 40; function F4 (); }
        
        * 
        
    * 四级作用域
    
        * function F4() { var num = 50; function Fn (); }
        
        * 
        
    * N 级作用域
    
        * function Fn() { var numN = 60; console.log(num); }
        
            * num = ？
            
            * 此时 num = 60;
            
            * 如果 N 级别作用域并没有声明 num 变量
            
                * 系统会依次在上一级作用域中去寻找: 
                
                * (n - 1)级作用域 -> (n - 2)级作用域 -> (n - 3)级作用域 -> ... -> 零级作用域

                * 如果到 零级作用域 仍然没有找到 num 变量，则会输出结果 undefined
                
                *

* 预解析

    * 在解析当前代码行之前
    
        * 提前 " 变量声明 " 在当前作用域之上
        
        * 提前 " 函数声明 " 在当前作用域之上



```javascript


//


//预解析流程分析
//num1 === num2 === num3 === numN

//Example - 变量 预解析
//step - 1
var num1;                               //no assignment
console.log(num1);                      //undefined

//step - 2 
console.log(num2);                      //undefined
var num2 = 10;

//error example 
console.log(num2);                      //Error: num2 is not defined   

// ==> 隐是转换: 把 " 声明变量 " 提前至 " 调用变量( 当前作用域 )  " 之前
//              仅提前" 声明变量 "，并不提前 " 变量赋值 " 
var num2;                               //no assignment
console.log(num2);                      //undefined
num2 = 10;


//Example - 函数 & 声明 预解析
//example - 1
//step - 1

myFunction();                           //Hello World
function myFunction() {
    console.log("Hello World");          
}

//step - 2
// ==> 隐式转换: 会把 " 函数声明 " 提前至 " 调用函数( 当前作用域 ) " 之前
function myFunction() {
    console.log("Hello World");
}
myFunction();                           //Hello World/Hello World


//example - 2
//step - 1
function myFunction1() {
    console,log("Hello World");
}

myFunction1();                          //Hello World
myFunction1();                          //See you again

function myFunction1() {
    console.log("See you again");
}

//step - 2
// ==> 隐式转换: 函数调用，从上倒下解析
function myFunction1() {                //first transfer 
    console.log("Hello World");         //second transfer
}
function myFunction1() {
    console.log("See you again");
}

myFunction1();                          //Hello World
myFunction1();                          //See you again



//Example - 变量 & 函数 & 声明 预解析
//step - 1
myFunction2();
function myFunction2() {
    console.log(num);                   //undefined
    var num = 10;
}

//error example
myFunction2();
function myFunciton2() {
    console.log(num);                  //Error: num is  nor defined
}


//step - 2
// 隐式转换: 1. 函数声明 提前至 函数调用
//          2。函数内部变量声明 提前至 函数内部 变量调用之前，函数内部变量赋值并不提前
function myFunction2() {
    var num;
    console.log(num);       
    num = 10;
}
myFunction();                           //undefined



//example - 2
//step - 1
myFunction3();                          //undefined
var num = 20;
function myFunction3() {
    console.log(num);
    var num = 10;
}


//step - 2
//隐式转换: 
var num = 20;                          //全局变量
function myFunction3() {
    var num;                            //局部变量
    console.log(num);
    num = 10;
}
myFunction3();                          //undefined


//example - 2.1
//step - 1
myFunction3();                          //undefined
var num = 20;
function myFunction3() {
    console.log(num);
}


//step - 2
//隐是转换: 1. 把 函数声明 提前至 调用函数( 当前作用域 ) 之前
//         2. 把 变量声明 提前至 调用变量( 当前作用域 ) 之前，变量赋值并不提前   
var num;
function myFunction3() {
    console.log(num);
}
myFunction3();                          //undefined
num = 20;


```
