<h2 id="#">Object</h2>

JS 不是面向对象的语言，但是可以模拟面向对象的思想

JS 是一门 " 基于对象 " 的语言，JS 中已有对象( 直接调用 )
    
<br/>

* 面向过程( Process Oriented )

    * 分析问题 
    
    * -> 问题分解为步骤: 逐步任务 
    
    * -> 逐步执行: 
    
        * 顺序
        
        * 选择
        
        * 重复
        
        * 
        
* 优点

    * 效率高
    
    * 消耗内存多
    
    * 
    
* 缺点

    * 重用率低
    
        需深入思考，耗费精力
    
    * 扩展差
    
    * 后期维护难度大
    
    * 

* 面向对象( Object Oriented ) == 结构化编程

    * 分析问题 
    
    * -> 问题分解为对象: 数据操作( 抽象概念 )
    
    * -> 数据操作
    
        * 封装( JS 中没有权限 )
        
            * 介绍: 
            
                * 利用 " 抽象数据类型 " 将 " 数据 " 和 " 基于数据的操作 " 封装在一起，使其构成一个不可分割的独立实体
                
                * 数据被保护在 " 抽象数据类型 " 的内部，尽可能的隐藏内部的细节，只保留一些对外接口使之与外部发生联系
                
                * 系统其他对象只能通过包裹在数据外部的已经授权的操作来与这个封装的对象进行 " 交流 " 和 " 交互 "
                
                * 用户无需知道对象内部的细节，但可以通过该对象对外的接口来访问对象
                
                * 一个对象他所 " 封装的是自己的 ' 属性 ' 和 ' 方法 ' "，所以它不需要依赖其他对象就可以完成自己的操作
                
                * 
                
            * 目的: 
            
                * 增强安全性和简化编程
                
                * 使用者不必了解具体实现细节
                
                * 只需通过 " 外部接口 " 和 " 一定的访问权限 " 即可使用
                
                * 
                
        * 继承( JS 中没有类，没有继承 )
        
            * 介绍
            
                * 当两个类具有相同的 特征( 属性 ) 和 行为( 方法 ) 时，抽取相同的部分放到一个类中作为父类
                
                * 其他两个类，继承这个父类，继承后 " 子类 " 拥有 " 父类 " 的属性和方法
                
                * 但父类的私有属性和构造方法不被继承，子类可以写自己特有的属性和方法( 扩展 )
                
                * ...
                
            * 目的
                        
                * 实现代码复用
        
        * 多态( JS 中没有多态 )
        
            * 概念
            
                * 相同的事物
                
                * 调用其相同的方法
                
                * 但表现行为却不同
                
                * 
        
        * 抽象性
        
        * 
    
* 优点

    * 结构清晰
    
        * 程序的 " 模块化 " 和 " 结构化 " 清晰，符合人为思想方式
        
        * 
        
    * 异于扩展
    
        * 代码重用率高
        
        * 可继承、可覆盖
        
        * 代码 高聚集、低耦合
        
        * 
    
    * 易于维护
    
        * 低耦合的特点有利于减少程序的后期维护工作量
        
        * 
    
* 缺点

    * 开销大
    
    * 性能低
    
    * 
    


<br/>
<hr/>
<br/>



<h3 id="#">object</h3>

* 有属性和方法，特指某个事物

* 一组无序属性的集合，属性的值可以是任意类型

    * 属性( Property )
    
    * 方法( Method )
    
    * 



<br/>
<hr/>
<br/>



<h3 id="#">创建对象</h3>

* Creation Method: 

    * 调用系统构造函数创建对象 
    
    * 自定义构造函数创建对象( 结合第一种和需求通过工厂模式创建对象 )
    
        * 普通函数命名
        
            * 主要用于调用函数
        
        * 自定义函数命名
        
            * 大驼峰命名( 首字母大写 ) 
            
            * variable name ==> VariableName
            
            * 用于创建对象
            
    * 字面量的方式创建对象
    
        * var obj = {parameter1, parameter2, ... parameterN};
    
        * 缺陷: 
        
            * 一次性的对象
            
                * 修改数据对象方法 1: 直接在源码上更改对象的值
                
                * 修改数据对象方法 2: object.objectName = objectNewValue;
        
        * 
        
    * 点语法
    
        * object.objectName = objectValue;
        
        * object.objectName = Function ();
        
        * 
        
    * 设置和获取属性的另一种写法
    
        * 错误写法: var obj = new Person();
        
            * 系统并预先自定义的函数对象 new Person(); 类型的对象( 需要提前声明才可以使用 )
            
        * newVarName["objectPropertyName"] = "objectPropertyValue";
          
        * console.log(newVarName["objectPropertyName"]);
          
        * newVarName["objectMethodName"]();

* Json 格式的数据

    * Json 格式的数据: 一般都是成对出现的，是键值对( "键": "值" )
    
    *
    
    * 
    
    * 
    
* JS 是一门什么样的语言

    * 解释性语言
    
        * 执行一行一行，解释一行
    
    * 脚本语言
        
        * 不需要编译，直接执行
        
    * 弱类型语言，
    
        * 声明变量都用 "var"
    
    * 基于对象的语言
    
        * JS 中已有对象，直接调用
    
    * 动态类型的语言
        
        * 只有执行到变量，才能获取变量等属性
    
            * 代码( 变量 ) 只有执行到这个位置的时候，才知道变量中存储的是什么
            
            * 如果是对象，就有对象的属性和方法
            
            * 如果是变量就是变量的作用
        
        * 对象本没有什么，如果 "." 了( 调用点语法 )
        
            * 可以为对象添加属性或者方法
            
            * 
    
* Key Word: 

    * this
    
    * 执行上下文( global，function or eval )的属性，在非严格模式下，始终是对对象的引用，在严格模式下可以是任何值

    * 
    
* 获取对象变量类型: 

    * instanceof
    
    * 
    
    * Return value: 
    
        * True
        
            * ==> object
        
        * False 
        
            * ==> no object
        
        * 
        
* 一次性创建多个对象: 

    * 把创建函数的代码封装在 函数中
    
    * 

* 内存空间

    * 堆 stack( 原始数据 )
    
        * 原始数据不能更改
    
    * 栈 heap( 引用值 )
    
        * 引用值的地址是原始值的内存地址编号
        
        *

 | stack( 原始值 )                     | heap( 引用值 )
------------------------------------- | --------------------------------------
 | 存储基础数据类型                     | 存储引用数据类型
 | 按值访问                            | 按引用访问         
 | 存储的值大小固定                     | 存储的值大小不定，可动态调整 
 | 由系统自动分配内存空间                | 由程序猿通过代码进行分配
 | 主要用来执行程序                     | 主要用来存放对象
 | 空间小、运行效率高                   | 空间大、但是运行效率相对较慢
 | 先进后出( first in, last out )      | 无序存储，可根据引用直接获取
      
<br/>

构造函数方式创建对象

```javascript


//Syntax
//对象初始化器 ( Object initialiser ) 或 对象 字面量 ( literal )
// { [ nameValuePair1[,nameValuePair2 [, ... nameValuePairN ] ] ] }


//以构造函数形式来调用
new Object([value]);


//nameValuePairl1, nameValuePairl2, ... nameValuePairlN
//成对的名称 ( 字符串 ) 与 值 ( 任何值 )，其中名称 通过 " 冒号 " 与 " 值 " 分隔


```

<br/>

```javascript


//有一条叫大黄的黄色小狗，今年 3 岁，250 斤的重量走路很慢，喜欢吃大骨头

var smallDog = new Object();

smallDog.name  = "大黄";
smallDog.age = 3;
smallDog.color = "yellow";
smallDog.weight = "250";


smallDog.eat = function () {
    console.log("I like to eat big bones");
};
smallDog.walk = function () {
    console.log("I am very slow");
};


smallDog.eat();
smallDog.walk();


```

<br/>

```javascript


//创建一个手机对象，有手即型号、手机颜色、可以打电话、发短信

var phone = new Object();

phone.size = "iphone6";
phone.color = "black";

phone.call = function () {
    console.log("Call me");
};
phone.msg = function () {
    console.log("Send a message to me");
};

phone.call();
phone.msg();


```

<br/>

工厂模式创建对象

```javascript


//Custom constructor creation object
function createObject(name, age) {      //step - 1 add name and age variable

    //Create a new object
    var obj = new Object();


    //Add property

    //Step - 1
    //obj.name = "alpha";               //add name variable
    //obj.age = "18";                   //add age variable

    //Step - 2
    //name and age is pair
    obj.name = name;
    obj.age = age;


    //Add method
    obj.sayHi = function () {
        console.log("Hello , My name is " + this.name + ", " + this.age + " year old.");
    };
    return obj;
}


//批量生产对象, 对象名称相同，值不同 
var per1 = createObject("beta", 20);
var per2 = createObject("omega", 18);

per1.sayHi();
per2.sayHi();


```

<br/>

自定义方式创建对象

```javascript




```