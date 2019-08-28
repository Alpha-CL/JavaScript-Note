* 三种对象

    * 内置对象: JS 系统自带的对象
    
        * Math: 
        
            * 具有数学常数和函数的属性和方法, 但不是一个函数对象
            
            * Math 的所有属性和方法都是静态的
            
            * Method:
            
                * Math.PI( π )
                
                    * 3.14.15926
                    
                * Math.E( 常数的底数 )
                    
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
                            
                            * 默认值是经过秒的 0毫秒
            
            * Method
            
                * date method
            
                    * getFullYear();( 获取年份 )     
                    
                        * getYear();( 该特性已经在 Web 标准中删除，只能获取年份的后两位 )
                        
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
                
                    * toString
                    
                        * "英文格式" 的日期
                    
                    * toLoadDateString
                    
                        * "数字格式" 的日期
                    
                    * toTimeString
                    
                        * 小时分钟秒
                    
                    * toLoadTimeString
                    
                        * 小时分钟秒
                    
                    * 获取日期毫秒形式
                    
                        * var now = new Date();
                        
                            * console.log(date.valueof());
                            
                            * valueof: 用于获取对象的原始值
                        
                        * var now = Date.now();
                        
                            * HTML5 中提供的 方法，有兼容性问题
                        
                        * var now = + new Date();
                    
                            * 不支持 HTML5 的浏览器，可以用这种方式
                            
        * String
        
            * string -> 字符串类型 -> 基本类型
            
                * 
            
            * String -> 字符串类型 -> 引用类型
            
                * 全局对象，用于字符串或一个字符序列的构造函数
                
                    * 字符串可以堪称是字符组成的数组，但 JS 中没有字符类型
                    
                    * 字符是一个一个的，在别的语言中字符用一对单引号扩起来
                    
                    * 在 JS 中字符串可以使用单引号也可以使用双引号
                    
                    * 因为字符串可以看成是数组，所以可以通过 for 循环 进行遍历
                    
                    *
                    
                    * 字符串特性: 不可变性( 字符串的值不能改变 )
                    
                        var str = "hello world";
                    
                        * str[1] = "W"; ==> //expected output; str = "hello word";
                        
                            * 字符串可以通过索引访问字符串中的某个值
                            
                            * 但是，仅 "只读" 不能 "设置"( 设置代表可以改变 )
                        
                        * str = "see you again"; ==> //expected output: str = "see you again"
                        
                            * 此时属于: 变量的重新赋值，所以可以改变
                            
                            * 
                
                * 强类型语言声明
                            
                    * integer num = 10; ==> 整数
                    
                    * float num2 = 90.3; ==> 小树
                    
                    * string str = "hello"; ==> 字符串
                    
                    * char ch = 'h'; ==> 字符
                    
                    * 
            * Method
            
                * .length();( 返回字符串长度 )
                
                * .charAt(index);( 返回指定索引位置的字符串，超出索引，则返回空 )
                
                * .fromCharCode(num1, ..., numN);( 返回 ASCII 码对应的值 )
                
                * .concat( str1, str2, ... strN ); ( 字符串拼接 )
                
                * .indexOf(searchStrName);( 返回 index 的索引值 )
                
                    var str = "one by one"; ==> // indexMax = 10    
                    
                    * var index = str.indexOf("o");
                    * console.log(index); ==> //expected output: 1
                
                        * 从左向右寻找( 相同名称只寻找一个 )，就返回 索引值( 索引从左向右排序 )
                    
                    * var index = str.indexOf("o", 5);
                    * console.log(index); ==> //expected output: 8
                    
                        * 如果有多个参数，则从 "第 5 位开始检索"
                        
                    * var index = str.indexOf(15);
                    * console.log(index);  ==> //expected output: -1
                
                        * 未找到( 或超出索引范围 )。则返回: -1
                
                * .lastIndexOf();
                
                    var str = "one by one"; ==> // indexMax = 10 
                    
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
                
                * 
                
                *
                
                *
                
                * 正则表达式
                
                    *
                    
                    *
                    
                    *
                
        * Object
    
    * 自定义对象: 自己定义的构造函数的对象
    
    * 浏览器对象: BOM 时候讲
  
