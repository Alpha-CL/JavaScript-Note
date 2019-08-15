<h2 id="#">JS 的流程控制、分支语句、循环、顺序结构</h2>

* 顺序结构

    * 从上到下，从左到右

* 分支结构

    * if 语句: 
    
        多个分支，并且针对范围的判断
    
        if 语句条件互斥，相比较的条件不可以有交集
    
        * if
            
            * 单个分支语句
        
        * if else
        
            * 多分支语句，只执行一个
        
        * if ... if else ...
        
            * 多分支语句，只执行一个
            
        * if ... if else ... else 
        
            * 多分支语句，只执行一个
    
    * switch case 语句：
        
        多个分支，并且针对具体值的判断
    
        * 多分支语句，只执行一个 ( 必须要有 break，否则会一直执行下去 )
    
    * break
    
        * 终止循环
    
    * continue
    
        * 跳出循环

* 循环结构

    * while
    
        先判断，后循环，有可能一次循环体都不执行
    
    * do while
    
        先循环，再判断，至少执行一次循环体 
        
    * for
    
    * for in



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

```javascript


//Syntax




```






<h2 id="#">数组</h2>

<h2 id="#">函数</h2>

<h2 id="#">内置对象</h2>

<h2 id="#">内置对象及一些方法</h2>