<h3 id="#">作用域</h3>

变量 和 函数的使用范围

* 变量

    * 全局变量 ( 不能被删除 )
        
        全局变量在任何位置都可以调用的范围
        
        * 除函数外，任何位置声明的变量都是全局变量
            
            * 函数中 "未声明已赋值的变量" == "全局变量"
            
            * 
        
        * 一直占用内存空间
        
            * 如果页面不关闭，那么就不会释放，会一直占用内存，消耗内存空间
    
            * 
        
    * 局部变量
    
        只能在某个作用域中调用的范围
    
        * 在函数内部声明的变量，称为 "局部变量"，函数外不能调用此变量
        
        * 临时占用内存空间
        
            * 局部变量被使用后，会释放所占有的内存
        
            * 
        
    * 隐式全局变量 ( 可以被删除: delete varName; )
    
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
    
        * { } 中的代码 称为 块级别作用域 ( 函数除外 )
        
        * 可以在 块级别作用域 内 和 全局 使用
        
        * 
        
* 作用域链

    * 零级作用域

        * < script > </ script >
        
        * 
        
    * 一级作用域
        
        * function F1() { var num = 20; function F2 (); }
        
        *
        
    * 二级作用域
    
        * function F2() { var num = 30; function F3 (); }
        
        * 
        
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

                * 如果到 零级作用域 仍然没有找到 num 变量，则会输出结果: num is not defined
                
                *
            
* 预解析

    执行代码之前 JS 内部运行的解析
    
    * 预解析过程
    
        1. 把变量提升到当前作用域的 最前面，只提升声明，不提升 "赋值"
         
        2. 把函数的声明提升到当前作用域的 最前面，值提升声明，不提升 "调用"
         
        3. 先提升 var，再提升 function
        
        4.

    * 在解析当前代码行之前
    
        * 提前 " 变量声明 " 的位置在 " 当前作用域 " 之前
        
        * 提前 " 函数声明 " 的位置在 " 当前作用域 " 之前
        
        * 变量声明 和 函数声明 同时被提前，变量声明 会提升到 函数声明 之前 ( 当前所在作用域的顶部 )
        
        * 

    * 变量预解析
    
        * 只会在当前作用域中提升，最多提升到当前作用域的顶部
        
        * 函数中的变量预解析，只会提升到函数作用域的最前面，不会出去
        
        * 
    
    * 函数预解析
    
        * 会把 " 函数体 "，提升到 " 调用函数 " 之前
        
        * 
        
    * 分段预解析
    
        * 多对 < script > </ script > 标签中的 函数重名，预解析不会冲突，重名函数互不影响
        
        * 相当于 各自在各自 的 < script > </ script > 作用域中
        
        * 



<br/>
<hr/>
<br/>


