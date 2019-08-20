<h1 id="#">Js Basic</h1>

<h2 id="#">JS 介绍基本语法、变量、运算符</h2>

<h3 id="#"></h3>



<br/>
<hr/>
<br/>



<h4 id="#">模块学习</h4>

* ECMA Script 

    * ECMAScript 是由网景的 布兰登·艾克 开发的一种脚本语言的标准化规范
    
    * 最初命名为Mocha，后来改名为LiveScript，最后重命名为JavaScript
    
    * ECMA Script是由 ECMA-262 标准化的脚本语言的名称
    
* DOM --- Document object Model 

    * 文档对象模式

* BOM --- Browser object Model

    * 浏览器对象模式



<br/>
<hr/>
<br/>




<h4 id="#">JavaScript 是什么</h4>

1. 脚本语言

    * 不需要编译，直接执行

2. 解释性语言

    * 遇到一行，就执行解释一行
    
    * 需要吧代码翻译成计算机所认识的二进制语言，才能执行

3. 动态类型的语言

4. 基于对象的语言

5. 类型的语言

    * 强类型语言
    
        * 声明变量: 必须声明变量的类型 
        
            int num = 10; 
            
            float num2 = 90.3;

    * 弱类型语言: JavaScript
    
        * 声明变量: 所有类型都可以用 var 声明
        
            var num = 10;
            
            var num2 = 90.3;



<br/>
<hr/>
<br/>




<h4 id="#">JS 的起源 LiveScript</h4>

最初的目的: **为了解决用户和浏览器直接的交互所创造的语言**

Brendan Eich 1961 年用**十天**时间创造出了 LiveScript

JavaScript 和 Java 没有任何关系，只是因为 LiveScript 为了迅速推广修改成 JavaScript


 
<br/>
<hr/>
<br/>




<h4 id="#">JS 现在可以做什么</h4>

* 网页特效  ( JavaScript.js )

* 服务端开发 ( Node.js )

* 命令行工具 ( Node.js )

* 桌面程序 ( Electron )

* APP ( Cordova )

* 控制硬件 - 物联网 ( Ruff )

* 游戏开发 ( cocos2d-js )



<br/>
<hr/>
<br/>




<h4 id="#">JavaScript 和 HTML、CSS 的区别</h4>

HTML: 提供网页结构，提供网页内容

CSS: 美化页面外观

JavaScript: 控制网页内容，增加动态交互效果



<br/>
<hr/>
<br/>




<h4 id="#">JS 引入方式</h4>

1. 内部 JS 文件

    * 在 < script > 中，无论在 head 还是在 body 中都可以
    
    * js 代码可以在 html 的标签中书写

2. 外部 JS 文件

    * 链接外部 JS 文件，需要在 head 中用 script 标签用写入 .js 文件的资源路径



<br/>
<hr/>
<br/>




<h4 id="#">有错误的 js 代码，那么后面的文件会如何执行</h4>

1. 同一块中的 js 代码，如有错误，则会终止错误代码后的代码

2. 上一块 js 代码块有错误，不会影响后面的 js 代码块

3. script 的标签中不可以省略的

    *   type="text/javascript"  ------ 解决 JS 解析

    *   language="javascript" ------ 解决 PHP 解析
    
    目前 html 页面中，type 和 language 都可以省略，因为 html 遵循 H5 的标准 ( 如果头部规定低版本的 html 则不能省略 )

4. script 标签在页面中可以出现多次



<br/>
<hr/>
<br/>





<h4 id="#">变量</h4>

* 操作的数据都是在内存中操作 

* 字面量

    * 在源代码中一个固定值的表示法。
    
    * 数值字面量：8, 9, 10
    
    * 字符串字面量：'黑马程序员', "大前端"
    
    * 布尔字面量：true，false

* JS 中变量的类型 ( number、false、string、undefined、null、object )

* JS 中声明变量都用 **var**，数据应该有对应的数据类型

* JS 中字符串类型的值都用 单引号 或 双引号

* " + " " - " 等运算

    * console.log(+str);		// 取正
    
    *  console.log(-str);		// 取负
  
<br/>

**总结**

* 变量作用: 用来操作数据 ( 可以存储，可以读取 )

* 变量声明: 没有赋值

* var 变量名: 声明存储位置

* var 变量名 = 值；

<br/>

**基本代码规范**

* JS 中声明变量都用 var

* JS 中的每一行代码结束都应该有分号;

* JS 中的大小写是区分的: var N = 10; var n = 10;

* JS 中的字符串可以谁用 单引号 或 双引号

<br/>

**变量名命名规范**

1. 变量的名字要有意义

2. 变量名有一定的规范: 一般以字母、" $ "、下划线开头，中间或后面可以有 " $ "、字符、数字

3. 不能以 关键字 和保留子命名l，例如: for、while...

4. 变量名一般都是小写

5. 驼峰命名法: 如果有多个单词组合命名 ( 常用小驼峰命名 )

    * 小驼峰命名 ( backgroundColor ): 第一个单词的首字母小写，后面的单词的首字母全部大写
    
    * 大驼峰命名 ( BackgroundColor ): 每一个单词的首字母都大写



<br/>
<hr/>
<br/>



<h4 id="#">变量交换</h4>

**Example - 1**

第三方变量交换

```javascript


var num1 = 10;
var num2 = 20;

var temp = mun1;
//新建变量 temp 存放 num1 的值；

num1 = num2;
//新建变量 num1 存放 num2 的值 ( 这个新建属于一个新的数据单元格 )

num2 = temp;
//新建变量 num2 存放 temp 的值 = num1 的值

console.log(num1);              //20
console.log(num2);              //10


```

**Example - 2**

适用于数字交换

```javascript


var num1 = 10;
var num2 = 20;

num1 = num1 + num1;
//新建变量 num1 存放 num1 + num2 的值 等于 30 ( 这个新建属于一个新的数据单元格 ) 

num2 = num1 - num2; // 10
//用新建的 num1 减去之前的变量 num2 等于 10

num1 = num1 - num2; // 20
//用新建的 num1 减去后来新建的变量 num2 等于 20

console.log( num1 ); //20
console.log( num2 ); //10


```

**Example - 3**

变量交换扩展: 位运算 ( C 语言 )

```javascript


var num1 = 10;
var num2 = 20;

num1 = num1 ^ num2;

num2 = num1 ^ num2;

num1 = num1 ^ num2;

//把数字 10 和 20 转换为 计算机中 二进制的 10 和 20 的数字放在一起
//找到 10和20 的二进制的 源码 的 反码 的 补码放在一起，并且是正数的情况下
//接着进行位移的运算

console.log(num1, num2);


```



<br/>
<hr/>
<br/>



<h4 id="#">JS 注释</h4>

* 注释: 解释代码的含义，给其他程序员看

    *  注释后的代码不执行

* 注释方式:  

    *  单行注释: //
    
        一般用在一行代码的上面
    
    *  多行注释: /**/
    
        一般用在函数或者一段代码的上面



<br/>
<hr/>
<br/>



<h4 id="#">数据类型</h4>


* JS 原始数据类型: number、string、boolean、null、undefined、object

    * number: 数字类型; 
    
        * integer: 整数
        
        * float: 浮点型小数
        
        * 
    
    * string: 字符串类型;
    
        一般都是用 单引号 或者 双引号 括号起来
        
        * 
    
    * boolean: 布尔类型; ( 只有两个值: true ( 真 1 )、false ( 假 0 ) )
    
        大多判断都是用 Boolean 类型判断
    
        * 除了这六个类型转换为 false ，其他都是 true
        
            0、""、null、undefined、NaN、false
            
        * 
    
    * null: 空类型; ( 一个对象只想为空，此时可以赋值为 null )
    
    * undefined: 未来定义类型; 
    
        * 变量声明未赋值，结果为 undefined
        
        * 函数没有明确返回值，如果接收了，结果也是 undefined
        
        * 如果一个变量的结果是 undefined 和一个数字进行计算，结果是 Not a Number ( NaN ), 也没有意义
        
        * 
    
    * object: 对象类型；

```javascript


var num;
console.log( num + 10 ); // NaN


```



<br/>
<hr/>
<br/>



<h4 id="#">typeof</h4>

获取数据类型

typeof varName

```javascript


var num = 10;

var str = "小白";

var fla = ture;

var nll = null;

var undef;

var obj = new Object(age=13, year=14);
    
console.log(typeof num);                            // number 
console.log(typeof str);                            // string
console.log(typeof fla);                            // boolean

console.log(typeof nll);                            // object


console.log(String (nll));                          // null
//以字符串类型输出 nll

console.log(typeof undef);                          // undefined
console.log(typeof obj);                            // object


// 复杂数据类型

console.log(typeof {name: 'john', age: '34'});      // object
console.log(typeof [1,2,3,4]);                      // object
console.log(typeof null);                           // object

console.log( typeof function myfunction(){} )           // function


```



<br/>
<hr/>
<br/>



<h4 id="#">数字类型</h4>

* 数字类型

    * 整数: integer
    
    * 小数: 浮点型
    
        * 单精度 float
        
        * 双精度 double
        
    * NaN & isNaN
    
        不要使用 NaN 判断是不是 NaN，应该使用 isNaN( 值 / 变量 )
        
        * NaN
        
            not a number
            
            * 任何类型和 NaN 运算, 结果都是 NaN
        
        * isNaN(): 
        
            is not a number
            
            * 用于判断是否是数字, 结果为 Boolean 值
        
            * isNaN() ==> 不是数字  == true;
        
            * isNaN() ==> 是数字    == false;
    
    * 进值表示方法
    
        * 十进制: 正常数字
         
        * 八进制: 以 0o 开头
        
        * 十六进制: 以 0x 开头
    
<br/>

```javascript


//JS 中可以书写的 进制

var num = 10;           //十进制书写: 正常数字

var num2 = 0o12;        //八进制书写: 以 0o 开头

var num3 = 0x12;        //十六进制书写: 以 0x 开头


```

<br/>

数字类型的范围

```javascript


console.log(Number .MAX_VALUE)      //数字的最大值

console.log(Number .MIN_VALUE)      //数字的最小值


//  Infinity： 无穷大
// -Infinity： 无穷小


// NaN -> not a number
// NaN 与任何值都不相等，包括他本身

// isNaN -> is not a number


```

<br/>

**不要用小数验证小数 ( 语言 BUG )**

```javascript


var x = 0.1;
var y = 0.2;

var sum = x + y;

console.log(sum)            //0.30000000000000004
 
console.log(sum == 0.3);    //false


```

<br/>

**不要用 NaN 验证是否等于 NaN**

```javascript


var num;

console.log(num + 10 == NaN);         //false


console.log("小猫" == "小狗");         //false


```

<br/>

**判断结果不是一个数字，使用 isNaN()**

```javascript


//isNaN()不是数字  == ture;
//isNaN()是数字  == false;

var num;

var sum = num + 10;

console.log(inNaN(sum))     //ture


```

<br/>

<h4 id="#">进制原理</h4>

二进制: 遇 2 进 1

* 00000001 ------ 1
* 00000010 ------ 2
* 00000011 ------ 3
* 00000100 ------ 4
* 00000101 ------ 5
* 00000110 ------ 6

八进制: 遇 8 进 1

* 00000001 ------ 1
* 00000010 ------ 8
* 00000018 ------ 16

十进制: 遇 10 进 1

* 00000001 ------ 1
* 00000010 ------ 20
* 00000011 ------ 21

十六进制: 遇 f 进 1

* 00000001

    ...

* 00000009
* 0000000a ------ 10
* 0000000b ------ 11
* 0000000c ------ 12
* 0000000d ------ 13
* 0000000e ------ 14
* 0000000f ------ 15 // 遇 f 进 1
* 00000010 ------ 16



<br/>
<hr/>
<br/>



<h4 id="#">字符串</h4>

* 字符串可以使用: 单引号 / 双引号

    * var str = "10";
    
    * var str = '10';
    
* 获取字符串的长度

    * varName.length

* JS 中的 转义符

* 字符串计算

    * 只有 "+" 代表字符串连接，字符串和其他类型连接结果都是字符串
    
    * 其他运算会触发浏览器隐式转换，再进行运算

    
<br/>

**计算字符串的数字个数**

```javascript


var str = "what are you no sha lei";

console.log( str.length )


```

<br/>

JS 转义符

 | 转义序列   | 字符
------------ | -------------
 | \b        | 退格 ( 光标 ) 
 | \f        | 走纸换页
 | \n        | 换行
 | \r        | 回车
 | \t        | 横向跳格
 | \\'        | 一个单引号
 | \\"        | 一个双引号
 | \\\        | 一个反斜杠

<br/>

字符串 连接

```javascript


//两个字符串连接

var str1 = "10";
var str2 = "20";

console.log(str1 + str2);          // str3 == 1020


//一个字符串和其他类型连接

var str1 = "10";
var str2 = 20;

console.log(str1 + str2);          // str3 = 1020


//一个字符串减去不是字符串的类型

var str1 = "10";
var str2 = 20;

console.log(str1 - str2);          
// 浏览器自动 ( 隐式转换 ) 把字符串类型转成了数字类型进行计算


```



<br/>
<hr/>
<br/>



<h4 id="#">false</h4>

* 计算机内部存储

    * true: 1
    
    * false: 0



<br/>
<hr/>
<br/>



<h4 id="#">undefined & null</h4>

* undefined

    * 只声明并没有赋值的变量
    
    * 变量声明时，默认是 undefined
    
* null

    * 如果想变量值为 null, 必须手动设置



<br/>
<hr/>
<br/>



<h4 id="#">复杂数据类型</h4>

* object

* function




<br/>
<hr/>
<br/>



<h4 id="#">类型转换</h4>


* 其他类型转数字类型

    parseInt/parseFloat，能转则转;
    
    Number(), 严格转换;

    * 转整数: parseInt
    
    * 转小数: parseFloat
    
    * 转数字: Number()

<br/>

**整数转换**

```javascript


console.log(persenInt( "10" ))                    //10
console.log(persenInt( "10afrewssa" ))            //10
console.log(persenInt( "g10" ))                   //NaN
console.log(persenInt( "1fsd0" ))                 //1
console.log(persenInt( "10.98" ))                 //10
console.log(persenInt( "10.98dwafag" ))           //10


```
<br/>

**小数转换**

```javascript


console.log(persenFloat( "10" ))                    //10
console.log(persenFloat( "10afrewssa" ))            //10
console.log(persenFloat( "g10" ))                   //NaN
console.log(persenFloat( "1fsd0" ))                 //1
console.log(persenFloat( "10.98" ))                 //10.98
console.log(persenFloat( "10.98dwafag" ))           //10.98


```

<br/>

**数字转换**

```javascript


console.log( Number( "10" ))                    //10
console.log( Number( "10afrewssa" ))            //NaN
console.log( Number( "g10" ))                   //NaN
console.log( Number( "1fsd0" ))                 //NaN
console.log( Number( "10.98" ))                 //10
console.log( Number( "10.98dwafag" ))           //NaN


```

<br/>

* 其他类型转字符串类型

    * .toString() ------> 主动调用转换
    
        * 如果变量有意义, 调用 .toString() 转换
    
    * String() ------> 被调用于 String()
    
        * 如果变量没有意义, 调用 String() 转换 

<br/>

**强行把没有意义的类型 ( null、undefined ) 转换为 字符串**

```javascript


var num = undefined / null;

console.log(String(num));       //undefined / null

//String() 可以把没有意义的类型，转换为 字符串


```

* 其他类型转布尔类型

    * Boolean();
    
        * **0、null、undefined、NaN、""、false** 将会被转换为 false
        
        * 其他数据类型都为 ture
        
```javascript


console.log(Boolean(1));                    //true

console.log(Boolean(0));                    //false

console.log(Boolean(11));                   //true
console.log(Boolean(-10));                  //true    
console.log(Boolean( "哈哈" ));              //true

//有值有意义的都是true

 
console.log(Boolean(""));                   //false
console.log(Boolean(null));                 //false
console.log(Boolean(undefined));            //false

//没有意义或空都是 false


```



<br/>
<hr/>
<br/>



<h4 id="#">操作符</h4>

* 赋值运算符: =

* 算数运算符

    * 加: +
    
    * 减: -
    
    * 乘: *
    
    * 除: \
    
    * 余: %
    
        * 10 % 3 ==> 10/3 余 1 ==> 1
    
    *
        
* 算数运算符表达式

    * 一元运算符
    
        * 加加: ++
        
        * 减减: --
        
        * 先参与运算 ( 必要条件 ), 前加 ++demo; 后加 demo++
        
            * ++demo: 先运算++
            
            * demo++: 第二便在运算++
            
            *
    
    * 二元运算符
    
    * 三元运算符

    * 复合运算符
    
        * 加等于: +=
        
        * 减等于: -=
        
        * 乘等于: *=
        
        * 除等于: /=
        
        * 减等于: %=
        
        *

    * 关系运算符
        
        * 大于: >
        
        * 小于: <
        
        * 大于等于: >=
         
        * 小于等于: <= 
        
        * 等于: == ( 值相等 )
        
        * 等于: === ( 值和类型都相等 )
        
        * 非等于: != ( 值不想等 )
        
        * 等于: !== ( 值与类型都不相等 )
        
        *

    * 逻辑运算符
    
        * && ==> 与 ==> 并且
        
        * || ==> 或 ==> 或者
        
        * != ==> 非 ==> 取反
        
        *

<br/>

运算符计算优先级

1. 括号里的运算优先级最高 ()

2. 一元运算符: ++ -- !

3. 算数运算符: 先 乘除 ( * / ) 后 加减 ( + - )

4. 关系运算符: > >= < <=

5. 相等运算符: == != === !==

6. 逻辑运算符: 先 && 后 ||

7. 赋值运算符: =



<br/>
<hr/>
<br/>

