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
    
    * obj.innerHTML
    
        * 如果直接卸载 body 标签中，和 document.write; 的缺陷相同
        
        * 只能用于 写在其他元素之中
    
    * document.createElement('tagName');
    
        * 
        
        * 
        
        * 

    * 为什么要有元素创建
    
    * 添加元素
    
    * 移除元素

    * 
    
    
    
    
    
    
    
    
    
