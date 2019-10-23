
<br/>

<h2 id="#">Function</h2>

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

    * 
    
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
                
            * 调用
            
                * 函数自调用: 声明时直接调用，**但是只能用一次**
                
                    * (function() {[statments]} ();
                    
                    * 
                
                * 匿名函数不可以直接调用
                
                    *             

* 调用函数

    * functionName(realParam1, realParam2, ... realParamN);

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
    
* 回掉函数: 函数作为参数使用

    * 函数作为参数使用时，被称为回调函数
    
    * function myFunction (newFunction) {};
    
    * 
   
   

<br/>
<hr/>
<br/>
