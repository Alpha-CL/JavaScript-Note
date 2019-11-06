<h1 id="#">Js Basic</h1>

<h2 id="#">JS 介绍基本语法、变量、运算符</h2>

<h3 id="#"></h3>



<br/>
<hr/>
<br/>



<h4 id="#">模块学习</h4>

* ECMA Script 

    * ECMAScript 是由网景的 " 布兰登 · 艾克 " 开发的一种脚本语言的标准化规范
    
    * 最初命名为: Mocha，后来改名为: LiveScript，最后重命名为: JavaScript
    
    * ECMA Script 是由 ECMA - 262 标准化的脚本语言的名称
    
    * 
    
* DOM --- Document object Model 

    * 文档对象模式
    
    * 

* BOM --- Browser object Model

    * 浏览器对象模式
    
    * 



<br/>
<hr/>
<br/>




<h4 id="#">JavaScript 是什么</h4>

1. 脚本语言

    * 不需要编译，直接执行
    
    * 

2. 解释性语言

    * 遇到一行，就执行解释一行
    
    * 需要吧代码翻译成计算机所认识的二进制语言，才能执行
    
    * 

3. 动态类型的语言

    * 只有执行到变量，才能获取变量等属性
        
        * 代码( 变量 ) 只有执行到这个位置的时候，才知道变量中存储的是什么
        
        * 如果是对象，就有对象的属性和方法
        
        * 如果是变量就是变量的作用
        
        * 
            
    * 对象本没有什么，如果 "." 了( 调用点语法 )
            
        * 可以为对象添加属性或者方法
        
        * 

4. 基于对象的语言

    * JS 是一门 " 基于对象 " 的语言，JS 中已有对象( 直接调用 )
    
    * 

5. 类型的语言

    * 强类型语言: java
    
        * 声明变量: 必须声明变量的类型 
        
            * integer num = 10; 
            
            * float num = 90.3;
            
            * 

    * 弱类型语言: JavaScript
    
        * 声明变量: 所有类型都可以用 var 声明
        
            * var num = 10;
            
            * var num2 = 90.3;
            
            * 



<br/>
<hr/>
<br/>



<h4 id="#">JS 的起源 LiveScript</h4>

最初的目的: **为了解决用户和浏览器直接的交互所创造的语言** 

Brendan Eich 1961 年用**十天左右**时间创造出了 LiveScript

JavaScript 和 Java 没有任何关系，只是因为 LiveScript 为了迅速推广修改成 JavaScript



<br/>
<hr/>
<br/>



<h4 id="#">JS 现在可以做什么</h4>

* 网页特效  ( JavaScript.js )

* 服务端开发 ( Node.js )

* 命令行工具 ( Node.js )

* 桌面程序 ( Electron )

* APP ( Cordova )

* 控制硬件 - 物联网 ( Ruff )

* 游戏开发 ( cocos2d-js )



<br/>
<hr/>
<br/>



<h4 id="#">严格模式( strict mode )</h4>

* 使用严格模式

    * "use strict";
    
    * 

ECMAScript 5 中引入的 JavaScript 严格模式是一种选择加入受限制的 JavaScript 变体的方法

从而隐式选择退出“ sloppy mode ”

严格模式不仅仅是一个子集：它故意与普通代码具有不同的语义

不支持严格模式的浏览器将运行具有与浏览器不同的行为的严格模式代码，因此不依赖严格模式而不进行功能测试以支持严格模式的相关方面

严格模式代码和非严格模式代码可以共存，因此脚本可以逐步选择严格模式


* 严格模式对常规 JavaScript 语义进行了一些更改

    1. 通过更改它们以抛出错误来消除一些 JavaScript 无提示错误。
    
    2. 修复了使 JavaScript 引擎难以执行优化的错误：严格模式代码有时可以比非严格模式的相同代码运行得更快。
    
    3. 禁止在 ECMAScript 的未来版本中定义某些语法



<br/>
<hr/>
<br/>



<h4 id="#">JavaScript 和 HTML、CSS 的区别</h4>

HTML: 提供网页结构，提供网页内容

CSS: 美化页面外观

JavaScript: 控制网页内容，增加动态交互效果



<br/>
<hr/>
<br/>



<h4 id="#">JS 引入方式</h4>

1. 内部 JS 文件

    * 在 < script > 中，无论在 head 还是在 body 中都可以
    
    * js 代码可以在 html 的标签中书写
    
    * 

2. 外部 JS 文件

    * 链接外部 JS 文件，需要在 head 中用 script 标签用写入 .js 文件的资源路径
    
    * 



<br/>
<hr/>
<br/>



<h4 id="#">有错误的 js 代码，那么后面的文件会如何执行</h4>

1. 同一块中的 js 代码，如有错误，则会终止错误代码后的代码
    
    * JS 错误只会影响本身所在的 < script >< /script > 代码块，或本身所在的文件
    
    * 

2. 上一块 js 代码块有错误，不会影响后面的 js 代码块

3. script 的标签中不可以省略的

    *   type="text/javascript"  ------ 解决 JS 解析

    *   language="javascript" ------ 解决 PHP 解析
    
    * 目前 html 页面中，type 和 language 都可以省略，因为 html 遵循 H5 的标准 ( 如果头部规定低版本的 html 则不能省略 )
    
    * 

4. script 标签在页面中可以出现多次

    * 一个 HTML 文件可以 引入或运行多个 < script >< /script > 代码块
    
    * 



<br/>
<hr/>
<br/>



<h4 id="#">JS 注释</h4>

* 注释: 解释代码的含义，给其他程序员看

    * 注释后的代码不执行
    
    * 

* 注释方式:  

    *  单行注释: //
    
        * 一般用在一行代码的上面
        
        * 
    
    *  多行注释: /**/
    
        * 一般用在函数或者一段代码的上面
        
        * 



<br/>
<hr/>
<br/>



