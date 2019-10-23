<h2 id="#">Array</h2>

<h3 id="#">3.1 Array Description</h3>

数组是类似列表的对象，其原型具有执行遍历和变异操作的方法

JavaScript 数组的长度和元素的类型都不固定

由于数组的长度可以随时改变，并且数据可以存储在数组中的非连续位置，因此不能保证JavaScript数组密集

<br/>

* 数组:
    
    存储一组有序的数据
    
    * 一次性存储多个数据
    
        * 构造函数方式创建数组
        
            var arrayName = new Array();
            
            * 空数组
             
                * var cars = new Array(); ==> undefined
                
                * 
                
            * 定义数组，并且有长度
            
                * var cars = new Array(2); ==> array.length == 2
                
                * 
                
            * 定义数组, 有长度, 并且有个多个数据
            
                * var cars = new Array( "Volvo", "BWM"... )
                
                *  
        
        * 字面亮方式创建数组
        
            var arrayName = [];
            
            * 空数组
            
                * var cars = []; ==> undefined
                
                * 
            
            * 数组长度
            
                * var cars = ["Saab", "Volvo", "BMW"];
                
                * console.log(cars.length);
                
                * 
    
* 数组元素:

    * 数组中存储的每个数据, 都可以称为数组的元素
    
    * 

* 数组长度 ( length - 1 就是最大的索引值 ):

    * 数组元素的个数等于元素长度
    
        * arrayName.length
    
        * 
    
* 数组索引 ( 从 0 开始，到 length - 1 结束 ):

    * 数组的第一个元素是索引 0
    
    * 最后一个元素的索引等于数组 length - 1
    
    * 使用无效的索引号返回 undefined
    
        * 获取数组元素的值
    
        * 改变数组元素的值
    
        *
    
* 数组中可以存储不同类型的数据

    * 通常是一样的，方便进行同类操作

    * Number、String、Boolean、Null、undefined、new object

    *
    
* 数组中长度是可以改变的

    * 
    
* 数组遍历

    * 遍及所有，对数组的每一个元素都访问一次就脚遍历
    
    * 
    


<br/>
<hr/>
<br/>


