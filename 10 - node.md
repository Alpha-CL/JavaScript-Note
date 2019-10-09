* 节点操作(理解)

    * 节点操作的 相关属性 & 作用
    
    * 12 行代码( 熟练 )
    
    * 

* 回顾概念

    * 文档: document
    
    * 元素(element): 页面中所有的标签(tag)、元素(element)...
    
    * 节点(node): 页面中所有的内容(标签、属性、文本{文字、换行、空格、回车})
    
    * 根元素: html 标签
    
    * 
    
* 节点的属性

    * .

        * 可以使用标签 .出来
        
        * 可以使用属性节点 .出来
        
        * 可以使用文本节点 .出来
        
        * 

    * 节点
    
        * .nodeType: (1, 2, 3);
        
            * 1: 标签
            
            * 2: 属性
            
            * 3: 文本
            
            * 
        
        * .nodeName
        
            * tag.nodeName: SPAN; => 大些标签名称
            
            * value.nodeName: href; => 小写属性名称
            
            * text.nodeName: #text;
            
            * 
            
        * .nodeValue
        
            * tag.nodeValue: null;
            
            * attribute.nodeValue: attributeValue; => 属性值
            
            * text.nodeValue: textContent; => 文本内容
            
            * 
            
        * 父子节点关系
        
            * 父节点
                
                * 页面中只有标签可以作为 父节点
                
                * 
            
            * 子节点
            
                * 页面中所有的内容都可以看作 子节点
                
                * 
                
        * 获取节点的方法
        
            * 获取当前节点的 父级节点
            
                * obj.parentNode
            
            * 获取当前节点的 父级元素
            
                * obj.parentElement
            
            * 获取当前节点的 子级节点

                * obj.childNodes

            * 获取当前节点的 子级元素
            
                * obj.child
            
            * 获取当前节点的 第一个子级节点
            
                * obj.firstChild
            
            * 获取当前节点的 第一个子级元素
            
                * obj.firstElementChild
            
            * 获取当前节点的 最后一个子级节点
            
                * obj.lastChild
            
            * 获取当前节点的 最后一个子级元素
            
                * obj.lastElementChild
            
            * 获取当前节点的 前一个兄弟节点
            
                * obj.previousSibling
            
            * 获取当前节点的 前一个兄弟元素
            
                * obj.previousElementSibling

            * 获取当前节点的 后一个兄弟节点
            
                * obj.nextSibling

            * 获取当前节点的 后一个兄弟元素
            
                * obj.nextElementSibling
            
            * 
            
    * 总结
    
        * 凡事获取节点的代码在谷歌和火狐得到的都是: 相关节点
        
        * 凡事获取元素的代码在谷歌和火狐得到的都是: 相关元素
       
        * IE8
        
            * 从子节点和兄弟节点开始，凡事获取节点的代码，在 IE8 中得到的是 元素
            
            * 从子节点和兄弟节点开始，凡事获取元素的相关代码，在 IE8 中得到的是 undefined
            
            * 元素在 IE8 中不支持
            
            * 
    
* 元素的创建三种方式

    * document.write
    
        * 缺陷: 如果是在页面加载完毕后，此时通过这种方式创建元素，那么页面上存在的所有的内容全部都会被干掉( 会重新加载跳转到新页面 )
        
        * 页面加载时使用正常
    
    * obj.innerHTML( 大量嵌套时使用 )
    
        * 如果直接卸载 body 标签中，和 document.write; 的缺陷相同
        
        * 只能用于 写在其他元素之中
    
    * document.createElement('tagName');
    
        * appendChild => 追加父级对象
        
        * insertBefore => 在某个元素之前创建元素
        
        * replaceChild => 替换元素
        
        * removeChild => 移除元素
        
        * addEventListener{type, function, boolean};
        
        * 

    * 事件绑定: 为同一个元素绑定多个相同的事件
    
        * obj.eventName( 有 on ) = function();
        
            * 如果多个相同的事件注册为同一个元素，则最后一个执行，之前的被覆盖
            
        * obj.addEventListener(eventName( 没有 on), function, false);
        
            * my$('btn').addEventListener("click", function(){}, false);
        
            * 谷歌 火狐兼容，IE8 不兼容
        
        * obj.attachEvent(eventName( 没有 on ), function);
        
            * my$('btn').attachEvent("onclick", function);
        
            * IE8 兼容，谷歌 火狐 不兼容
    
        * addEventListener(); attachEvent(); 区别
        
            * 参数个数不同
            
                * addEventListener(type, function, false);
                
                * attachEvent(type, function);
                
                * 
            
            * 浏览器支持不同
            
                * addEventListener 谷歌，火狐，IE11 支持，IE8不支持
                
                * attachEvent IE8 支持，谷歌 火狐 不支持
                
                * 
            
            * this 的返回值不同
            
                * addEventListener 返回 当前绑定的事件对象
                
                * attachEvent 返回 object.window
                
                * 
                
            * onclick
            
                * addEventListener 中事件名称 "没有 on"
                
                * attachEvent 中事件名称 "有 on"
                
                * 
    
        * 解绑事件
        
            * 注意: 用什么方式绑定事件，就应该用对应的方式解绑事件
            
            * method 1
            
                * 绑定事件: obj.'on' + eventName = function(){};
                
                * 解绑事件: obj.'on' + eventName = null;
                
                * 兼容性: 都支持
                
                * 
                
            * method 2
            
                * 绑定事件: obj.addEventListener('eventName', f1, false);
                
                * 解绑事件: obj.removeEventListener('eventName', f1, false);
                
                * 兼容性: 谷歌、火狐 支持，IE8 不支持
                
                * 
                
            * method 3
            
                * 绑定事件: obj.attachEvent('on' + eventName, f2);
                
                * 解绑事件: obj.detachEvent('on' + eventName, f2);
                
                * 兼容性: IE8 支持，谷歌、火狐 不支持
                
                * 
* 事件冒泡
    
    * 多个元素嵌套，有层次关系

    * 这些元素都注册了相同的事件
    
    * 如果里面元素的事件触发了，外面元素的该事件也会自动触发

    *

* 阻止事件冒泡
    
    * event( 事件处理参数对象 )

    * 
    
* 事件总结

    * 事件参数对象: eventPhase
    
        * "捕获阶段" 和 "冒泡阶段" 不能同时出现 

        * 事件 " 捕获阶段 " => 1
    
            * 从外向里 true
           
            * 
    
        * 事件 " 目标阶段 " => 2
    
            * 
    
        * 事件 " 冒泡阶段 " => 3
           
            * 从里向外 false
           
            * 
        
    * 绑定事件
    
    * BOM( 三种绑定方式 ) 和 Jq 
    
        * addEventListener('on' + type, function, false);
        
            * 需要加 'on'
            
            * 第三个 boolean 参数 用于控制事件属于什么阶段的
            
                * 1 => 捕获阶段( 从外向里 ) == true
                
                * 2 => 目标阶段( 对应当前目标 )
                
                * 3 => 冒泡阶段( 从里向外 ) == false
                
                * 一般都是冒泡阶段，很少用捕获阶段
                
                * 
        
        * attachEvent(type, function);
        
        * 
    
    * 阻止事件冒泡
    
        * window.event.cancelable = true;
        
            * 谷歌，IE8 支持，火狐不支持
            
            * 
        
        * e.stopPropagation();
        
            * 火狐的标准，谷歌支持，IE8 不支持
            
            * 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
