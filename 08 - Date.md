* 三种对象

    * 内置对象: JS 系统自带的对象
    
        * 对象
        
            * 实例对象 -> 实例方法必须通过实例对象调用
            
                * 通过构造函数创建出来，实例化的对象
            
            * 静态对象 -> 静态方法必须通过大写对象调用
            
                * 不需要创建，直接就是一个对象
                
                * 方法( 静态方法 ) 直接通过这个对象名字调用
        
        * Math: 
        
            * 具有数学常数 和  函数的属性 和 方法, 但不是一个函数对象
            
            * Math 的 所有属性 和 方法 都是静态的
            
            * Method:
            
                * Math.PI( π )
                
                    * 3.14.15926
                    
                * Math.E( 常数的底数 )
                
                    * 2.718281828459045
                    
                * Math.abs( 绝对值 )
                
                    * Math.abs( number )
                    
                        * console.log(Math.abs('-1')); ==> //1
                        
                        * console.log(Math.abs(-2)); ==> //2
                        
                        * console.log(Math.abs(null)) ==> //0
                        
                    * Math.abs( String )
                    
                        * console,log(Math.abs("string")); ==> //NaN
                        
                        * 
                        
                * Math.ceil( 返回大于或等于一个给定数字的最小整数 ) //ceil: 天花板
                
                    * 向上取整( 不是四舍五入 ), 无论小数点后面的数字大小
                
                    * console.log(Math.ceil(12.3)); ==> //13

                    * console.log(Math.ceil(12.9)); ==> //13

                    * console.log(Math.ceil(12.09)); ==> //13
                    
                * Math.floor( 返回小于或等于一个给定数字的最小整数 ) //floor: 地板
                
                    * 向下取整( 不是四舍五入 ), 无论小数点后面的数字大小
                    
                    * console.log(Math.ceil(12.3)); ==> //12
                    
                    * console.log(Math.ceil(12.9)); ==> //12

                    * console.log(Math.ceil(12.09)); ==> //12
                    
                * Math.max( 返回一组数中的最大值 )
                
                    * console.log(Math.max(10, 1, 9, 100, 200, 45, 78)); ==> //200
                    
                * Math.min( 返回一组数中的最小值 )
                                
                    * console.log(Math.min(10, 1, 9, 100, 200, 45, 78)); ==> //1
                    
                * Math.pow( 返回一个数字的幂 )
                
                    * console.log(Math.pow(25, 2)); ==> //625
                    
                * Math.sqrt( 返回一个数字的平方根 )
                
                    * console.log(Math.sqrt(16)); ==> //4
                
                * Math.random( 返回一个浮点 ) //返回伪随机数
                
                    * console.log(Math.random()); ==> 0.3178073015831
                    
                    * console.log(parseInt(Math.random()*5)); ==> //整数随机数( 0 ~ 4 )

                    * console.log(parseInt(Math.random() * 5) + 1); ==> //整数随机数( 0 ~ 5 )

                    * console.log(parseInt(Math.random() * 100)); ==> //整数随机数( 0 ~ 99 )

                    * console.log(parseInt(Math.random() * 100) + 1); ==> //整数随机数( 0 ~ 100 )
        
        * Date
        
            * 实例化新 Date 对象的唯一正确方法是使用 new 运算符
            
            * 如果只是直接调用Date对象，例如 now = Date()，返回的值是字符串而不是Date对象
            
            * Date 构造函数
            
                * 没有参数
                
                    * new Date();
                    
                    * 如果未提供任何参，则新创建的 Datte() 对象表示在实例化时在本地时区中制定当前日期和时间
                
                * 有 value
                
                    * new Date(value);
                    
                    * 一个整数值
                    
                    * 表示自1970年1月1日00:00:00 UTC（Unix纪元）以来的毫秒数，忽略闰秒
                    
                    * 大多数 "Unix时间戳" 功能仅精确到最接近的秒
                
                * 有数据字符串
                
                    * new Date(dateString);
                    
                    * 日期字符串
                    
                    * 以 "Date.parse()" 方法识别指定格式 
                    
                    * 这些格式是符合 "IETF的RFC 2822时间戳"，也是 "ISO8601版本" 中的字符串
                    
                    * 注意: 
                    
                        * 由于浏览器差异 和 不一致性，强烈建议不要使用 "Date构造函数" 解析日期字符串
                        
                        *（ 并 Date.parse() 以相同的方式工作 ）
                    
                        * 对RFC 2822格式字符串的支持仅限于惯例
                        
                        * 对ISO 8601格式的支持不同之处在于仅日期字符串（例如“1970-01-01”）被视为UTC，而不是本地
                   
                    *
                
                * 有参数
                
                    * new Date(year, monthIndex[, day [, hours [, seconds [, milliseconds]]]]);
                    
                    * 条件选配: 
                    
                        * 年( 必要条件 ) -> 月( 必要条件 ) ->
                        
                        * -> 日( 可选条件 ) -> 小时( 可选条件 ) -> 分钟( 可选条件 ) -> 秒( 可选条件 ) -> 毫秒( 可选条件 )
                    
                    * Parameter
                    
                        * year( 必要条件 )
                        
                            * 表示 "年份" 的整数值
                            
                            * 4位数的 4位数
                        
                        * monthIndex( 必要条件 )
                        
                            * 表示 "月份" 的整数值
                            
                            * 0 ~ 11( 国外 ) 映射 1 ～ 12( 国内 )
                        
                        * day( 可选条件 )
                        
                            * 表示 "月份中某一天" 的整数值
                            
                            * 如果未指定，则使用默认值: 1
                        
                        * hours( 可选条件 )
                        
                            * 表示 "一天中小时" 的整数值
                        
                        * minutes( 可选条件 )
                        
                            * 表示 "分钟段" 的整数值
                        
                        * seconds( 可选条件 )
                        
                            * 表示 "时间的第二段" 的整数值
                        
                        * milliseconds( 可选条件 )
                        
                            * 表示 "一段时间的毫秒段" 的整数值
                            
                            * 默认值是经过秒的 0 毫秒
            
            * Method
            
                * date method
            
                    * getFullYear();( 获取年份 )     
                    
                        * getYear();( 该特性已经在 Web 标准中删除，只能获取年份的后两位 )( 已废弃 ! )
                        
                    * getMonth();( 获取月份 )
                    
                        * 国外月份 0 ～ 11 映射国内月份 1 ～ 12
                        
                        * 真实国内月份: getMonth() + 1;
                        
                    * getDay();( 周几 )
                    
                        * 0 ~ 6 映射 "周一 至 周日"
                    
                        * 获取是本周的: "周几"
                        
                    * getDate();( 日期 )
                    
                        * "xx" in ( 0 ～ 28 && 0 ～ 30 && 0 ～ 31 )
                        
                        * 获取当月的: "某一天的日期"
                    
                    * getHours();( 获取小时 ) 
                    
                        * 获取小时
                    
                    * getMinutes();( 获取分钟 )
                    
                        * 获取分钟
                    
                    * getSeconds();( 获取分钟 )
                    
                        * 获取秒
                    
                    * getMilliseconds();( 获取毫秒 )
                    
                        * 获取毫秒
                        
                * other method
                
                    * 日期( 年 月 日 )
                
                        * toString
                        
                            * Web Sep 13 2017
                        
                            * "英文格式" 的日期( Date 数据类型 ) ==> 字符串类型
                        
                        * toLoadDateString
                        
                            * 2017/9/13
                        
                            * "数字格式" 的日期
                            
                    * 时间( 小时 分钟 秒 )
                    
                        * toTimeString
                        
                            * 小时分钟秒
                        
                        * toLoadTimeString
                        
                            * 小时分钟秒
                    
                    * 获取日期毫秒形式
                    
                        * var now = new Date();
                        
                            * valueof 用于获取对象的原始值
                        
                            * console.log(date.valueof());
                            
                            * valueof: 用于获取对象的原始值
                        
                        * var now = Date.now();
                        
                            * HTML5 中提供的 方法，有兼容性问题
                        
                        * var now = + new Date();
                    
                            * 不支持 HTML5 的浏览器，可以用这种方式
                            
        * String
        
            * string( 首字母小写 ) -> 字符串类型 -> 基本类型
            
                首字母小写: 系统函数
            
                * 
            
            * String( 首字母大写 ) -> 字符串类型 -> 引用类型
            
                首字母大写: 系统构造函数( 调用 ) / 自定义构造函数( 创建对象 )
            
                * 全局对象，用于字符串 或 一个字符序列的构造函数
                
                    * 字符串可以看成是字符组成的数组，但 JS 中没有 "字符类型"
                    
                    * 字符是一个一个的，在别的语言中字符用一对 '单引号' 扩起来
                    
                    * 在 JS 中字符串可以使用单引号也可以使用双引号
                    
                    * 因为字符串可以看成是数组，所以可以通过 for 循环 进行遍历
                    
                    * 
                    
                    * 字符串特性特性: 值不可改性( 字符串的值不能改变 )
                    
                        var str = "hello world";
                    
                        * str[1] = "W"; ==> //expected output; str = "hello word";
                        
                            * 字符串可以通过索引访问字符串中的某个值
                            
                            * 但是，仅 "只读" 不能 "设置"( 设置代表可以改变 )
                            
                            * 
                        
                        * str = "see you again"; ==> //expected output: str = "see you again"
                        
                            * 此时属于: 变量的重新赋值，所以可以改变
                            
                            * 
                
                * 强类型语言字符
                            
                    * integer num = 10; ==> 整数
                    
                    * float num2 = 90.3; ==> 小字
                    
                    * string str = "hello"; ==> 字符串( 强类型语言中字符串必须用 双引号 )
                    
                    * char ch = 'h'; ==> 字符( 强类型语言中字符串必须用 单引号 )
                    
                        * char ch = 'hh'; // error(Can't use this) 
                    
                        * 'h' + 'e' + 'l' + 'l' + 'o' ==> "hello"
                        
                        * "字符串" 可以看成是多个 "字符" 组合成的 "数据"
                    
                        * 字符的值只有一个单元组成
                        
                        * 
                    
                * JavaScript 语言( 没有 "字符" 类型 )
                
                    * JS 中无论是 "单引号" 还是 "双引号" 都是 "字符串类型"
                    
                    * 字符串遍历 -> 字符( 意义上的 )
                    
                        * var str = "hello";
                        
                        * for (var i = 0; i < str.length; i++) {
                        
                        * console.log(str[i]);
                        
                        * }
                    
                    * 
                    
            * Method
            
                * 调用方法
                
                    * 实例方法:
                    
                        * 必须通过 new 的方式创建的对象( 实例对象 )来调用的方法
                    
                    * 静态方法:
                    
                        * 直接通过大写的构造函数的名字调用的方法( 直接通过大写的对象名字调用的 )
            
                * .length();( 返回: 字符串长度 )
                
                * .charAt(index);( 返回: 指定索引位置的字符串，超出索引，则返回空 )   
                
                * .fromCharCode(num1, ..., numN);( 返回: ASCII 码对应的值 )
                
                    * 只能通过 "静态方法调用"
                    
                        * String.fromCharCode();
                        
                        * 
                
                * .concat( str1, str2, ... strN ); ( 字符串拼接 )
                
                * .indexOf(searchStrName);( 返回: index 的索引值 )
                
                    var str = "one by one"; ==> // indexMax = 10    
                    
                    * var index = str.indexOf("o");
                    * console.log(index); ==> //expected output: 1
                
                        * 从左向右寻找( 相同名称只寻找一个 )，就返回: 索引值( 索引从左向右排序 )
                    
                    * var index = str.indexOf("o", 5);
                    * console.log(index); ==> //expected output: 8
                    
                        * 如果有多个参数，则从 "第 5 位开始检索"
                        
                    * var index = str.indexOf(15);
                    * console.log(index);  ==> //expected output: -1
                
                        * 未找到( 或超出索引范围 )。则返回: -1
                
                * .lastIndexOf();
                
                    var str = "one by one"; ==> //indexMax = 10 
                    
                    * var index = str.lastIndexOf("o");
                    * console.log(index); ==> //expected output: 8
                    
                        * 从右向左寻找( 相同名称只寻找一个 )，就返回 索引值( 索引从左向右排序 )
                        
                    * var index = str.lastIndexOf("o", 5);
                    * console.log(index); ==> //expected output: 1
                    
                        * 如果有多个参数，则从 "第 5 位开始检索"，但检索依然从左向右检索
                        
                    * var index = str.lastIndexOf(15);
                    * console.log(index);  ==> //expected output: -1
                
                        * 未找到( 或超出索引范围 )。则返回: -1
                
                * .replace(parameter1, parameter2);( 替换字符串中的内容 )
                
                    * parameter1: 字符串原本的 值( 不可更改 )，用于检索
                    
                    * parameter2: 如果检索出字符串包含 parameter1，则用 parameter2 替换 parameter1
                
                * .slice(index1, index2);( 返回: 新建 index1 到 index2 的字符串)
                
                * .split(parameter1, parameter2);
                
                * .substr(parameter1, parameter2);()
                
                    var str = "hello word"; ==> //indexMax = 10
                
                    * var index  = str.substr(4);
                    * console.log(index); ==> //expected output: "lo word"~~~~
                    
                        * 
                
                    * var index = str.substr(4, 8);( 不包含结束索引 )
                    * console.log(index); ==> //expected output: "lo w"
                    
                        * 
                    
                    * .toLocaleLowerCase();
                    * .toLowerCase();
                    
                        * 英文转小写
                        
                    * .toLocaleUpperCase();
                    * .toUpperCase();
                    
                        * 英文转大写
                    
                    * .trim();( 去除字符串两端的空格 )
                    
                    *
                
                * 正则表达式
                
                    *
                    
                    *
                    
                    *
                
            * Object
            
        * Array
        
            * 定义
        
                * 用于构造函数全局对象
            
                * 高阶，类似列表的对象
            
            * 创建
        
                * var arr1 = new Array();
            
                * var arr2 = [];
            
            * Methods
            
                * 判断对象是不是不数组类型
                
                    * instanceof: 关键字
                    
                        * console.log(arr1 instanceof Array); ==> true
                
                    * Array.isArray();
                    
                        * console.log(Array.isArray(arr12)); ==> true
                
                    * 
                
                * Array.from();( 创建一个类似的新数组 )
                
                    var arr = ["a", "b", "c"]
                
                    var newArr = Array.from(arr); 
                    
                    * Array.from('newArr'); ==> //["f", "o", "o"]
                    
                    * 
                
                * .concat(数组，数组，数组 ...);( 拼接数据 )
                
                    var arr1 = [10, 20, 30];
                    var arr2 = [40, 50, 60];
                    
                    * console.log(arr1 concat arr2); ==> //[10, 20, 30, 40, 50, 60]
                    
                    * 
                
                * arr.every(callback [, thisArg])();( 用于筛选 )
                
                    callback: 回调函数
                    
                    回调函数中有三个参数: element，index，array
                    
                    返回 boolean 类型
                    
                    var arr = [1000, 2000, 3000];
                    
                    * arr.every(function (ele, idx, arr) { return ele.length > 3; }) ==> false
                
                    * 如果数组中的每个值都满足函数的条件，则返回 true
                
                * arr.filter();
                
                    返回的是数组中每一个元素都复合条件的元素，组成了一个新的数组
                
                    var arr = [10, 20, 30, 40, 50, 60, 70, 80];
                    
                    var newArr = arr.filter(function(ele, idx, arr) { return ele > 40; }) ==> //[50, 60, 70, 80]
                    
                    *
                    
                * 必记
                    
                    * arr.push();( 给数组中增加一个值 )
                    
                        把值 追加到 数组中
                        
                        返回追加后的数组长度
                        
                        var arr = [10, 20, 30];
                        
                        var newArr = arr.push(100);
                        
                        * console.log(newArr); ==> //4
                        
                        *
                        
                    * arr.pop(); ( 删除数组中的最后一个值 )
                    
                        返回删除元素的值 
                        
                        var arr = [10, 20, 30, 99];
                        
                        var newArr = arr.pop();
                        
                        * console.log(newArr); ==> //99
                        
                        * 
                        
                    * arr.shift(); ( 删除数组中的第一个值 )
                    
                        返回删除元素的值
                        
                        var arr = [66, 10, 20, 30];
                        
                        var newArr = arr.shift();
                        
                        * console.log(newArr); ==> //66
                        
                    * arr.unshift(); ( 向数组的第一个元素前面插入一个元素 )
                    
                        返回追加后的数组长度
                    
                        var arr = [10, 20, 30]
                        
                        var newArr = arr.unshift(99)
                        
                        * console.log(newArr); ==> //4
 
                * arr.forEach();( 同等于 for ... in ... 循环 )
                
                    循环遍历 key 和 word
                
                    var arr = [10, 20, 30, 40];
                    
                    arr.forEach(function (ele, idx, arr) { console.log(ele + " : " + idx)});
                    
                    * 如果要在低版本浏览器使用: 需要在文件中 增加官方的兼容性代码，即可使用
                       
                * arr.indexOf();
                
                    正序检索，返回正序索引值
                
                    var arr = [10, 20, 30, 40];
                    
                    var newArr1 = arr.indexOf(30);
                    
                        * console.log(newArr1); ==> //2
                    
                    var newArr2 = arr.indeOf(100);
                    
                        * console.log(newArr2); ==> //-1
                    
                * arr.lastIndexOf();
                
                    倒序检索，返回正序索引值
                
                    var arr = [10, 20, 30, 40];
                    
                    var newArr1 == arr.lastIndexOf(30);
                    
                        * console.log(newArr1); ==> //2
                    
                    var newArr2 = arr.lastIndexOf(99);
                    
                        console.log(newArr2); ==> //1

                * arr.join(); ( 增加分割器 )
                
                    var arr = ["刘备", "关羽", "张飞"]
                    
                    var str = arr.join("|");
                    
                    * console.log(str); ==> //"刘备|关羽|张飞"
                
                * arr.map(); 
                
                    数组中的每个元素都要执行这个函数，把执行后的结果冲洗你全部的凡在一个新数组中
                
                    var arr = [1, 4, 9];
                    
                    var newArr = arr.map(Math.sqrt);
                    
                    * console.log(newArr); ==> //[1, 2, 3]
                
                * arr.reverse(); ( 反转数组 )
                
                    var arr = [10, 20, 30, 40, 50, 60];
                    
                    arr.reverse();
                    
                    * console.log(arr); ==> //[60, 50, 40, 30, 20, 10]
                
                * arr.sort(); ( 数组排序 )
                
                    sort 方法本身不稳定
                    
                    加入 回掉函数后 稳定
                
                    var arr = [10, 1, 38, 351, 31, 2]
                    
                    arr = arr.sort(function (a, b) { if(a > b){return 1;}else if(a < b){return 0;}else(return-1)});
                
                    console.log(arr); ==> //[351, 38, 31, 10, 2, 1]
                    
                    * 

                * arr.slice();( 返回索引截取的对象对象，不包括最后一位 )
                
                    返回索引截取的数组对象，不包括最后一个对象
                
                    var arr = [10, 20, 30, 40, 50, 60, 70, 80];
                    
                    var newArr1 = arr.slice(3, 5);
                    
                    * console.log(newArr); ==> //[40, 50]
                    
                * arr.splice(number, deleteCount: number, ...items);
                
                    删除或替换数组中元素的值
                
                    var myFish = ["abgel", "clown", "mandarin", "sturgeon"];
                    
                    myFish.splice(2，0, "drum"); ==> //["abgel", "clown", "drum", mandarin", "sturgeon"];
                    
                    myFish.splice(2, 1, "drum"); ==> //["abgel", "clown", "drum", "sturgeon"];
                    
                    myFish.sp;oce(2, 1, "drum", "alpha") ==> //["abgel", "clown", "drum", "alpha", "sturgeon"];
                    
                    *
                
                
                *
    
    * 自定义对象: 自己定义的构造函数的对象
    
    * 浏览器对象: BOM 时候讲
  



<br/>
<hr/>
<br/>


基本包装类型

* 意义

    * "普通变量" 不能直接调用 "属性" 和 "方法"
    
    * "对象" 可以直接调用 "属性" 和 "方法"
    
    * 基本类型( number、string、boolean )
    
        * 本身 str 是普通变量( 基本类型 )
        
        * 但是在执行代码的过程中，如果这种类型的变量调用了 属性 或 方法
        
        * 那么这种类型就不再是基本类型了，而是 "基本包装类型"
        
        * 这个变量也不是普通的变量了
        
        * 而是 "基本包装类型对象"
    
* 注意

    * 每当读取一个基本类型值的时候，后台就会自动创建一个对应的基本包装类型的对象。而且，此对象只存在于一行代码的执行瞬间，然后立即被销毁。
    
    * 把字符串，数字，布尔值传给构造函数会得到对应的实例。对基本包装类型的实例调用typeof会返回“object”。要注意，使用new操作符调用基本类型的构造函数，与直接调用同名的转型函数是不一样的。
    
    * Boolean类型：需要注意的是，使用构造函数创建布尔的对象进行布尔运算时，对象都会被转换为true
    
    * Number类型：toString()将数字转换成字符串，接收一个参数，告诉它返回几进制 toFixed()会按照指定的小数位返回数值的字符串表示，并且会自动舍入
    


































