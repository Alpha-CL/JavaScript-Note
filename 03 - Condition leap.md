<h2 id="#">JS 的流程控制、分支语句、循环、顺序结构</h2>

* 顺序结构

    * 从上到下，从左到右 ( 不严谨 )
     
    * 

* 分支结构

    * if 语句: 
    
        多个分支，并且针对范围的判断
        
        语句条件互斥，相比较的条件不可以有交集
        
        * if
        
            * 只有一个分支时用
            
            * 单个分支语句
        
        * if ... if else ...
        
            * 有两个以上分支时用
        
            * 多分支语句，只执行 ( if / else if ) 其中的一个
            
        * if ... if else ... else 
        
            * 有两个以上分支时用
        
            * 多分支语句，只执行 ( if / else if / else) 其中的一个
    
    * switch case 语句：
    
        多个分支，并且针对具体值的判断
    
        * 多分支语句，只执行一个 ( 必须要有 break，否则会一直执行下去 )
        
    * 三元表达式    
    
        * var demo = condition1 ? condition2 : expression;
        
* 循环结构

    * while
    
        循环语句 ( 值判断 )
    
        * 先判断，后循环
        
        * 有可能一次循环体都不执行
    
    * do while
    
        循环语句 ( 循环体至少会执行一行 )
    
        * 先循环，再判断
        
        * 至少执行一次循环体 
        
    * for
        
        循环语句 ( 翻译判断，已知道循环次数时使用较好 )
    
        * 已知循环次数时用
    
    * for in
    
        * 

* 循环控制

    * break
    
        * 如果在循环中使用，遇到 break，则立即跳出当前所在的循环
        
    * continue
    
        * 终止循环
        
            终止循环
        
        * " 跳过"  本次循环
        
            终止本次循环 ( 跳过 )，开始下一圈循环

* 调试

    * 断点
    
        因为浏览器一打开，就已经执行完代码，增加断电可以一步一步的排查错误
    
        * 控制语句执行步骤
        
        * 为了寻找代码错误



<br/>
<hr/>
<br/>



<h4 id="#">The if syntax and characteristic</h4>

1. 条件互斥

    * if 中的 条件 不可以互相有交集

2. 范围条件

    * 区域性变量 或 表达式

<br/>

**The if statement**

```javascript

//Syntax

if (condition) {
    // block of code to be executed if the condition is true
}


//Example

if (9 > 6) {                              
    console.log( "Hello World" );                  //Hello Word           
}

if (6 > 9) {
    console.log( "Hellow World" );                 //no output, because condition is false
}


```

<br/>

**The else statement**

```javascript


//Syntax

if (condition) {
    // block of code to be executed if the condition is true
} else {
    // block of code to be executed if the condition is false
}


//Example

if (6 > 9) {                                  //The condition is false                                                                         
    console.log( "Hello World" );               //Output nothing, because condition is false   
} else {    
    console.log( "See you again" );             //Output See you again, because condition is false
}



```

<br/>

**The if else statement**

```javascript


//Syntax

if (condition1) {
    // block of code to be executed if the condition is true    
} else if ( condition2 ) {
    // block of code to be executed if the condition1 is false and condition2 is true
}


//Example


if (6 > 9) {                                 //The condition1 is false
    console.log( "Hello World" );               //Output nothing, because condition is false
    
} else if ( 9 > 6 ) {                           //The condition is true
    console.log( "See you again" );             //Output: See you again, because condition2 is true
}


```

<br/>

**The if & else if & else statement**

 ```javascript
 
 
//Syntax

if ( condition1 ) {
    // block of code to be executed if the condition is true
} else if ( condition2 ) {
    //block of code to be executed if the condition1 is false and condition2 is true
} else if ( condition3 ) {
    //block of code to be executed if the condition1 is false and condition3 is true
} else {
    //block of code to be executed if the all other condition is false
}
 
 
//Example

if( 6 > 9 ) {                                   //condition is false，judge next condition
    console.log( "Hello World" );               
} else if ( 7 > 9 ) {                           //condition is false，judge next condition
    console.log( "See you again" );             
} else if ( 8 > 9 ) {                           //condition is false，judge next condition
    console.log( "See you again" );             
} else {
    console.log( "Goodbye" )                    //Output: Goodbye, because all other condition is false
}


 ```
 
<br/>

**三元表达式**

使用条件: 有两个分支，并且最终结果是两个分支中的一个

```javascript

//if语句

if(condition1) {
    console.log('Hello World');
} else {
    console.log('See you again');
}


//三元语句

var demo = condition1 ? condition2 : condition3;

// 如果 condition1 为 true，则执行 condition2，然后将 condition2 赋给变量 demo
// 如果 condition1 为 false，则执行 condition3，然后将 condition3 赋给变量 demo


此时两个语句作用一样


```

<br/>

**短路语句**

多用于接收后端数据时，对数据类型等，先进行初步判断

```javascript

// if 语句

if(1 > 2) {
    console.log('a');
}


//短路语句

var a = 1 > 2 && console.log('a');


//此时两个语句作用一样


```

<br/>

**Example - 1**

判断出两个数字中最大的并输出

```javascript


var num1 = 10;
var num2 = 20;

if ( num1 > num2 ) {
    console.log( num1 );
} else {
    console.log( num2 );
}


// 三元表达式

var maxNum = num1 > num2 ? console.log( num1 ) : console.log( num2 );


```

<br/>

**Example - 2**

判断输入的数字是奇数还是偶数

```javascript


var num = parseInt(prompt( "please input a number" ))

if (num % 2 == 0) {
    console.log( "偶数" );
} else {
    console.log( "奇数" );
}


```



<br/>
<hr/>
<br/>



<h4 id="#">switch case</h4>

1. switch 中可以有任意数量的 case 语句

2. case 语句只能包含常量，不能是变量或表达式

3. variable_expression 和常量表达式的 **数据类型** 和 **值** 必须是一致的 

    ( variable_expression === caseValue )

4. 每个 case 语句后应该放一个 break 终止，否则会继续执行下一个语句

5. case 表达式必须是唯一的

6. default 可选配，不一定要添加

7. 最后一个 语句的 break 可以省略

8. 利用 break 的特性，简化重复代码

    * case 后相同的 语句可以只写一条，
    
    * 但是在最后一个相同语句的 case 后面要加 break


```javascript


//Syntax

switch(variable_expression) {
    case constant_expr1: {
        //statements;
        break;
    }
    case constant_expr2: {
        //statements;
        break;
    }
    default: {
        //statements;
        break;
    }
}


//Example

switch (new Date().getDate()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Firday";
        break;
    case 6:
        day = "Saturday";
        break;   
    default:
        console.log('输入有误');
}


```

<br/>

**Example - 1**

等级选择

```javascript


var grade = A;

switch(grade) {
    case A:
        console.log( "90 ~ 100" );
        break;
    case B:
        console.log( "80 ~ 90" );
        break;
    case C:
        console.log( "70 ~ 80" );
        break;
    case D:
        console.log( "60 ~ 70" );
        break;
}


```

<br/>

**Example - 2**

判断 闰年 / 平年

能被 4 整除，但不能被 100 整除，或能被 400 整除的年份及为闰年

 ```javascript
 
 
var year = 2016;

if( year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ) {
    console.log('闰年')
} else {
    console.log('平年')
}


 ```
 
<br/>

**Example - 3**

根据月份显示天数

1、3、5、7、8、10、12 ===> 31天

4、6、9、11 ===> 30天

2 ===> 28天

```javascript


//利用 break 特性简写代码
//最后一个语句可以省略 break

var month = 8;

switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: 
        console.log('31天');
        break
 
    case 4:       
    case 6:       
    case 9:       
    case 11:
        console.log('30天');
        break;
        
    case 2:
        console.log('28天');
}


```



<br/>
<hr/>
<br/>



<h4 id="#">The while loop syntax</h4>

while loop conditions 

1. 计数器

2. 结束条件

3. 

```javascript

//Syntax

var i = 1;              //计数器

while (condition) {     //循环终止条件
    //statement         //执行语句
    i++;                //计数器 +1，继续循环, 如果不加则会一直执行 ( 死循环 )
}

console.log();          


//Example

var i = 0;

while (1 < 10) {
    console.log("Hello World")
    i++;
}


```

<br/>

**Example - 1**

计算 1 ～ 100 之间所有数字的和

```javascript


var i = 1;
var result = 0;

while (i <= 100) {
    result += i;
    i++;
}

console.log(result);


```

<br/>

计算 6 的阶乘

```javascript

var i = 1;
var accumulate = 1;

while (i < 7) {
    accumulate *= i;
    i++;
}

console.log(accumulate);


```

<br/>

计算 1 ～ 100 中所有偶数的和

```javascript


var i = 1;
var sum = 0;


while (i <= 100) {
    if (i % 2 == 0) {
        sum += i;
    }
    i++;
}

console.log(sum);


```

<br/>

计算 1 ～ 100 中所有奇数的和

```javascript


var i  = 0;
var num = 0;

while (i <= 100) {
    if (i % 2 != 0) {
        sum += i;
    }
    i++;   
}

console.log(sum);


```

<br/>

计算 1 ～ 100 中所有能被 7 整除的数字

```javascript


var i = 0;

while (i <= 100) {
    if (i % 7 == 0) {
        console.log(i);
    }
    i++;
}

```

<br/>

求账号和密码是否一致，登陆效果实现

提示用户输入账号
提示用户输入密码

如果账号和密码不对，则一直提示用户输入账号和密码

账号: admin
密码: 123 ( string )

```javascript


var userName = prompt("请您输入账号");
var userPwd =prompt("请您输入密码"); 

while (userName != "请输入账号" || userPwd != "请输入密码") {
    userName = "请您重新输入正确的账号";
    userPwd = "请您重新输入正确的密码";
}

console.log("登陆成功");


```



<br/>
<hr/>
<br/>



<h4 id="#">The do ... while loop syntax</h4>

1. 会在代码执行前先执行一次

```javascript


//Syntax

do {
    // statement
}
while (condition);          // " ; " 一定要有
//statement
//至少执行一次的语句，并在每次 condition 值为真时重新执行

//condition
//循环中每次都会计算的表达式。如果 condition 值为真，statement 会再次执行
//当 condition 值为假，则跳转到 do ... while 之后的语句


//Example

var result = "";
var i = 0;

do {
    i = i + 1;
    result = result + i;
} while (i < 5);

console.log(result)
// exprected result: "12345"


```

<br/>

**Example - 1**

提示用户输入 y / n 

如果输入 n 就一直提示
如果输入 y 就输出 Hello World

```javascript


do {
    var result = prompt("please input n or y")
} while (result != "y") 

console.log("very nice !")


```

<br/>

计算 100 以内所有 3 的倍数的和

```javascript


var i = 0;
var sum = 1;

while (i <= 100) {
    if (i % 3 == 0) {
        sum += i;
    }
    i++;
}

console.log(sum);


do {
    if (i % 3 == 0) {
        sum += i;
    }
    i++;
} while (i <= 100); 


```



<br/>
<hr/>
<br/>



<h4 id="#">The for loop syntax</h4>

循环机制

( 使用有意义的声明变量 )

1. 循环次数变量 ===> initialization

2. 循环条件 ===> codition

3. 循环语句 ===> statements

4. 循环递增条件 ===> final-expression

```javascript


//Syntax

for (initialization; condition; final-expression) {
    //statements
}

//initialization: 初始化一个计数器，可以用 var 或 let 关键字声明新变量
//                使用 var 声明的变量不是该循环的局部变量，而是与 for 循环处于在同样的作用域中

//condition: 该表达式的结果 ( true / false ) 条件被用于判断循环是否继续执行
//           如果为 ture 继续执行，为 false 则跳出循环体 
//           该表达式是可选的，如果被忽略，那么永远认为 condition 的结果为 true


//final-expression: 每次循环的最后执行的表达式
//                  执行于下一次 codition 条件计算之前
//                  通常被用于更新或递增计数器变量


//Example

var step;

for (step = 0; step < 5; step++) {
    //Run 5 times, whith values of step 0 through 4.
    console.log('Walking east one sttep')
}


```

<br/>

**Example - 1**

计算 1 ～ 100 之间所有偶数的和

```javascript

var sum1 = 0;

for (var i = 1; i <= 100; i++) {
    sum1 += i;
}

console.log(sum1);


```

<br/>

**Example - 2**

计算 1 ～ 100 之间所有奇数的和

```javascript


var sum2 = 0;

for (var i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        sum2 += i;
    }
}

console.lod(sum2);

```

<br/>

**Example - 3**

计算 1 ～ 100 之间所有能被 3 整除数字的和

```javascript

var sum3 = 0;

for (var i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
        sum3 += i;
    }
}

console.log(sum3);


```

<br/>

**Example - 4**

计算 1 ～ 100 之间所有尾数带 7 和能被 7 整除的数字的和

```javascript


var  sum4 = 0;

for (var i = 0; i <= 100; i++) {
    if (i % 10 == 7 || i % 7 == 0) {
        sum4 += i;
    }
}

console.log(sum4);


```

<br/>

**Example - 5**

九成九乘法口诀表

```javascript


//基础语法

for (var j = 1; j <= 9; j++) {

        for (var k = 1; k <= 9; k++) {
            document.write(k + "*" + j + "=" + j * k);
        }
        document.write("<br/>");

}


//三角形块

for (var j = 1; j <= 9; j++) {

        for (var k = 1; k <= i; k++) {
            document.write(k + "*" + j + "=" + j * k);
        }
        document.write("<br/>");

}


//增加表格

document.write("<table border='1' cellpadding='10' cellspacing='0'>");

for (var i = 1; i <= 9; i++) {
    document.write("<tr>");

        for (var j = 1; j <= 9; j++) {
            document.write("<td>");
                document.write(i + "*" + j + "=" + i * j);
            document.write("</td>");
        }
        document.write("<br/>");

    document.write("</tr>");
}
document.write("</table>");


```

<br/>

**Example - 6**

本金 10000 元存入银行，年利率千分支三，每过一年，将被禁和利息作为新的本金

计算五年后本金是多少

```javascript


var principal = 10000;
var rate = 0.003;

for (var i = 1; i <= 5; i++) {
    
    console.log(principal *= date + principal);
    
}


```

<br/>

**Example - 7**

斐波那契数列: 1、1、2、3、5、8、13、21、34 ...

已知有 2 只兔子，并且 2 只兔子每月可以繁殖 2 只兔子

新生的兔字 第三个月起，每月繁殖 2 只兔子

求假如以一年没有发生死亡，那么一对兔子一年能繁殖多少对兔子 ？

```javascript


var num1 = 1;       //第一位
var num2 = 1;       //第二位
var sum = 0;        //第三位

for (var i = 3; i <= 12; i++) {
    
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    
}

console.log(sum);       


```



<br/>
<hr/>
<br/>



<h4 id="#">调试</h4>

**单步调试**

执行后无法加断点

-> F12 开发者工具 

-> **sources** 

-> 双击文件 

-> 点击行 ( 断点 ) 鼠标悬停会出现 变量类型，此时的代码行是未执行的

-> 电磁右侧上下箭头，表示执行和返回，或者直接点击加号添加变量



<br/>
<hr/>
<br/>



<h4 id="#">The keyword break and continue syntax</h4>

**Break**

如果在循环中使用，遇到 break，则立即跳出当前所在的循环

```javascript


for (var i = 0; i < 10; i++) {
    
    //增加 break 后，会跳出 while 循环
    //但是不会跳出 for 循环
    while (true) {
        console.log("I am out")
        break;
    }
    
}


```

<br/>

**Example - 1**

求整数 1 ～ 100 的累加值，要求碰到个位为 3 的数则终止累加

```javascript


for(var i = 1; i <= 100; i++) {
    if (i % 10 == 3) {
        console.log(i);
        break;
    }
}


```

<br/>

**Example - 2**

计算整数 1 ～ 100 的累加值， 要求跳过所有个位数为 3 的数

```javascript


var sum = 0;
var i = 100;

while(i <= 200) {
    if(i % 10 == 3) {
        i++;
        continue;
    }
    sum += i;
    i++;
}
console.log(sum);


```

<br/>

**Example - 3**

找到 100 ～ 200 之间第一个可以被 7 整除的数字

```javascript


var sum10 = 0;

for(i = 100; i <= 200; i++) {
    if(i % 7 == 0) {
        console.log(i);
    }
}




```

<br/>

**Example - 4**

计算 100 ～ 300 之间所有的奇数的和 ( 用 continue )

```javascript


var sum11 = 0;


for(i = 100; i <= 300; i++) {
    if(i % 2 == 0) {
        continue;
    }
    i++;
    sum += i;
}


```




