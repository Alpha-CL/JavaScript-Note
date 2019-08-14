<h2 id="#">JS 的流程控制、分支语句、循环、顺序结构</h2>

* 顺序结构

    * 从上到下，从左到右

* 分支结构

    * if 语句
    
        if 语句条件互斥; 相比较的条件不可以有交集
    
        * if
        
        * if-else
        
        * if-else...if
    
    * switch...case

* 循环结构

    * while
    
        * do-while
        
    * for
    
    * for-in



<br/>
<hr/>
<br/>



<h4 id="#">The if syntax and characteristic</h4>

1. 条件互斥

    * if 中的 条件 不可以互相有交集

2. 条件可以有范围

    * 与 switch 条件相反，switch 语句为单一条件

<br/>

**The if statement**

```javascript

//Syntax

if ( condition ) {
    // block of code to be executed if the condition is true
}


//Example

if ( 9 > 6 ) {                              
    console.log( "Hello World" );                  //Hello Word           
}

if ( 6 > 9 ) {
    console.log( "Hellow World" );                 //no output, because condition is false
}


```

<br/>

**The else statement**

```javascript


//Syntax

if ( condition ) {
    // block of code to be executed if the condition is true
} else {
    // block of code to be executed if the condition is false
}


//Example

if ( 6 > 9 ) {                                  //The condition is false                                                                         
    console.log( "Hello World" );               //Output nothing, because condition is false   
} else {    
    console.log( "See you again" );             //Output See you again, because condition is false
}



```

<br/>

**The if else statement**

```javascript


//Syntax

if ( condition1 ) {
    // block of code to be executed if the condition is true    
} else if ( condition2 ) {
    // block of code to be executed if the condition1 is false and condition2 is true
}


//Example


if ( 6 > 9  ) {                                 //The condition1 is false
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

if ( 6 > 9 ) {                                  //condition is false，judge next condition
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


//Syntax

var demo = condition1 ? condition2 : condition3;

// 如果 condition1 为 true，则执行 condition2，然后将 condition2 赋给变量 demo
// 如果 condition1 为 false，则执行 condition3，然后将 condition3 赋给变量 demo


```

<br/>

**短路语句**

```javascript






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

var Maxnum = num1 > num2 ? console.log( num1 ) : console.log( num2 );


```

<br/>

**Example - 2**

判断输入的数字是奇数还是偶数

```javascript


var num = parseInt( prompt( "please input a number" ) )

if ( num % 2 == 0 ) {
    console.log( "偶数" );
} else {
    console.log( "奇数" );
}


```



<br/>
<hr/>
<br/>



<h4 id="#"></h4>


<h2 id="#">数组</h2>

<h2 id="#">函数</h2>

<h2 id="#">内置对象</h2>

<h2 id="#">内置对象及一些方法</h2>