
<br/>

<h2 id="#">Function</h2>

* 所有函数都是 Function( 系统构造函数 ) 创建出来的实例对象，函数也是对象

    * Function(prototype) -> __proto__ ==> Object -> __proto__ : null
    
        * Function( 系统构造函数 )指向 Object 中的 __proto__( 原型 ): null;
        
        * 

    * eg: 
    
        * ex2  > ex1 ( 解析效率 )
        
        * 
    
        * example 1:
        
            * var f1 = mew Function('num1', 'num2', 'return num1 + num2');
            
            * 
            
        * example 2:
             
            * Function f1(num1, num2) {
            
                * return num1 + num2;
             
            * }
             
            * 
            
        * example 3:
        
            * var f2 = function(num1, num2) {
            
                * return num1 + num2;
            
            * };
        
            *  

封装重复代码，用于后续调用

函数声明时，函数体并不会执行，只要当函数被调用时才会执行，函数一般都用来干一件事，需要使用 动词 + 名次 ( 表示做一件事 tellStory、sayHello 等 )

1. 函数需要先定义，才能调用

2. 函数命名: 

    * 普通函数命名: 遵循小驼峰命名法

        * variable name ==> variableName
        
        * 
    
    * 自定义构造函数: 遵循大驼峰命名 
    
        * variable name ==> VariableName
        
        * 
    
3. 若命名相同的函数名，则后面的函数会覆盖之前的函数

4. 转到定义
 
<br/>

* 声明函数

    * function newFunctionName(param1, param2, ... paramN) {statements}

    * 函数表达式: var fn = function(){};
    
    * 函数的另一种定义方式
    
        * 命名函数: function newFunctionName () {};
        
            * 调用
            
                * 只要重名，无论在哪调用，都会被覆盖
                
                * 
            
            * newFunctionName ();
            
                * 
        
        * 匿名函数: function () {};
        
            * 匿名函数不会存在命名冲突的问题
            
            * 匿名函数声明: 函数表达式
        
                * var newFunctionName = function() {};
                
                    * 把一个函数 赋值 给一个变量 就称为函数表达式
                    
                    * 函数表达式后要加 " ； " 
                    
                    * 赋值函数调用: newFunctionName ();
                    
                    * 
                    
    * if ... else ... 中函数声明，如果在 IE8 中会出问题 => 使用函数表达式避免函数声明( 调用时函数预解析 )在IE8中所产生的问题
    
        * eg: 
        
            * 函数声明，会有预解析( 产生解析提前: 在 IE8 中会有错误产生 )
        
            * if(true) {
            
                * function() {
                
                    * console.log('Chrome、Firefox export);
                
            * } else {
            
                * function() {
                
                    * console.log('IE8 export');
                
                * }
            
            * }
            
            * 函数声明如果放在 if ... else .. 中，IE8 中会有问题

                * 返回: else 的语句值 
                
                * 
                
                *
                
            * 函数表达式( 不会有预解析 )
            
            * var fn;
            
            * if(true) {
            
                * fn = function(){
                
                    * console.log('Chrome、Firefox、IE8 export');
                
                * }
            
            * } else {
            
                * fn = function(){
                
                    * console.log('it's ok');
                
                * }
            
            * }
            
            * fn();
            
            * 宁愿用函数表达式，避免 IE8 中函数声明时预解析所产生的问题
            
            *
                
        * 调用
        
            * 函数自调用: 声明时直接调用，**但是只能用一次**
            
                * (function() {[statuments]} ();
                
                * 
            
            * 匿名函数不可以直接调用
            
                *             

* 调用函数

    * functionName(realParam1, realParam2, ... realParamN);

    * 不同的调用方式
    
        * 普通函数: 通过函数名直接调用
        
            * eg:
            
                * function f1(){
                
                    * console.log();
                
                * }
                
                * f1();
                
                * 
        
        * 构造函数: 通过 new 创建实例对象调用
        
            * eg:
            
                * function F1(){
                
                    * console.log(')
                
                * }
                
                * var fn = new F1();
                
                * 通过 new 创建实例函数调用

                *
        
        * 对象的方法: 通过实例对象 '点' 方法调用
        
            * eg: 
            
                * function Person(){
                
                    * this.play = function(){
                
                        * console.log('play game');
                    
                    *  };
                
                * }
                
                * var per = new Person();
                
                * per.play();
                
                * 
                
        * 数组中的函数调用
        
            * eg: 
            
                * var arr = [
                
                    * function(){
                    
                        *  console.log('box1');
                    
                    * },  
                    
                    * var arr = [
                    
                        * function(){
                        
                            *  console.log('box2');
                        
                        * }, 
                         
                    * var arr = [
                    
                        * function(){
                        
                            *  console.log('box3');
                        
                        * },     
                
                * ];
                
                * 
                
                * 回调函数: 函数作为参数使用
                
                * arr.forEach(function(ele){
                
                    * ele();
                
                * );
                
                * 
                
                * 
            
* 函数中 this 的指向

    * 普通函数中 this 指向 window 
    
        * eg:
        
            * function f1() {
            
                * console.log(this); ==> window
            
            * }
            
            * window.f1();
            
            * 
            
            * BOM: 浏览器的顶级对象是 window，浏览器中所有的东西都是 window 的
            
            * 
    
    * 定时器中的 this 指向 window
    
        * eg:
        
            * window.setInterval(function(){
            
                * console.log(this); ==> window
                
            * } ,1000)
            
            * 
    
    * 构造函数中的 this 指向 实例对象
    
        * eg: 
    
            * function Person(){
            
                * console.log(this); ==> Person
                
                * this.sayHi = function() {
                
                    *
                
                    * 对象方法中的 this 指向 当前的实例对象 
                    
                    * console.log(this); ==> Person
                
                * }
            
            * } 
            
            * 
            
            * var per = new Person();
            
            * console.log(per); ==> Person
            
            * 
    
    * 原型方法中的 this 指向 实例对象
    
        * eg: 
        
            * Person.prototype.eat = function(){
            
                * console.log(this);
                
                * this.sayHi = function() {
                                
                    * console.log(this); ==> Person
                
                * }

            * };
            
            * var per = new Person();
            
            * console.log(per);
            
            * per.sayHi();
            
            *
            
* 函数是对象，对象不一定是函数

    * 函数
    
        * prototype
        
        *
        
    * 对象
    
        * __proto__
        
        * 
        
    * 函数 && 对象
    
        * prototype
        
        * __proto__
        
        * 
            
* 参数

    * 形参 param
    
        在声明一个函数时，为了函数的功能更加灵活，有些值固定不了( 参数: 这个参数没有具体的值，仅起占位符的作用 )
    
        * 函数定义时，括号中的 "变量" 为形参
        
        * 
    
    * 实参 real param
    
        如果函数声明时设了 形参，那么函数调用时就需要对应的参数
    
        * 函数在调用时，括号中的 "变量" 或 "值" 为实参
        
        * 
        
    * 形参和实参的个数可以不同
    
        * 依次从左到右对应参数
        
        * 
    
    * 传参
    
        * 实参 会依次对应 形参 
        
        * 
    
* 返回值: 

    * return
    
        只返回值，不输出到控制台
        
        可直接调用函数函数，进行运算( 前提必须有返回值 )
    
        * return varName;
        
        * 
        
    * 是否有返回值
    
        * 函数中有 return，则这个函数 有返回值
        
        * 函数中没有 return，则函这个函数 没有返回值
        
        * 函数中有 return，但后面没有内容，则这个函数 没有明确返回值
        
        * 如果函数 没有明确返回值( 没有返回值 )，函数调用了，则此时返回值为 undefined
        
        * 函数作为返回值使用
        
            * function myFunction () { [statements] return newFunction() }
            
            * 

    * console.log(functionName);
    
        * 如果只打印函数数名，则输出 函数的代码
        
        * 
        
    * return 下面的代码不会再执行
    
    * 
    
* arguments

    arguments 对象是比较特别的对象，实际上是当前函数的一个内置属性
    
    arguments 对象存储了专递的所有参数

    * 对象、伪数组
    
    * 用于记录形参
    
    * arguments.length
    
        * 调用形参的长度
        
        * 
        
    * arguments[0 ~ length-1];
    
        * 实参值: 根据位置输出
        
        * 
    
* 函数的数据类型: 

    * typeof function => function
    
    * 
    
* JS 中的 匿名函数、回掉函数、自调用函数

    * 匿名函数
    
        * 没有名字的函数就是 匿名函数
    
        * eg: 
        
            * function () {};
            
            * 
        
        * 用途
        
            * 可以把 匿名函数作为一个 参数传递给 其他函数
            
            * 可以定义一个 匿名函数并 立即执行它
            
            * 
    
    * 回掉函数
    
        * 函数作为参数使用时，被称为 回调函数
        
            * 因为函数就跟那些可以分配给变量的数据一样，可以 定义、删除、拷贝，所以也可以饿作为参数传递给函数
            
        * eg: 
        
            * function fn1() { return 1; };
            
            * function fn2() { return 2; };
            
            * function sum( a, b ) { return a() + b(); };
            
            * 
            
            * 函数作为参
            
                * function sum( fn1, fn2 );
            
            * 匿名函数作为参数
            
                * function sum( fn1, function () { return 1; } );
            
                * 
        
    * 自调用函数
    
        * ES6 之前 JS 原生不提供块级作用域，所以只能用函数作用域模拟了，自调用函数 主要是用于隔离作用域
    
        * 定义后马上调用，被称为 自调用函数
        
        * eg:
        
            * (function () {})();
            
            * (function (){} () );
            
            * 
        
        * 用途
        
            * 自调用函数的匿名函数的理由是做一些工作但不需要创建一些全局的变量
         
            * 缺点: 
            
                * 不能调用这个函数 2 次( 除非把他放在一个饿循环或者其他函数里面 ) 

                * 这使得自调用函数 非常合适做一次性或初始化性质的工作
                
                * 
    
* 回掉函数: 函数作为参数使用

    * 函数作为参数使用时，被称为回调函数
    
    * function myFunction (newFunction) {};
    
    * 
    
   

<br/>
<hr/>
<br/>
