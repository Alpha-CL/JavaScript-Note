
<br/>

<h2 id="#">Function</h2>

1. 函数需要先定义，才能调用

2. 函数命名: 遵循小驼峰命名法

    * variable name ==> variableName
    
3. 若命名相同的函数名，则后面的函数会覆盖之前的函数

4. 转到定义

<br/>

* 声明函数

    * function newFunctionName(param1, param2, ... paramN) {statements}

    * 
    
    * 函数的另一种定义方式
    
        * 命名函数: function newFunctionName ()
        
            * 调用
            
                * 只要重名，无论在哪调用，都会被覆盖
            
            * newFunctionName ();
            
            * 
        
        * 匿名函数: function () {};
        
            * 匿名函数不会存在命名冲突的问题
            
            * 匿名函数声明: 函数表达式
        
                * var newFunctionName = function ();
                
                    * 把一个函数 赋值 给一个变量 就称为函数表达式
                    
                    * 函数表达式后要加 " ； " 
                    
                    * 赋值函数调用: newFunctionName ();
                
            * 调用
            
                * 函数自调用: 声明时直接调用，**但是只能用一次**
                
                    * (function() {[statments]} ();
                
                * 匿名函数不可以直接调用
                
                *             

* 调用函数

    * functionName(realParam1, realParam2, ... realParamN);

    * 

* 参数

    * 形参 param
    
        * 函数定义时，括号中的 "变量" 为形参
        
        * 
    
    * 实参 real param
    
        * 函数在调用时，括号中的 "变量" 或 "值" 为实参
        
        * 
        
    * 形参和实参的个数可以不同
    
        * 依次从左到右对应参数
        
        * 
    
    * 传参
    
        * 
    
* 返回值: 

    * return
    
        * return varName;
        
    * 是否有返回值
    
        * 函数中有 return，则这个函数 有返回值
        
        * 函数中没有 return，则函这个函数 没有返回值
        
        * 函数中有 return，但后面没有内容，则这个函数 没有明确返回值
        
        * 如果函数 没有明确返回值，函数调用了，则此时返回值为 undefined
        
    * console.log(functionName);
    
        * 如何函数名，则输出 函数的代码
        
    * return 下面的代码不会再执行
    
* arguments

    * 伪数组
    
    * 用于记录形参
    
    * arguments.length
    
        * 调用形参的长度
        
    * 

* 函数的数据类型: 

    * function
    
    * 
    
* 回掉函数: 函数作为参数使用

    * 函数作为参数使用时，被称为回调函数
    
    * function myFunction (newFunction) {};
    
    * 
    
* 函数作为返回值使用

    * function myFunction () { [statements] return newFunction() }

<br/>

```javascript


//Create new function

function newFunctionName([param,[param,[...param]]]) {

    [statements] // The function returns the product of p1 and p2

}

//transfer function
myfunction(realParam, realParam, realParam);


//newFunctionName
//函数名

//param1、param2、param3 ... paramN
//要传递给函数的参数的名称
//参数的最大数量在不同的引擎中是不同的

//statements
//组成函数主体的语句



```

<br/>

Example - 1

计算两个数的和

```javascript


//Calculate the sum of two numbers

function towNum() {

    var num1 = 10;
    var num2 = 20;
    var twoNumSum = num1 + num2;

    console.log(twoNumSum);
}
towNum();
// > 30


```

```javascript


//计算任意两个数字的和

function twoNumSum(num1, num2) {

    return num1 + num2;
}

console.log(twoNumSum(10, 20));


```

```javascript


//Extracting logical relationships

function twoNum(num1, num2) {

    var twoNumSum = num1 + num2;
    console.log(twoNumSum)
}

var num1 = parseInt(prompt("请输入第一个数字"));       // 10
var num2 = parseInt(prompt("请输入第二个数字"));       // 20

twoNum();
// > 30


```

```javascript


//Add keyword "return"

function twoNum(num1, num2) {

    var twoNumSum = num1 + num2;
    return twoNumSum;       //back twoNumSum value, no output

}

var getTwoNumSum = twoNum(10, 29);                  // 30
console.log(getTwoNumSum + 10);                     // 40


```

<br/>

Example - 2

计算 firstNum ～ lastNum 之间所有数的和

```javascript


//计算 1 ～ 100 之间所有数的和

function allNumSum() {

    var numSum = 0;
    for(var i = 1; i <= 100; i++) {
        numSum += i;
    }

    return numSum;
}
console.log(allNumSum());
// > 5050

```

```javascript


//计算 1 ～ lastNum 之间所有数的和

function allNumSum(lastNum) {

    var numSum = 0;
    for(var i = 0; i < 0; i++) {
        numSum += i;
    }
    return numSum;
}
console.log(allNumSum(100));
// > 5050


```

```javascript


//计算 fistNum ～ lastNum 之间所有数的和

function allNumSum(firstNum, lastNum) {

    var numSum = 0;
    for(var i = firstName; i <= lastName; i++) {
        numSum += i;
    }
    return numSum;
}
console.log(allNumSum(1, 100));
// > 5050


```

<br/>

Example - 3

计算圆的面积

```javascript

function circleArea(rad) {

    return Math.PI * rad * rad;

}
console.log(circleArea(5));
// > 78.54


```

<br/>

Example - 4

判断一个数是否是素数 ( 质数 )

只能被 1 和 自身整出的数字

```javascript


function isPrimeNumber(num) {

    for (var i = 2; i < num; i++) {

        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrimeNumber(7) ? "是质数" : "不是质数");


```

<br/>

Example - 5

计算 2 个数中的最大值

```javascript

function getMax(x, y) {
    
    return x > y ? x : y;
    
}
console.log(getMax());


```

计算 3 个数量中的最大值

```javascript


function getThreeMax(x, y, z) {

    return x > y ? (x > z ? x : z) : (y > z ? y : z);
}

console.log(getThreeMax(2, 8,10));


```
计算两个数的差

```javascript


function getSub(x, y) {
    return x - y;
}
console.log(getSub(10, 20));


```

<br/>

Example - 6

计算一组数中的最大值

```javascript


function getArrMax(arr) {

    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {

        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

var arr = [10, 20, 30, 40, 50];
var max = getArrMax(arr);

console.log(max);


```

计算一组数的最小值

```javascript


function getArrSub(arr) {

    var min = arr[0];
    for(var i = 0; i < arr.length; i++) {

        if(min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

console.log(getArrSub([10, 20, 30, 40, 50]));


```
计算一组数的和

```javascript


function getArrSum(arr) {

    var arrSum = 0;
    for (var i = 0; i < arr.length; i++) {

        arrSum += arr[i];
    }
    return arrSum;
}

console.log(getArrSum([10, 20, 30, 40, 50]));


```

<br/>

计算数组 最大值、最小值、和

```javascript


function getArrMaxAndMinAndSum(arr) {

    var max = arr[0];
    var min = arr[0];
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {

        sum += arr[i];

        if (max < arr[i]) {
            max = arr[i];
        }// if end

        if (min > arr[i]) {
            min = arr[i];
        }// if end
    }// for end

    var newArr = [max, min, sum];
    return newArr;
}

var resultArr = getArrMaxAndMinAndSum([1, 2, 3, 4, 5, 6]);

console.log("Max: " + resultArr[0]);
console.log("Min: " + resultArr[1]);
console.log("Sum: " + resultArr[2]);


```

<br/>

数组反转

```javascript


function reverseArr(arr) {

    for (var i = 0; i < arr.length / 2; i++) {

        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(reverseArr([1, 2, 3, 4, 5, 6]));


```

<br/>

冒泡排序

```javascript


function sortArr(arr) {

    for (var i = 0; i < arr.length - 1; i++) {

        for (var j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j] < arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArr([1,2,3,4,5,6]));


```

计算阶乘 

eg: 5 的阶乘 5 * 4 * 3 * 2 * 1

```javascript


function getFactorial(num) {

    var factorial = 1;

    for(var i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial
}

console.log(getFactorial(5));


```

<br/>

斐波那契数列

```javascript


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


```

<br/>

输入 year month day 

计算 有多少天

```javascript


function getDays(year, month, day) {

    var days = day;

    //Output days to be executed if the January
    if (month == 1) {
        return days;
    }

    //Block of code to be executed if the not January
    var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    for (var i = 0; i < month - 1; i++) {
        days += months[i];
    }

    //Is it a leap year ?
    function isLeapYear(year) {
        return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    }
    //If the leap year, add one day
    if (isLeapYear(isLeapYear(year) && month > 2)) {
        days++;
    }
    return days;
}
console.log(getDays(2000, 4, 2));


```

<br/>

阶乘的和

```javascript


function getFactorial(num) {

    var factorial = 1;
    for (var i = 1; i <= num; i++) {

        factorial *= i;
    }
    return  factorial;
}

function getFactorialSum(num) {

    var factorialSum = 0;
    for (var i = 1; i <= num; i++) {

        factorialSum += getFactorial(i);
    }
    return factorialSum;
}

console.log(getFactorialSum(5));


```

<br/>

计算 形参 和

```javascript


function argumentsSum() {

    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {

        sum += arguments[i];
    }
    return sum;
}

console.log(argumentsSum(1, 2, 3, 4, 5, 6, 7, 8, 9));


```




<br/>
<hr/>
<br/>



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

