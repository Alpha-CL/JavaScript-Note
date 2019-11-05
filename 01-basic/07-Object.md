<h2 id="#">Object</h2>

JS 不是面向对象的语言，但是可以模拟面向对象的思想

JS 是一门 " 基于对象 " 的语言，JS 中已有对象( 直接调用 )

面向对象的编程语言中有类( class: 一种特殊的数据类型 ) 的概念，但是 JS 不是面向对象的语言

JS 可以模拟面向对象的思想编程，JS 中会通过构造函数模拟类的概念( class )
    
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
    
        * 需深入思考，耗费精力
        
        * 
    
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
        
            * 继承是一种关系关系，类( class ) 与类之间的关系
            
                * 父类级别 和 类级别的关系
                
                * 
            
            * JS 中没有类，但是可以通过构造函数模拟类，通过原型实现继承
            
            * 继承是为了数据共享，JS 中继承也是为了实现数据共享
            
            * 原型的作用
            
                * 数据共享，节省内存空间
                
                * 实现继承
                
                * 
        
            * 介绍
            
                * 当两个类具有相同的 特征( 属性 ) 和 行为( 方法 ) 时，抽取相同的部分放到一个类中作为父类
                
                * 其他两个类，继承这个父类，继承后 " 子类 " 拥有 " 父类 " 的属性和方法
                
                * 但父类的私有属性和构造方法不被继承，子类可以写自己特有的属性和方法( 扩展 )
                
                * ...
                
                * 
                
            * 目的
                        
                * 实现代码复用
                
                * 
        
        * 多态( JS 中没有多态 )
        
            * 一个对象有不同的行为，或同一个行为针对不同的对象，产生不同的结果
            
            * 想要多态，就要现有 继承，JS 中可以模拟多态，但是不会去使用( 会占用大量内存空间 )，也不会模拟
            
            * 
        
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

* 一组无序属性的集合( '键': '值' 对 )，属性的值可以是任意类型

    * 属性( Property )
    
    * 方法( Method )
    
    * 调用( Invoking )
    
    * 
    
* 对象分类
    
    * 实例对象: 通过构造函数创建出来，实例化的对象
    
        * 调用: 必须通过实例对象调用
        
        * 
    
    * 静态对象: 不需要创建，直接就是一个对象，方法( 静态方法 ) 直接通过这个对象名称调用   
    
        * 调用: 必须通过大写的对象调用
        
        * 

<br/>

* 自定义构造函数创建对象原理

    构造函数，是一种特的函数。主要用来创建对象时初始化对象( 及为对象成员变量赋予初始值 )
    
    总与 new 运算符一起使用在创建对象的语句中
    
    1. 构造函数用于创建一类对象( 首字母要大写 )
    
    2. 构造函数要和 new 一起使用才有意义

    * new 的执行过程( new 的时候，系统的运行原理 )
    
        * 自定义构造函数创建对象 -> 调用时
        
            * 创建对象( 实例化对象 )，并初始化对象
            
            * -> 新建一个变量( 用于存储 "新的对象函数" ) ==> var newVariable;
            
            * -> 存储 "新的对象函数( 必须用 new )" ==> var newVariable = new myDefinedFunctionObject(parament1, parament2, pararmentN);
            
                * -> "新的对象函数" === "调用函数的副本"
            
                * -> 必须用 "new" 新建调用函数副本
                
                * -> 必须传参，否则相当于没有改变调用函数
                
                * 

            * 如何调用自定义构造函数对象的属性和方法
            
                * -> 调用函数属性 ==> newVariable.Property
                
                    * console.log(newVariable.property);
                    
                    *
                
                * -> 调用函数方法 ==> newVariable.Method
                
                    * newVariable.Method();
                    
                    * 

    1. 开辟空间( 申请一块已有的空间 )，存储创建的新对象
    
    2. 把 "this" 设置为 "当前的对象"
    
    3. 设置 this( 当前对象 )的 "属性" 和 "方法" 和 "相对应的值"
    
    4. 返回 this( 当前对象 )，及它所包含的 "属性" 和 "方法" 
    
    
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
<hr/>
<br/>



<h3 id="#">创建对象( 实例化对象 )</h3>

* 创建对象的三种方法:

    * 示例对比
    
        * 字面量的方式创建对象
        
            * var obj1 = {
            
                * name: alpha,
                
                * age: 18;
                
                * sex: male,
                
                * sayHi = function(){
                
                    * console.log('just do it')
                
                * }
                
            * };
            
            * 

        * 通过调用系统的构造函数创建对象 new Object()

            * var obj2 = new Object(
            
                * name: alpha,
                                
                * age: 18;
                    
                * sex: male;
                
                * sayHi = function(){
                
                    * console.log('just so so');
                
                * }
            
            * );
            
            * 

        * 自定义构造函数创建对象

            * var obj2 = new MyDefinedFunction(){
            
                * this.name = name;
                
                * this.age = age;
                
                * this.sex = sex;
                
                * this.sayHi = function(name, age, sex){
                
                    * console.log('just i love you');
                
                * }
            
            * };
            
            * var myFn = new MyDefinedFunction(alpha, '18', 'male');
            
            * myFn.sayHi();
            
            * 
            
    * 1、 调用系统构造函数创建对象 ==> var obj = new Object();
    
        * obj == objectName
    
        * var obj = new Object();
        
            * add property
            
                * obj.propertyName = "propertyValue"; ==> obj.name = "alpha";
            
                * obj.propertyName = "propertyValue"; ==> obj.age = "18";
                
                * 
            
            * add method
                
                * obj.methodName = function() { method statements };
                
                    * ==> obj.play = function() {"I like playing basketball"};
                    
                    * 
                
                * obj.methodName = function() { method statements };
                
                    * ==> obj.eat = function() {"I like to drink milk"};
                
                    * 
                
            * 在当前对象的方法中，可以调用属性
            
            * 在当前对象的方法中，可以使用 "this" 代替当情 "objectName"
                
                * obj.sayHi() {"My name is " + obj.name}; ==> "My name is alpha"
                
                * 使用 keyword ==> " this " replace "objectName"
                
                    * obj.sayHi() {"My name is " + this.name} ==> "My name is alpha"
                    
                    * 
                
            * invoking
            
                * invoking property
                
                * ==> objectName.objectProperty
                
                    * console.log(obj.name); ==> expected output: "alpha"
                    
                    * console.log(obj.aeg); ==> expected output: "18"
                    
                    * 
                
                * invoking method 
                
                * ==> objectName.methodProperty()
                
                    * console.log(obj.play()); ==> expected output: "I like playing basketball"
                    
                    * console.log(obj.eatt()); ==> expected output: "I like to drink milk"
                    
                    *
                    
            * instanceof( 判断对象类型 )
            
            * ==> objectName instanceof typeName;
            
                * true: It's this type
                
                * false：Not this type
                
                *
            
    * 2、自定义构造函数创建对象( 结合第一种和需求通过工厂模式创建对象 ) ==> var obj = new myDefinedObjectFunction();
    
        * 工厂模式创建对象: 批量产出同类型 函数
        
            * var obj = new Object(); ==> 必须加 ":"，属于变量赋值
            
            * 
        
            * 普通函数命名
                
                * 小驼峰命名命名( 首字母小写，后面所有单词首字母大写 )
                
                    * variable name ==> variableName
                    
                    * 
            
                * 主要用于调用函数
                
                    * 
            
            * 自定义函数命名
            
                * 大驼峰命名( 首字母大写 ) 
                
                    * variable name ==> VariableName
                    
                    * 
                
                * 用于创建对象
                
                    * 
                
            * "系统构造函数" 和 "自定义构造函数的区别"
            
                * "系统构造函数" 和 "自定义构造函数" 的调用方法相同 !
            
                * 书写区别( 外观 )
            
                    * 系统构造函数: "首字母小写"( 遵循小驼峰命名 )
                
                    * 自定义构造函数函数: "首字母大写"( 大驼峰命名 )
                    
                    * 
                    
                * 作用区别
                
                    * 系统构造函数: 主要用于 "函数的调用"
                    
                    * 自定义构造函数: 主要用于 "创建对象"
                    
                    * 
            
    * 3、字面量的方式创建对象 ==> var obj = {}
    
        * var obj = {parameter1, parameter2, ... parameterN};
        
        * 注意: 添加对象方法语句后，不用加 ";" ( !important )
    
        * 缺陷: 
        
            * 一次性的对象( 修改数据只能在原码上修改 )
            
                * 修改数据对象方法 1: 直接在源码上更改对象的值
                
                * 修改数据对象方法 2: object.objectName = objectNewValue;
                
                * 
                
    * "工厂模式" 和 "自定义构造函数" 的 共同点 和 区别，及 实例化对象
    
        * 共同点
        
            * 都是函数
            
            * 都可以创建对象
            
            * 都可以传入参数
            
            * 
        
        * 区别
    
            * 工厂模式
            
                * function createObject(name, age) {
                
                    * var obj = new object();
                    
                    * obj.name = name;
                    
                    * obj.age = age;
                    
                    * obj.sayHi = function() {
                    
                        * console.log('hello world');
                    
                        *  };
                    
                    * return obj;
                * }
                
                * var fn = createObject('alpha', 18);
            
                    * 函数名小写
                    
                    * 有 new，有返回值
                    
                    * new 之后的对象是当前的对象
                    
                    * 直接调用函数就可以创建对象
    
                    * 
            
            * 自定义构造函数
            
                * function  Person(name, age) {
                
                    * this.name = name;
                    
                    * this.age = age;
                    
                    * this.sayHi = function() {
                    
                        * console.log('hello world);
                        
                        * };
                * }
                
                * var fn = new Person('alpha', 18);
            
                    * 函数名大写
                    
                    * 没有 new，没有返回值 
                    
                    * this 代表当前对象
                    
                    * 通过 new 的方式来创建对象
    
                    * 

        * 实例化对象
        
            * 实例化对象的同时，对属性进行初始化
            
            * 
    
    * 对象获取属性值的写法
    
        * objectName.objectProperty
        
        * objectName.["objectProperty"]
        
        * 
        
    * 点语法( 没有什么点什么，点之后代表声明并没有赋值 )
    
        * object.objectName = objectValue;
        
        * object.objectName = Function ();
        
        * for ... in ... 循环
        
            * for (var variableName in jsonName) { 
            
                * "jsonDataName": "jsonDataValue", "jsonDataName": "jsonDataValue"
                
                * }
            
            * console.log(variableName);
            
            * console.log(jsonName[key]);
            
            * console.log(variableName + ": " + JasonName[variable]);
            
            * 
                
    * 设置和获取属性的另一种写法
    
        * 错误写法: var obj = new Person();
        
            * 系统并预先自定义的函数对象 new Person(); 类型的对象( 需要提前声明才可以使用 )
            
            * 
            
        * newVarName["objectPropertyName"] = "objectPropertyValue";
          
        * console.log(newVarName["objectPropertyName"]);
          
        * newVarName["objectMethodName"] ();
        
        * 
        
* JS 一门什么样的语言

    * 解释性语言
    
    * 脚本语言
    
    * 弱类型语言: 声明任何变量都用 var
    
    * 基于对象的语言
    
    * 动态类型的语言
    
        * var num = XXX； 
        
            * 只有当代码执行到 "XXX" 位置的时候，才知道这个变量中存储的是什么
            
            * 
        
        * 对象没有什么
        
            * 只要点了，通过点语法，那么就可以为对象添加属性或方法
            
            * 

* Json 格式的数据( JavaScript Object Notation )  

    * 特点

        * var "key" = "word";

        * Json 数据实际上是格式化后的一组 "字符串数据"
    
        * Json 数据必须用双引号包裹 ==> "JsonCode" = "JsonCode"

        * Json 格式的数据: 一般都是成对出现的，是键值对( "键": "值" )
    
        * Json 也是一个对象、数据是 "成对的"
    
        * 不能用遍历对象( Json 数据是无序的 )
        
        * 
    
    * 调用
    
        * 
        
        *
        
        * 
    
* 数据类型

    * 原始数据类型: number、string、boolean、undefined、null、object
    
        * 基本类型( 简单类型 )、值类型
        
            * 值类型之间传递的是值
            
                * 值类型的 值是唯一的，不可更改的
                
                * 值类型作为函数的参数，传递的是值
                
                * 
        
            * number、string、boolean
            
            * 
            
        * 复杂类型( 引用类型 )
        
            * 引用类型之间 传递的是 地址
            
                * 多个地址可同时指向一个引用  
                
                * 应用类型作为函数的参数，传递的是地址 
                
                * 
        
            * object
            
            * 
    
        * 空类型
        
            * undefined、null
            
            * 
            
    * 存储位置( steak、heap )
    
        last in first out
    
        * 栈( steak )
        
            * 值类型

            * 引用类型的地址 ==> 指向 ==> 引用类型的值
        
        * 堆( heap )
        
            * 引用类型的值 
            
            *                                         

<br/>

    模拟初始化数据存储
    
    |     stack          | heap             |
    -------------------- | ---------------- | --
    | 1011   |   text    | 1001   | text    |
    | 1010   |   text    | 1002	  | text    |
    | 1009   |   text    | 1003	  | text    |
    | 1008   |   text    | 1004	  | text    |
    | 1007   |   text    | 1005	  | text    |
    | 1006   |   text    | 1006	  | text    |
    | 1005   |   text    | 1007	  | text    |
    | 1004   |   text    | 1008	  | text    |
    | 1003   |   text    | 1009	  | text    |
    | 1002   |   text    | 1010	  | text    |
    | 1001   |   text    | 1011	  | text    |
                                  
<br/>

    模拟数据存储原理，及逻辑关系

     |         stack         |           heap           | 
     | stkName   | stkValue  | hpAdress   | hpContent   |  
    ------------ | --------- | ---------- | ----------- | --
     |           |           |            |             |  
     | varName1  | number    | objadress  | object      |  
     | varName2  | string    | 1002	      | text        |  
     | varName3  | boolean   | 1003	      | text        |  
     | varName4  | objadress | 1004	      | text        |  
     | 1007      | text      | 1005	      | text        |  
     | 1006      | text      | 1006	      | text        |  
     | 1005      | text      | 1007	      | text        |  
     | 1004      | text      | 1008	      | text        |  
     | 1003      | text      | 1009	      | text        |  
     | 1002      | text      | 1010	      | text        |  
     | 1001      | text      | 1011	      | text        |        
                                                       
<br/>

* KeyWord: 

    * this
    
    * 执行上下文( global，function or eval )的属性，在非严格模式下，始终是对对象的引用，在严格模式下可以是任何值

        1. 函数在定义的时候 this 是不确定的，只有在他调用的时候才可以确定
        
        2. 一般函数直接执行，内部 this 指向 全局 window
        
        3. 函数作为一个对象的方法，被该对象所调用，那么 this 指向的是该对象
        
        4. 构造函数中的 this 其实是一个隐式对象，类似一个初始化的模型，所有方法和属性都挂载到了这个隐式对象上，后续通过 new 关键字来调用，从而实现 实例化
    
* 获取对象变量类型: 

    * instanceof
    
        * 系统对象构造函数: 无法区分 对象是什么类型类型( 所有返回值都为: object )
        
        * 自定义构造函数对象: 可以区分对象类型
        
        *
    
    * Return value: 
    
        * True
        
            * ==> object
        
        * False 
        
            * ==> no object
        
            * 
    
    * 系统内置对象
        
        * console.log(Array instanceof Object);
    
        * true( 系统内置对象 )
        
        * 
        
    * 自定义对象
    
        * var obj = {};
        
        * console.log(obj instanceof Object);
        
        * true( 自定义对象 )
        
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
      
<br/>

构造函数方式创建对象

```javascript


//Syntax
//对象初始化器 ( Object initialiser ) 或 对象 字面量 ( literal )
// { [ nameValuePair1[,nameValuePair2 [, ... nameValuePairN ] ] ] }


//以构造函数形式来调用
// new Object([value]);


//nameValuePairl1, nameValuePairl2, ... nameValuePairlN
//成对的名称 ( 字符串 ) 与 值 ( 任何值 )，其中名称 通过 " 冒号 " 与 " 值 " 分隔


```



















