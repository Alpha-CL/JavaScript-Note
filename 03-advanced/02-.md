* apply 和 call 

    * 都可以改变函数中 this 的指向

        * .apply(object, [para1, para2, ... paraN]);
        
            * 
        
        * .call(object, para1, para2, ... paraN);
        
            * 
        
        * .bind(objcet, para1, para2, ... paraN);
        
            * 返回值是复制之后的这个函数
            
            * 
        
* 高阶函数

    * 函数作为参数
    
    * 函数作为返回值
    
    * 
    
    * 

* 闭包

    * 概念: 函数 A 中，有另外一个函数( 或对象 ) B，函数( 或对象 ) B 中可以访问函数 A 中定义的变量或者数据，此时形成了闭包( 此概念暂时不严谨 )
    
    * 作用: 缓存数据，把这个数据放在外层的函数和里层函数的中间位置
    
    * 优点: 外部可以一直调用缓存的数据
    
    * 缺点: 缓存数据，优点也是缺点，没有及时释放

    * 模式
    
        * 函数闭包
        
            * eg:
              
                * function f1() {
                 
                    * var num = 99;
                 
                    * return function () {
                 
                        * console.log(num);

                    * }

                * }
                 
                * 
                 
                * 
                
                * function f2(num) {
                                 
                    * return function () {
                 
                        * console.log(num);
                
                    * }
                
                * }
                
                * f2(20);
                
                *
                
                *
        
        * 对象闭包
        
        * 

* SandBox( 沙箱 )

    * 解决 全局变量一直占用内存的问题

    * 概念
    
        * 沙盘即是一个虚拟系统程序，允许你在沙盘环境中运行浏览器或其他程序，因此运行所产生的变化可以随后删除
        
        * 他创造了一个蕾丝沙盒的独立作业环境，在其内部运行的程序并不能对硬盘产生永久的影响
        
        * 其为一个独立的虚拟环境，可用以测试不收引人的应用程序或上网行为
    
        * 在一个虚拟的环境中模拟真实世界，做实验，实验结果和真实世界的结果是一样，但不会影响真实世界 
        
        *  
        
    * eg:
    
        * method - 1
    
            * (function(){
             
                * statements
             
            * }());
            
            *  

        * method - 2
        
            * (function(){
             
                * statements
             
            * })();
             
            *
         
* 递归

    * 函数中调用函数自己，递归一定要结束的条件( 否则就是死循环 )
    
        * 效率低，尽量少用
        
        * 
    
    * 一般应用在 遍历 中
    
    * eg: 
    
        * function getSum(x) {
        
            * if(x == 1) {
            
                * return 1;
            
            * }
            
            * return x + getSum(x - 1);
        
        * }
        
        *
        
        *
        
        * getSum(5);
        
            * 5
            
            * getSum(4);
            
                * 4
                
                * getSum(3);
                
                    * 3
                    
                    * getSum(2);
                    
                        * 2
                        
                        * getSum(1)
                        
                            * x == 1;
                            
                                * return 1; 
                                
                                * 
        