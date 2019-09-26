<h4 id="#">DOM</h4>

* Javascript 分为三个部分

    * ECMAScript 标准: JS 的基本语法
    
    * DOM( Document Object Model ) -> 文档对象类型 -> 操作页面的元素
    
    * BOM( Browser Object Model ) -> 浏览器对象模型 -> 操作的是浏览器

    *
    
* API( Application Programming interface 应用程序编程接口 )

    * 是一些预定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力
    
    * 又无须访问源码，或理解内部工作机制的细节
    
        * 任何开发语言都有自己的 API
        
        * API 的特征 输入 和 输出 ( I / O )
        
        * API 的使用方法 console.log();

        * 

* Web API

    * 浏览器提供的一套操作浏览器功能和页面元素的 API ( BOM & DOM )
    
    * 此处的 API 特指浏览器提供的 API ( 一组方法 )
    
    *       
        
* DOM

    * 概念
    
        * 把一个 html 文件看成一个文档，万物皆对象，所以把这个文档堪称是一个对象
        
        * HTML: 展示信息，展示数据 
     
        * XML: 侧重于存储数据
        
            * 文件也可以看成是一个 文档
        
            * 2007 之后的文档，把后缀改成 rar 解压后就是 XML 文件
            
            * html 文件看成是一个文档，那么这个 "文档" 可以看成是一个 "对象"，文档中的 "所有的标签" 都可以看成是一个 "对象"
            
            * 页面中的每个标签，都是一个元素( element )，"每个元素" 都可以看成是一个 "对象"
            
            * html 页面中都有一个根标签 < html > ，里面有很多的元素( 有很多的 "标签"，有很多的 "对象" )
            
        * 文档( document )
        
            * 页面中的顶级对象: document
        
            * 一个页面就是一个文档
            
        * 根( root )
        
            * 页面中的根标签 html标签
            
        * 节点( node )
                
            * 页面中 "所有的内容" 都是 "节点"
            
        * 元素( element )
        
            * 页面中的所有的标签都是元素，"元素" 可以看成是 "对象"
            
        * 属性( property )
        
            * 标签属性
        
        * 

    * 作用
    
        * 操作页面中的元素
        
            * 获取元素
            
            * 动态创建元素
            
            * 对元素进行操作( 设置其属性或调用其方法 )
            
            * 事件( 何时做响应的操作 )
            
            * 
        
    * DOM 树
    
        * 由文档及文档中的所有的元素( 标签 )组成饿一个树形结构图，叫树状图( DOM树 )
        
            * 把 html 页面 或者 XML 文件看成是一个文档，文档就是一个对象
            
            * 文档中所有的标签都是元素，元素也可以看成是对象
            
            * 标签( 元素，对象 )有很多，还有嵌套的关系
            
            * 组成的这种层次结构，可以模拟成树形结构图( 简称: 树状图 == DOM 树 )
    
        * 文档( doc )
        
            * html( ele ) 
            
                * head( ele )
                    
                    * meta
                    
                    * title
                
                * body( ele )
                
                    * div
                    
                        * div
                        
                            * color
                            
                        * div
                        
                             * height
                    
                    * ul( ele )
                    
                        * li
                            * color
                    
                    * h1( ele )
                    
                        * a
                        
                            * color
                            
                            * 
              
    * DOM 的其他几个概念
    
    * 第一次体验 DOM 操作

* 获取元素的方式

    * 常用获取方式

        * document.getElementById('idName');
        
            * 根据 "ID" 从整个文档中获取元素 => 返回: 一个元素对象 
            
            * 
            
        * document.getElementByClassName('className');
        
            * 根据 "class" 从整个文档中获取 相同 className 的元素 => 返回: 伪数组( 可以存储多个对象 )
            
            * 
       
        * document.getElementsByTagName('tagName');
        
            * 根据 "标签名" 获取元素 => 返回: 元素对象组成的 "伪数组"
            
            * 
            
        * document.getElementByName('nameValue');
        
            * 根据表单标签中 name 的值获取元素 => 返回: "伪数组"
            
            * 
        
    * 其他获取方式( 仅支持 H5 )
    
        * document.querySelector('#btn ...'); => 返回: 一个对象
        
            * 根据选择器的形式 选择元素
            
            * 
            
        * document.querySelectorAll('.cls'); => 返回: "伪数组"
        
            * 
            
            * 
            
    * 操作标签属性
    
        * scr、title、alt、href、id
        
            * 操作基本标签属性
            
            *
        
        * name、value、type、checked、selected、disabled、readonly
        
            * 操作表单标签属性
    
    * 元素样式操作
        
        * obj.style.attribute = "attributeValue";

        * obj.className = "attributeValue";
    
   
* 为元素添加事件操作

    * 事件
    
        * 事件源
        
        * 触发
        
        * 响应

    * innerText 和 innerContent 的兼容问题
    
        * 目前浏览器都支持 innerText，属于 IE 的标准
        
        * textContent 本身属于火狐支持，IE8 不支持
        
        *    
    
    * innerText 和 innerHTTML 的区别
    
        * 都可以设置标签的文本内容
        
        * 如果要设置 标签 和 内容，推荐使用 innerHTML
        
        * 如果要获取标签中的文本，推荐使用 innerText 也可以使用 innerHTML
        
        * 如果想获取的是有标签和文本的，使用 innerHTML
        
        * 

    * 自定义属性
    
        * 标签原本没有这个属性，为了存储数据，程序员自己添加的属性
        
        * 自定义属性无法直接通过 DOM 对象的方式 获取 和 设置
        
            * 获取自定义属性的值: 
            
                * obj.getAttribute('customAttributeValue');
            
            * 设置自定义属性
            
                * obj.setAttribute(customAttributeName, customAttributeValue)
                
            * 移除自定义属性
            
                * obj.removeAttribute('customAttributeName');
                
                *

```javascript


//设置任意元素中间的文本内容
function setInnerText(element, text) {

    if (typeof element.textContent == "undefined") {
    
        element.innerText = text;

    } else {

        element.innerContent = text;
    }
}

//获取任意元素的中间的文本内容
function getInnerText(element) {
    
    if (typeof element.textContent == "undefined") {
    
        return element.innerText;

    } else {
    
        return element.innerContent;
    }
}


```











































