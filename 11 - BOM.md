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
        
        * 间隔一段时间，就执行一次函数代码
        
            * window.setInterval(function, 1000);       //return: timeId
            
                * 创建 计时器
                
                * 
            
            * window.clearInterval(timeId);
            
                * 清除 计时器
                
                * 
                
        * 只执行一次函数代码
    
            * window.setTimeout(function, 1000);                      //return: timeId
            
                * 创建 计时器
                
                * 
            
            * window.clearTimeout(timeId);
            
                * 清除 计时器
                
                *      

        * offset
        
            * offsetWidth
            
                * 获取元素的宽
                
                * 
            
            * offsetHeight
            
                * 获取元素的高
                
                * 
            
            * offsetTop
            
                * 获取元素距离当前父级的顶部距离
                
                * 
    
            * offsetLeft
            
                * 获取元素距离当前父级的左侧距离
                
                * 
                
    * 直接获取元素属性
    
        * 获取 body 
        
            * document.body
            
            * 
        
        * 获取 title
        
            * document.title
            
            *
            
        * 获取 html
        
            * document.documentElement
            
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
                
        * offset
        
            * offsetWidth
            
                * 获取元素的宽
                
                * 
            
            * offsetHeight
            
                * 获取元素的高
                
                * 
            
            * offsetTop
            
                * 获取元素距离当前父级的顶部距离
                
                * 
    
            * offsetLeft
            
                * 获取元素距离当前父级的左侧距离
                
                * 
                    
    * 直接获取元素属性
    
        * 获取 body 
        
            * document.body
            
            * 
        
        * 获取 title
        
            * document.title
            
            *
            
        * 获取 html
        
            * document.documentElement
            
            * 
    
    * 轮播图编写思路
    
        * step 1
        
            * 根据 ul 中 li 的个数( 图个数 )动态创建 li，并且加入 ol 中，作为小按钮使用
            
            * 为每个 ol 中的 li 添加鼠标进入事件，( 添加事件之前，先把索引保存在每个 li 的自定义属性中 )

            * 鼠标进入 li 的时候做排他功能( 背景颜色 )，移动图片( 图片整体移动，移动的 ul，每次移动的是一个图片的宽度 ) 
            
            * 调用的是动画函数，移动 ul，移动的是 索引值 * 图片的宽度，并且吧索引值存在一个全局变量中 index  
            
            * 

        * step 2
        
            * 创建 li 之后
            
            * 设置 ol 中第一个 li 有默认的背景颜色，
            
            * 把 ul 中的第一个 li 克隆一下( 无缝连接的效果 )追加到 ul 中所有的 li 的最后面
            
            * ( 无缝效果: 页面中的第一个图片和最后一个图片是同一个图片 ) 
            
            * 
            
        * step 3
        
            * 左右焦点 的 div 显示和隐藏
            
            * 为左右按钮注册点击事件
            
            * 第一次点击右侧按钮，先判断 index 的值是不是 ul 中 li 的 leng - 1( index 的值最大是 5 )
            
            * 此时 index 的值为 0，同时设置 ul 距离左边的 left 值为 0( 初始值 )
            
            * 立刻给 index 加 1，移动 ul，让用户看到的就是第二个图片
            
            * 设置小按钮的背景颜色
            
            * 左边按钮，需要判断 index 值是不是 0，如果是
            
                * 此时 index = 5，ul 的 left 为 5 * imgWidth
                
                * 立刻 index - 1，然后 ul 移动一张图片，此时用户看到了第五张图
                
                * 
                
            * 自动播放在页面加载的时候，启动一个定时器，里面调用的是 右边按钮的点击事件的处理函数
            
            * 
        
        
        
        
        
        
    
    