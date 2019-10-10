window: 浏览器中顶级对象

* 页面中所有的内容都属于浏览器，页面中的内容也都是 window 的
    
* 因为页面中的所有内容都是 window 的，window 是可以省略的

    * 特殊属性( 请勿这样使用 ): 
    
        * console.log(window.name);
        
        * console.log(top);
        
        * console.log(window);
    
    * document: 页面中的顶级对象
    
        * 
        
    * window.alert();
    
        * 仅用于测试
        
        * 不同的浏览器，弹窗样式都不相同
        
        * 阻止用户不能操作其他操作( 用户体验较差 )
        
        * 
        
    * onload
    
        * 用于设置页面数据加载完毕
        
        * 
        
        * 扩展事件
        
            * IE8 特有
            
                * .onunload
                
                    * 页面关闭之后触发的事件
                    
                * .onbeforeunload
                
                    * 页面关闭之前触发的事件
                    
    * location
    
        * property
    
            * location.hash
            
                * 获取 '#' 后跟 URL 的片段标识符

            * location.host
            
                * 获取 主机名 和 端口

            * location.hostname
            
                * 获取主机名
                
            * location.pathname
            
                * 获取文件路径
                
            * location.port
            
                * 获取端口号
                
            * location.protocol
            
                * 获取 URL 协议
                
            * location.search
            
                * 获取查询的字符串
            
        * Method
        
            * 设置页面跳转( 一种属性 和 一种方法 效果相同 )
            
            * 跳转时，自动把之前的页面地址加入 历史记录
            
                * location.href;
                
                * location.assign();
                
                * 
            
            * 加载新页面( 无法返回之前页面 )
            
                * location.replace();
                
                *
            
            * 刷新页面( 重新加载 )
            
                * location.reload();
                
                * 
                
    * history
    
        * history.forward();
        
            * 页面前进
        
        * history.back();
        
            * 页面返回
        
        * history.go();
        
            * history.go(正数);
            
                * 页面前进
            
            * history.go(负数);
            
                * 页面返回
                
                * 
            
    * navigator
    
        * console.log(window.navigator.platform);
        
            * 通过 platform 可以判断浏览器所在的平台类型
            
            * 每个浏览器的类型各不相同( 字符串没有固定格式 )
            
            * 
            
        * console.log(window.navigator.userAgent);
        
            * 可以在 Network 中，查看 User-Agent 属性
            
            * 不同分辨率下，调用不同类型的浏览器及内核内核，用于测试效果
            
            * 

    * 计时器
    
    * 执行过程: 页面加载完毕后，过一段时间执行函数，反复的，除非清理计时器
    
        * setInterval(fn, num)
        
        * 计时器会返回自己的 ID 值
        
            * function
            
                * 循环执行的函数体
                
                * 
            
            * number
            
                * 循环的毫秒数

                * 
        
        * clearInterval(timeId)
        
            * timeId    
            
                * 停止计时器必须要 事件计时器的 " 返回值( 及事件计时器的 ID ) "
                
                * 
        
        
        
        
        
        
        
        
    
    