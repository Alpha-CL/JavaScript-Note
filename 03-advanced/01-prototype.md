* 原型

    * 原型及是属性，也是一个对象

    * 两者均是原型

        * __proto__
        
            * __proto__ 存储在 heap 中，存储的是 栈中 prototype 的地址
        
            * 指向 构造函数的 prototype
            
            * 
    
        * prototype
        
            * prototype 的数据存储在 栈 中( 共享 )
            
            * 
    
    * 作用之一
    
        * 共享数据，节省内存空间
        
        * 本身在构造函数中定义的属性和方法，实例例化对象的时候，实例对象中的属性和方法都是在自己的空间中存储的，如果是多个对象。这些属性和方法都会在单独的空间中存储，浪费内存空间，所以为了数据共享，把想要节省空间的属性或方法写在原型对象中，达到了数据共享，实现了节点内存空间
        
        * 
        
    * 原型的写法
    
        * 构造函数增加属性
        
            * fn.prototype.property = value;
            
            * 
        
        * 构造函数增加方法
        
            * fn.prototype.method = function(){};
            
            * 
        
        * 实例对象
        
            * 实例对象中没有 prototype，只有 __proto__( 暂时的 )
            
                * 函数及是实例对象，也是对象
                
                * 
                
            * eg
        
                * var nfn = new fn();
                
                * nfn.__proto__
        
                * 
                
        * 简单的原型写法
        
            * 缺陷
            
                * 原型直接指向{}
                
                * 就是一个对象，没有构造器
                
                * 
            
            * eg
            
                * per.prototype = {
                
                    * 此种写法中必须手动添加 构造器

                    * per.constructor = Person;

                * }
            
                * 
        
    * 区别

        * 实际对象
        
            * __proto__: 原型
            
            * 浏览器使用( 不是标准属性 )
                
                * 实例对象中的 __proto__ 指向的就是该实例对象中的构造函数中的 prototype
                
                * 实例对象.__proto__; 
                
                    * 才能访问构造函数中 prototype 中的 属性 和方法
                    
                    * per.__proto__.eat();
                    
                        * 不是标准写法
                        
                        * 
                    
                    * per.eat();
                    
                        *  
                    
                        * 
            
        * 构造函数
        
            * prototype: 原型
            
                * 构造函数中的 prototype 里面的 属性 或 方法，可以直接通过实例对象调用
                
                *  
            
            * 程序猿使用( 标准属性 )
            
            * 
        
    * console.log(per.__proto__ == Person.prototype); ==> true
    
        ( IE8 中为 false )
    
        * __proto__
    
            * IE8( 不支持 )
        
                * undefined
            
                * 
                
            * 火狐、谷歌( 支持 )   
            
                * 
                
        * prototype
        
            *          
    
    * console.log(per.__proto__.constructor == Person.prototype.constructor) == true
    
        * 
        
* 重点

    * 原型的指向可以改变
    
    * 构造函数的原型队形( prototype )指向如果改变了，实例对象的原型( __proto__ )指向也会发生改变
    
    *   

    * 原型链的指向
    
        * eg:
        
            * 人物对象
        
                * 构造函数: function Person(){};
                
                    * 原型: prototype
                    
                    * 
                    
                * 实例对象: Person.prototype.sayHi = function(){};
                 
                    * constructor => Person();
                
                    * 原型: __proto__
                    
                    * 
            
            * 动物对象
            
                * 构造函数: function Dog(){};
                
                    * 原型: prototype
                    
                    * 
                
                * 实例对象: Dog.prototype.eat = function(){}; 
                
                    * constructor => Dog();
                    
                    * 原型: __proto__
                    
                    * 
                    
            * Person.prototype = new Dog();
            
                * 此时构造函数( Person )的 prototype -> 指向 -> 实例对象( Dog )的 __proto__
                
                * 实例对象( Dog )的 __proto__ -> 指向 -> 构造函数( Dog )的 prototype
                
                * 所以此时可以调用
                
                    * var per = new Person();
                    
                        * 虽然 实例对象名称还是 new Persoon(); 但是内部构造器的指向已经改变
                    
                        * 此时 per 的 constructor 指向构造函数 Dog(); 
                        
                        * 
                    
                    * per.eat();
                    
                        * 此时 调用的是 原先构造函数 Dog(); 中的方法
                        
                        * 
    * 原型的最终指向
    
        * 构造函数 Person(); --> prototype( 原型对象 ) --> __proto__( 原型 ) --> Object( 构造函数 ) --> prototype( 原型对象 ) --> __proto__: null( 固定值 )
        
            * 
        
        * 实例对象: var per = new Person();
        
            * 原型: __proto__
            
            * 
        
        * 构造函数: Object(); --> 原型对象: prototype --> 原型: __proto__: null;( 固定值 )
        
            * important!
            
            * 
            
    * 不同的继承
    
        * 继承的属性值( 就近原则 )
    
        * 组合继承 ==> 原型方式继承 + 构造函数继承
    
            * 原型的方式继承: 改变原型的指向
            
                * 缺陷: 属性在初始化时就已经固定了，如果多个实例对象的属性值在初始化的时候都是一样的
                
                * 
            
            * 借用构造函数继承: 解决属性继承
            
                * 可以解决 原型继承的缺陷，但是不能继承 方法
                
                * 
                
        * eg: 
        
            * function GrandFa(name, money){
                
                * this.name = name;
                
                * this.money = money;
                
            * }
            
            * GrandFa.prototype.sayHi = function(){
            
                * console.log('hello world');
                
            * };
            
            * 

            * 
            
            * function Father(name, money, sex){
            
                * 通过构造函数继承 GrandFa 的属性
            
                * GrandFa.call(this, name, money);
            
                * this.sex = sex;
            
            * }
            
            * 

            * 
            
            * function Son(name, money, sex, age){
            
                * 通过构造函数继承 Father 的属性
            
                * Father.call(this, name, money);
                
                * this.age = age;
                
            * }
            
            * Son.prototype.play = function(){
            
                * console.log('i like play game');
            
            * };
            
            * 
            
            * 
            
            * var son = new Son(alpha, '100W', 'male', 18);
            
            * 
            
            * 此时仅可以调用 Son 自己的方法；Son.play();
            
            * 如果想要调用 GrandFa 和 Father 中的方法，需使 更改 GrandFa 和 Father 实例对象中 __proto__ 原型的指向
            
            * 
        
        * 拷贝继承: 把对象中需要共享的 "属性" 或 "方法"，利用循环遍历复制到另一个对象中
        
            * 浅拷贝
            
                * eg: 
                
                    * 
                    
                    * 
                    
                    * 
                    
                    * 
            
            * 深拷贝 
            
            * 
    
* 构造函数、实例对象、原型对象

    * 函数也是对象，对象不一定是函数

    *

    * function Person(name, age) {
    
        * this.name = name;
        
        * this.age = age;

    * }

    * 
    
    * 实例化构造函数
    
    * var per = new Person('alpha', 18);
    
    * 
    
    * 通过 prototype 增加方法
    
        * 不会增加到 per( 实例对象 ) 中，只会在构造函数的 prototype 中添加此方法
        
        * 但是 per 可以调用此方法，因为 per 中的 __proto__ 和 Person 中 prototype 指向相同的 栈( 共享数据，节省内存空间 )
        
            * 也可以称为: 构造函数中的 prototype 共享给了 事例对象的 __proto__
            
            * 所以 事例对象的 __proto__ 可以访问 构造函数中的 prototype 存储的 属性 或 方法 等 
            
            * 仅单方面共享，事例函数中的 属性 和 方法 并不会 共享给 构造函数
            
            *  
    
    * per.prototype.eat = function eat() {
        
        * console.log('hello world');

    * };

    * 
    
    * console.dir(per);
    
    * console.dir(Person);
    
    * 

        * 构造函数: Person();
        
            * prototype
            
                * __proto__
                
                    * name 属性
            
                    * age 属性
                    
                    * 
        
        * 实例对象: per;
        
            * name 属性
            
            * age 属性
            
            * __proto__ 属性
            
            * 
        
        * 原型对象: Person.prototype;
        
            * constructor 构造器
            
            * eat 方法
            
            * 
            
    * 构造函数可以创建实例化对象
    
    * 构造函数中有一个属性 prototype，是构造函数的 原型对象
    
    * 构造函数的原型对象( prototype ) 中有一个 constructor 构造起，这个构造器指向自己所在的原型对象( prototype )所在的构造函数( Person )
    
    * 实例对象的原型对象( __proto__ ) 指向该构造函数的原型对象
    
        * 如果某个对象是 __proto__ 大多数情况下，当前是 实例对象
    
    * 构造函数是的原型对象( prototype ) 中的方法是可以被实际对象直接访问的
    
    * 


* 面向对象 和 面向过程

    * 面向过程
    
        * 凡事都要亲力亲为，所有的代码都要自己写，每一步都要很清楚，注重的是过程
        
        *
    
    * 面向对象
    
        * 执行者成为指挥者，只要找对象，然后让对象做相关的事情，注重的是结果
        
        * 面向对象的编程思想
        
            * 根据需求，抽象出相关的对象，总结对象的特征和行为，把特征变成属性、行为变成方法，然后定义( js )构造函数，事例化对象，通过对象调用属性和方法，完成相应的需求编程的思想
        
            * 
            
        * 特征
        
            * 封装
            
                * 就是代码的封装，把一些特征和行为封装在对象中
            
            * 继承
            
            * 多态
            
            * 
            
    * 如何创建对象
    
        * 调用系统 object();
        
            * 创建出来的对象都是 object 类型的，不能很明确的指出这个对象是属于什么类型
            
            * 
            
        * 字面量的方式 {}
        
            * 只能创建一个对象( 一次只能创建一个 )
            
            * 
            
        * 工厂模式创建对象 -> 自定义构造函数方式( 优化后的工厂模式 )
        
            * 自定义构造函数创建对象: 4 件事
            
                1. 在内存中 "申请"( 开辟 ) 一块空闲的空间，存储创建的对象
                
                2. this 就是当前事例化对象
                
                3. 设置对象中的 属性 和 方法( 为对象添加属性和方法，为属性和方法赋值 )
                
                4. 把创建后的对象返回 
                
                * ( 都是需要通过 new 的方式 )
                
                * 

* 贪吃蛇案例总结

    * 地图: 宽、高、背景颜色
    
        * 因为小蛇和食物都是相对与地图显示的
        
        * 这里的小蛇和食物都是地图的子元素，随机位置显示，脱离文档流
        
        * 地图也需要脱离文档流
        
        * 
        
        * run code
        
            * CSS 需要设置: 宽、高、背景颜色、脱标
        
            * 
        
    * 食物: 宽、高、背景颜色、横坐标、纵坐标
    
        * 一个食物就是一个对象，这个对象有相应的属性，这个对象需要子地图上显示    
    
        * 最重要创建食物的对象，先有 构造函数，并且把相应的值作为参数传入到构造函数中
        
        * 食物要想显示在地图上，需要初始化( 行为 ) 为we
        
        *
        
        * run code
        
            * 食物对象 => div 元素
            
            * 存储食物的数组 => elements( 存储 div 的数组 ) 
            
                * 将来删除的食物 div 时，先从 map 中删除 div，再从数组中移除 div
                
                *  
        
            * 食物的构造函数( 创建食物对象 )
            
            * 食物的显示方法( 通过对象调用方法，显示食物，设置相应的样式 )
            
                * 因为食物要被小蛇吃掉，吃掉后应该再次出现食物，原来的食物就删除了
                
                * 每一次初始化食物的时候先删除原来的食物，然后重新初始化食物
                
                * 通过一个私有函数( 外面不能调用的函数 )，删除地图上的食物，同时最开始的食物相应的保存在一个数组中，再从这个数组中把食物删除 
                
                * 最后把食物的构造函数给 window 下的属性，这样外部就可以直接访问食物的构造函数了
                
                * 
            
    * 小蛇: 
    
        * property
        
            * 宽、高、背景颜色、方向
            
            * 身体: 每个部分都是一个对象，每个部分都有横纵坐标、背景颜色
            
                * 头
                
                * 身体 1
                 
                * 身体 2
                
                * 
                
        * method
        
            * 小蛇要显示在地图上
            
                * 先删除之前的小蛇，然后再初始化小蛇( 小蛇要移动 )
                
                * 
            
            * 小蛇移动
            
                * 把小蛇头的坐标给小蛇的 身体1 
                
                * 身体1 的坐标给 身体2
                
                * 蛇头的方向需要单独设置: 
                
                * 

    * 游戏对象
    
        * 
        
        * 
        
        *  
    
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                













