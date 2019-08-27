<h4 id="#">变量</h4>

在 JavaScript 中，使用 "变量" 来作为值的符号名

变量的名字又叫做 "标识符"，其需要遵守一定的规则

* 声明变量

    * 声明变量未赋值: 
    
        * var 和 let 变量只声明不赋值: 称为 "变量声明"
        
        * 未赋值情况: 返回 undefined

    * var( 全局、局部、声明提升 )
    
        * 声明一个变量，可选初始化一个值
        
        * var varName = varValue;
        
            * var 可以用于声明 "全局变量" 和 "局部变量"
            
        * varName = varValue;( 未声明 )
        
            * 在全局作用域中: 无法使为声明的变量
            
            * 在函数作用域中: 这种情况情况，会生成一个全局变量 
    
    * let( 函数体内、局部 )
    
        * 声明一个块作用域的 "局部变量"，可选初始化一个值
    
    * const( 不可更改 )
    
        * 声明一个块作用域的 "只读常量"
        
        * 常量不可以通过重新赋值改变其值，也不可以在代码运行时重新声明，它必须被初始化为某个值
        
        * 在同一作用域中，不能使用与变量名或函数名相同的名字命名常量
        
* 变量作用域

    * 全局作用域( 全局对象: window.varName )
    
        * 全局变量: 可以被当前文档中的任何其他代码所访问
        
        * window.varName 可以设置和访问全局变量
    
    * 局部作用域
    
        * 局部变量: 只能在当前函数的内部访问
        
    * 块级作用域
    
        * ECMAScript 6 之前的 JavaSCript 没有 "语句块" 作用域
        
        * 语句块中声明的变量将称为语句块所在函数( 或全局作用域 ) 的局部变量

* 变量及函数提升
    
    * 变量提升
    
        * 只有 "var" 可以变量提升, let 和 const 不能变量提升
    
        * 只提升变量声明 var = varName;
        
        * 不提升: varName = varValue; ==> 因只提升声明，所以返回 undefined       
        
    * 函数提升
    
        * 只有函数声明会被提升到顶部，而函数表达式不会被提升
    
        * 提升函数体在函数调用之前

* 操作的数据都是在内存中操作 

* 字面量

    * 在源代码中一个固定值的表示法
    
    * 数值字面量：8, 9, 10
    
    * 字符串字面量：'黑马程序员', "大前端"
    
    * 布尔字面量：true，false

* JS 中变量的类型 ( number、boolean、string、undefined、null、object )

* JS 中声明变量都用 **var**( 弱数据语言 )，数据应该有对应的数据类型

* JS 中字符串类型的值都用 单引号 或 双引号

* " + " " - " 等运算

    * console.log(+str); ==>        // 取正
    
    *  console.log(-str); ==>		// 取负



<br/>
<hr/>
<br/>



**总结**

* 变量作用: 用来操作数据( 可以存储，可以读取 )

* 变量声明: 没有赋值

* var 变量名: 声明存储位置( 变量为原始值: 存储于 " 栈( staek ) 中 )

* var variableName = variableValue；

<br/>

**基本代码规范**

* JS 中声明变量都用 " var "

* JS 中的每一行代码结束都应该有: 分号" ; "

* JS 中的大小写是区分的: var N = 10; var n = 10; ( 大写 "N" 和 小写 "n"，此时是两个变量 )

* JS 中的字符串可以用 单引号 或 双引号

<br/>

**变量名命名规范**

1. 变量的名字要有意义

2. 变量名有一定的规范: 一般以 字母、" $ "、下划线开头，中间 或 后面可以有 " $ "、字符、数字

3. 不能以 "关键字" 和 "保留字" 命名，例如: for、while...

4. 变量名一般都是小写( 有意义 ！important )

5. 驼峰命名法: 如果有多个单词组合命名 ( 常用小驼峰命名 )

    * 小驼峰命名 ( backgroundColor ): 第一个单词的首字母小写，后面的单词的首字母全部大写
    
    * 大驼峰命名 ( BackgroundColor ): 每一个单词的首字母都大写



<br/>
<hr/>
<br/>



<h4 id="#">数据类型</h4>

* 原始值( 存放于栈( staek ) 中 ): number、string、boolean、null、undefined、symbol

    * number: 数字类型
    
        * integer: 整数
        
        * float: 浮点型小数
        
        * 
    
    * string: 字符串类型
    
        * 必须用 单引号 或者 双引号 括号起来
        
        * 
    
    * boolean: 布尔类型
    
        * 只有两个值: 
        
            * true( 真 1 )
            
            * false( 假 0 )
    
        * 大多判断都是用 boolean 类型判断
    
            * 除了这六个类型转换为 false ，其他都是 true
        
            * 0、""、null、undefined、NaN、false
            
    * null: 空类型
    
        * 一个对象只有想为空，此时可以赋值为 null
    
    * undefined: 未来定义类型
    
        * 变量声明未赋值，结果为 undefined
        
        * 函数没有明确返回值，如果接收了，结果也是 undefined
        
        * 如果一个变量的结果是 undefined 和一个数字进行计算，结果是 Not a Number ( NaN ), 也没有意义
        
            * var num;
            
            * console.log(num + 10); ==> //NaN
        
    * symbol: 代表类型
    
        * 在 ECMAScript 6 中新添加的类型
        
        * 一种实例是唯一且不可改变的数据类型
        
* 引用值( 存放于堆( heap ) 中 ): array、object、function、date

    * 引用值的复杂数据类型存储在 heap 中，地址存放在 staek 中

    * array: 数组类型

    * object: 对象类型

    * function: 函数类型
    
    * date: 日期类型
    
    * 



<br/>
<hr/>
<br/>



<h4 id="#">获取数据类型: typeof</h4>

JavaScript是一种动态类型语言( dynamically typed language )

这意味着你在声明变量时可以不必指定数据类型

而数据类型会在代码执行时会根据需要自动转换

console.log(typeof varName);

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

