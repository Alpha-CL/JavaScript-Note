///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.01:

//NO.02:

//NO.03:

//NO.04:

//NO.05:

//NO.06:

//NO.07:

//NO.08:

//NO.09:

//NO.10:

//NO.11:

//NO.12:


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 面向对象的思想 --> 抽象过程 --> 实例化过程


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 自定义构造函数
function Person(name, age, sex) {

    this.name = name;
    this.age = age;
    this.sex = sex;

    this.eat = function () {

        console.log('Hello world');
    };
}


// 实例化对象
// 实例对象通过 构造函数 创建
var per = new Person('alpha', 18, 'man');


console.dir(per);                               //Person
console.dir(Person);                            //f Person(name，)


//实例对象的构造器
//实例对象的构造起是指向 Person 的，
console.log(per.constructor === Person);         //true


console.log(per.__proto__.constructor === Person);                                  //true
console.log(per.__proto__.constructor === Person.prototype.constructor);            //true


/**
 *
 * 总结
 *
 * 实例对象是通过构造函数创建的
 *
 *
 * 1. 实例对象是通过构造函数来创建的( 创建过程称为 实例化对象 )
 *
 * 2. 如何判断对象是不是这个数据类型？
 *
 *
 * i: 通过构造器的方式 实例对象.构造机器 == 构造函数的名字
 *
 * ii: 对象 instanceof 构造函数名称( 建议使用此方法 )
 *
 */


//-------------------------------------------------------------------------------------------------------------------//


//构造函数创建对象带来的问题


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Person1(name, age) {

    this.name = name;
    this.age = age;

    this.eat = function () {

        console.log('油炸臭豆腐')
    };
}


var per1 = new Person('alpha', 20);

var per2 = new Person('beta', 18);


// 不是同一个方法
// 此时调用方法，会增加重复的
//  不断占用内存，不合理
console.log(per1.eat === per2.eat);                  // false


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//如果同时出现 myEat 变量 和 方法，则对函数内是又影响的
// var myEat = 10;

function myEat() {

    console.log('红烧狮子头');
}

function Person2(name, age) {

    this.name = name;
    this.age = age;

    this.eat = myEat;
}


var per3 = new Person2('alpha', 20);

var per4 = new Person2('beta', 18);


//此时属于调用同一个外部的函数( 又为内部函数方法 )
console.log(per3.eat === per4.eat);                  //true


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//通过原型解决 --> 数据共享，节省内存空间( 作用之一 )


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Person5(name, age) {

    this.name = name;
    this.age = age;

}

//通过原型添加方法: 解决数据共享，节省内存空间
Person5.prototype.eat = function () {

    console.log('汇通面');
};

var p5 = new Person5('小红', 16);
var p6 = new Person5('小明', 18);


console.log(p5 === p6);                              //false
console.log(p5.eat === p6.eat);                      //true


//-------------------------------------------------------------------------------------------------------------------//


//通过构造函数实例对象，并初始化
var arr = [10, 20, 30, 40];

//join 是方法，实例对象调用的方法
arr.join("|");

console.dir(arr);                                   //Array

//join方法 在实例对象 __proto__ 中
console.log(arr.__proto__ === Array.prototype);      //true


//-------------------------------------------------------------------------------------------------------------------//


//构造函数
function Person6(age, sex) {

    this.age = age;
    this.sex = sex;
}

//通过构造函数的原型添加一个方法
Person6.prototype.eat = function () {

    console.log('see you again')
};

var Per6 = new Person6(20, '男');


//构造函数、原型对象、实例对象之间的关系


//-------------------------------------------------------------------------------------------------------------------//


//利用原型共享数据

//原型的作用: 数据共享

//属性需要共享，方法也需要共享
//不需要共享的数据写在构造函数中，需要共享的数据写在原型中


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//构造函数
function Student(name, age, sex) {

    this.name = name;
    this.age = age;
    this.sex = sex;
}


//所有学生的身高都是 188，所有人的体重都是 55
//所有学生每天写 500 行代码
//所有学生每天都要吃一个10斤的西瓜


Student.prototype.height = '188';
Student.prototype.weight = '55kg';

Student.prototype.study = function () {

    console.log('学习，写 500 行代码，小菜一碟');
};

Student.prototype.eat = function () {

    console.log('吃一个 10 斤的西瓜');
};


//事例化对象，并初始化
var stu = new Student('alpha', 57, 'man');

//测试
console.log(Student);
console.log(stu);

//构造函数中的 prototype 中的属性和方法 会 单方方面共享给 事例对象


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// Student.prototype.height = '188';
// Student.prototype.weight = '55kg';
// Student.prototype.study = function () {
//
//     console.log('学习，写 500 行代码，小菜一碟');
// };
// Student.prototype.eat = function () {
//
//     console.log('吃一个 10 斤的西瓜');
// };


//简单的原型写法

//必须手动添加构造器 和 指向


Student.prototype = {


    //必须添加构造器 和 指向
    constructor: Student,


    width: '138',
    color: 'white',

    play: function () {

        console.log('LoL');
    },

    drink: function () {

        console.log('water');
    }
};


var stu2 = new Student('beta', 19, 'women');

stu.eat();
stu.study();

//测试
console.dir(Student);
console.dir(stu2);

//如果没有手动添加 构造器 和 指向，则构造函数中 prototype 并不会吧 数据共享给 事例对象


//-------------------------------------------------------------------------------------------------------------------//


//原型中的方法，是可以相互访问


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Person7(age) {

    this.age = age;

    this.sayHi = function () {

        console.log("萨瓦迪卡");


        //打招呼的同时，直接调用吃的方法
        this.eat();
    };

    this.eat = function () {

        console.log("吃东西啦")
    };
}


var per7 = new Person7(20);


//测试1: 是否能调用
per7.sayHi();
per7.eat();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Animal(name, age) {

    this.name = name;
    this.age = age;
}

//原型中添加方法
Animal.prototype.eat = function () {

    console.log("动物吃东西");

    //可以调用其他方法
    this.play();
};

Animal.prototype.play = function () {

    console.log("玩球");

    //可以调用其他方法
    this.sleep();
};

Animal.prototype.sleep = function () {

    console.log("睡觉了");
};


//事例化对象，并初始化
var dog = new Animal('omga', 22);


dog.eat();


//-------------------------------------------------------------------------------------------------------------------//


//事例对象属性和方法层层搜索

/**
 *
 * 事例对象使用的属性或方法，先在事例对象中查找
 *
 * 找不到则去事例对象的 __proto__ 指向的 原型对象( prototype) 中查找
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Person8(age, sex) {

    this.age = age;
    this.sex = sex;

    this.eat = function () {

        console.log("构造函数中的吃");
    };
}


//构造函数中原型对象的属性
Person8.prototype.sex = "women";


var per8 = new Person8(20, "man");


//首相在事例对象中查找该属性，如果没有则向当前事例对象的__proto__ 指向的 原型对象( prototype) 中查找
console.log(per.sex);           //男

per8.eat();                     //构造函数中的吃


//-------------------------------------------------------------------------------------------------------------------//


//为内置对象添加原型方法


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// var arr2 = new Array[10,20,30,40];

var arr2 = [10, 20, 30, 40];


arr2.join("|");

console.dir(arr2);          //Array


var str = String("哦，买噶的");

str.indexOf("哦");

console.dir(str);           //String


var dt = new Date();

dt.getFullYear();

console.dir(dt);            //Date


//事例中的方法如果没有，去创建该事例对象的构造函数中查找

var str1 = String("呀咩爹");

str1.indexOf("呀");

console.dir(str1);


var dt1 = new Date();

dt1.getFullYear();

console.dir(dt1);


//能否为系统的对象的原型中添加方法( 相当于改变源码 )

//为系统字符串添加一个倒序的方法
String.prototype.myReverse = function () {

    for (var i = this.length; i >= 0; i--) {

        console.log(this[i]);
    }
};

var str3 = "abcdefg";

str3.myReverse();


//为系统数组添加一个排序的方法
Array.prototype.mySort = function () {

    for (var i = 0; i < this.length - 1; i++) {

        for (var j = 0; j < this.length - 1 - i; j++) {

            if (this[j] < this[j + 1]) {

                var temp = this[j + 1];

                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
};

var arr5 = [100, 2, 20, 50, 23];

arr5.mySort();

console.log(arr5);


//-------------------------------------------------------------------------------------------------------------------//


//函数自调用
function f1() {

    console.log("函数");
}

//函数调用
f1();


//声明时同时调用( 一次性函数 )
(function () {

    console.log("函数");
})();


//页面加载后，这个自调函数的代码就执行完了
// (function (形参) {
//
//     var num = 10;       //局部变量
// })(实参);
//
// console.log(num);       //error


// (function (win) {
//
//     var num1 = 10;          //局部变量
//
//     //JS 是一门动态类型的语言
//     //对象没有属性，点了就有了
//     win.num1 = num1;
//
// })(window);
//
// console.log(num1);


//如何把局部变量变成全局变量
//把局部变量给 window 就可以了


//-------------------------------------------------------------------------------------------------------------------//


// 通过自调用函数产生一个随机数对象，在自调用函数外面。调用该随机数对象方法产生随机数


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


(function (window) {

    //产生随机数的构造函数
    function Random() {

    }

    //在原型对象中添加方法
    Random.prototype.getRandom = function (min, max) {

        return Math.floor(Math.random() * (max - min) + min);
    };

    // var rm = new Random();
    // var num9 = rm.getRandom();
    // console.log(num9);

    window.Random = Random;

})(window);


var rm = new Random();

console.log(rm.getRandom());


//-------------------------------------------------------------------------------------------------------------------//


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//构造函数中的 this 是 实例对象
//原型对象方法中的 this 是 实力对象
function Person9(age) {

    this.age = age;
    console.log(age);
}

Person9.prototype.eat = function () {

    console.log(this);
    console.log("您吃了没 ，走着 ，吃点臭豆腐");
};

var per9 = new Person9(10);
per9.eat();
console.log(per9);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Student1() {

}

Student1.prototype.study = function () {

    console.log("好好学习，天天向上");
};

Student1.prototype = {

    eat: function () {

        console.log("油炸臭豆腐");
    }
};

var stu9 = new Student1();

// stu.study();                 // study is not function
stu9.eat();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//人的构造函数
function Person10(age) {

    this.age = age;
}

//人的原型对象方法
Person10.prototype.eat = function () {

    console.log("人的吃");
};


//学生的构造函数
function Student10() {

}

//学生的原型方法
Student10.prototype.sayHi = function () {

    console.log("萨瓦迪卡");
};

Student10.prototype = new Person10(10);

//学生的原型，指向了人的实例对象
// var stu10 = new Student10();
// stu10.eat();

// stu10.sayHi();


//-------------------------------------------------------------------------------------------------------------------//


//原型最终指向了那里


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//构造函数
function Person20() {

}

//原型方法
Person20.prototype.eat = function () {

    console.log("人吃东西");
};
//实例对象
var per20 = new Person20();

console.dir(per20);                 // __proto__
console.dir(Person20);              // prototype

Person20.prototype.__proto__ = undefined;

/**
 *
 * 实例对象中有 __proto__( 原型 )
 * 构造函数中有 prototype( 原型 )
 *
 * prototype 是对象
 *
 *
 * 所以，prototype( 对象 ) 中也有 __proto__( 原型 )
 *
 * 实例对象中的 __proto__ 指向的是构造函数的 prototype
 *
 * 那么 prototype 这个对象中 __proto__ 指向某个构造函数的 prototype( 原型 )
 *
 */

//Person20(构造函数) 的 prototype( 原型对象 ) 的 __proto__( 原型 ) 指向 Object
console.log(Person20.prototype.__proto__);      //Object

console.log(per20.__proto__ === Person20.prototype);                            //true
console.log(per20.__proto__.__proto__ === Person20.prototype.__proto__);        //true
console.log(Person20.prototype.__proto__ === Object.prototype);                 //true

console.log(Object.prototype.__proto__);
//expend output: null


//-------------------------------------------------------------------------------------------------------------------//


//原型指向改变如何添加方法和访问

/**
 *
 * 如果原型指向改变了，那么就应该在原型改变指向之后添加方法
 *
 * 原理: 原型改变指向之前添加方法，此时原型及方法都存储在 栈 中，
 * 再次调用时，访问不到 栈 中的原指向地址，所以无法访问之前添加的方法
 *
 * 原型改变之后添加方法，此时 已经和 新的 栈 形成了连接
 * 再次调用时，添加的方法会直接存储在 新指向的堆地址所对应的栈中
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//人的构造函数
function Person21(age) {

    this.age = age;
}

//人的实例对象方法
Person21.prototype.eat = function () {

    console.log("i like noodles");
};

//学生的构造函数
function Student21(sex) {

    this.sex = sex;
}

//学生的实例对象方法
Student21.prototype.sayHi = function () {

    console.log("hello every body");
};

//改变原型对象的指向
Student21.prototype = new Person21(10);


var stu21 = new Student21();
stu21.eat();
// stu21.sayHi();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Person22(age) {

    this.age = age;
}

//先添加原型方法
Person22.prototype.sayHi = function () {

    console.log("excuse me");
};

//改变原型指向
Person22.prototype = {

    eat: function () {

        console.log("drink water");
    }
};

var per22 = new Person22(10);
//先添加原型方法，改变原想指向新的对象，所以访问不到
// per.sayHi();


//-------------------------------------------------------------------------------------------------------------------//


//实例对象的属性和原型对象中的属性重名问题


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Person23(age, sex) {

    this.age = age;
    this.sex = sex;
}

//此时并没有改变原型对象的指向，只改变了构造函数的 参数值
Person23.prototype.sex = "女";

//改变了构造函数中 prototype( 原型对象 )的指向 实例对象( __proto__ )
var per23 = new Person23(10, "男");

console.log(per23.sex);             //男
console.dir(per23);                 //Person23


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 * 通过实例对象能否改变原型中的属性值 ?     不能
 *
 * 原理: 实例对象中 __proto__( 存储的是地址 ) 仅仅指向 构造函数中的 prototype( 原型对象 )
 *
 *
 * 改变原型对象中属性的值，直接通过: 构造函数.原型对象.属性 = 值; 就可以改变
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//此时修改了原型对象中属性的值
Person23.prototype.sex = "哦买噶";

//仅仅修改实例对象中的属性
per23.sex = "人";
console.log(per23.sex);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 * 因为 JS 是一门动态语言
 * 对象没有什么就 点什么，只要点了，对象就有了这个属性
 *
 * 但只添加了该属性，并没有赋值
 * 所以结果是: undefined
 *
 */

//点属性，未赋值
console.log(per23.newProperty);                 //undefined

// console.log(newProperty);                    //newProperty is not defined


//-------------------------------------------------------------------------------------------------------------------//


//原型链: 实例对象和原型对象之间的关系，通过 __proto__ 联系


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 * <div id = "dv"></div>
 *
 */

var divObj = document.getElementById('dv');

console.dir(divObj);            //div#dv


/**
 *
 *
 * ==>: 指向
 * ->: 的
 *
 *
 * __proto__( 原型对象地址 ) 总是指向 prototype( 原型对象 )
 *
 *
 *
 * divObj.__proto__ ==> HTMLDivElement.prototype -> __proto__ ==>
 *
 * ==> HTMLElement.prototype -> __proto__ ==> Element.prototype -> __proto__ ==>
 *
 * ==> Element.prototype ->  __proto__ ==> Node.prototype -> __proto__ ==>
 *
 * ==> EventTarget.prototype -> __proto__ ==> Object.prototype !==> __proto__
 *
 *
 * Object.prototype 中没有 __Proto__
 * 所以 Object.prototype.__proto__ == null;
 *
 */


//-------------------------------------------------------------------------------------------------------------------//


//JS 中通过原型模拟继承


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Father(name, age, sex) {

    this.name = name;
    this.age = age;
    this.sex = sex;

}

Father.prototype.eat = function () {

    console.log("I am hungry")
};
Father.prototype.sleep = function () {

    console.log("I am so sleepy");
};
Father.prototype.play = function () {

    console.log("I like play basketball");
};


// 代码冗余( 重复代码太多 )
//
// function Son(name, age, sex) {
//
//     this.name = name;
//     this.age = age;
//     this.play = sex;
// }
// Son.prototype.eat = function () {
//
//     console.log("I am hungry")
// };
// Son.prototype.sleep = function () {
//
//     console.log("I am so sleepy");
// };
// Son.prototype.play = function () {
//
//     console.log("I like play basketball");
// };


function Son(score) {

    this.score = score;
}


//改变 son 原型指向
Son.prototype = new Father('alpha', 10, "male");

Son.prototype.study = function () {

    console.log("It takes a lot if time to learn English");
};

var son = new Son(100);

console.log(son.name);
console.log(son.age);
console.log(son.sex);

son.eat();
son.play();
son.sleep();


console.log("下面是 Son 对象自己有的");

console.log(son.score);
son.study();


//-------------------------------------------------------------------------------------------------------------------//


//继承案例


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 * 动物有名字、体重，会吃东西
 *
 * 小狗有名字、体重、毛色，会吃东西、咬人
 *
 * 哈士奇有名字、体重、毛色、性别，会吃东西、咬人、逗主人开心
 *
 */

//动物的构造函数
function Animals(name, weight) {

    this.name = name;
    this.weight = weight;
}

//动物的原型方法
Animals.prototype.eat = function () {

    console.log("I like to eat big bones");
};


//狗的构造函数
function Dog(color) {

    this.color = color;
}

//改变构造器的指向
Dog.prototype = new Animals("beta", "80kg");
//狗的原型方法
Dog.prototype.Biting = function () {

    console.log("wang wang");
};


//哈士奇的构造韩式
function Husky(sex) {

    this.sex = sex;
}

//改变构造起的指向
Husky.prototype = new Dog("pink");
//哈士奇的原型方法
Husky.prototype.playHost = function () {

    console.log("haha xixi gaga");
};

var husky = new Husky();

console.log(husky.name, husky.weight, husky.color);

husky.eat();
husky.Biting();
husky.playHost();


//-------------------------------------------------------------------------------------------------------------------//


//借用构造函数


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

function Person24(name, age, sex, weight) {

    this.name = name;
    this.age = age;
    this.sex = sex;
    this.weight = weight;
}

Person24.prototype.sayHi = function () {

    console.log("Hello");
};


function Student24(name, age, sex, weight, score) {

    //重点: 借用构造函数
    //解决了属性继承，并且值不重复的问题
    //缺陷: 父级类别中的 "方法" 不能继承
    Person24.call(this, name, age, sex, weight);
    this.score = score;
}


//学生继承了 人的类别中的数据
// Student24.prototype = new Person24("alpha", 18, "male", "80kg");


// var stu24 = new Student24(110);
// console.log(stu24.name, stu24.age, stu24.sex, stu24.score);

//借用构造函数.call 后，可以直接在实例中传入新的参数值
var stu24 = new Student24("alpha", 18, "male", "80kg", 80);
console.log(stu24.name, stu24.age, stu24.sex, stu24.score);

// stu24.name = "beta";
// stu24.age = 20;
// stu24.sex = "female";

var stu25 = new Student24("beta", 18, "male", "90kg", 90);
console.log(stu25.name, stu25.age, stu25.sex, stu25.score);

var stu26 = new Student24("omega", 18, "male", "100kg", 100);
console.log(stu26.name, stu26.age, stu26.sex, stu26.score);


//为了数据共享，改变原型指向，做到了继承( 通过改变原型指向实现的继承 )
//缺陷: 因为改变原型指向的同时实现了继承，直接初始化了属性，继承过来的属性值都是一样的，所以这是问题


//解决方案: 继承的时候，不用改变原型的指向，直接调用父级的构造函数的方式垃圾 为属性赋值
//借用构造函数: 把要继承的父级的构造函数是拿过来，使用一下就可以了


//-------------------------------------------------------------------------------------------------------------------//


/**
 *
 * 组合继承
 *
 * 原型继承
 * 借用构造函数继承
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Person26(name, age, sex) {

    this.name = name;
    this.age = age;
    this.sex = sex;
}

Person26.prototype.sayHi = function () {

    console.log("阿尼哈瑟有");
};

function Student26(name, age, sex, score) {

    Person26.call(this, name, age, sex);
    this.score = score;
}

//改变原型指向
Student26.prototype = new Person26();
Student26.prototype.eat = function () {

    console.log("真香");
};


var stu30 = new Student26("alpha", 18, "male", "80kg");
console.log(stu30.name, stu30.age, stu30.sex, stu30.score);

stu30.sayHi();
stu30.eat();


//-------------------------------------------------------------------------------------------------------------------//


//拷贝继承

//把一个对象中的属性或者方法直接复制到另一个对象中


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var obj1 = {

    name: "小糊涂",
    age: 20,
    sleep: function () {

        console.log("go bed，right now");
    }
};


//改变地址的指向
//
//仅仅改变 栈中的地址( 假拷贝 )，指向改变
//
var obj2 = obj1;
console.log(obj2.name, obj2.age);

obj2.sleep();


var obj3 = {};
for (var key in obj1) {

    obj3[key] = obj1[key];
}
console.log(obj3.name);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Person27() {

}

Person27.prototype.age = 10;
Person27.prototype.sex = "male";
Person27.prototype.height = 100;
Person27.prototype.play = function () {

    console.log("so happy")
};

var obj4 = {};


//Person27( 构造函数 )中 prototype 就是一个对象，
//age,sex,height,play 就是属性或方法
//
//浅拷贝

for (var key1 in Person27.prototype) {

    obj4[key1] = Person27.prototype[key1];
}

console.dir(obj4);


//-------------------------------------------------------------------------------------------------------------------//


//逆推继承看原型


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function F1(age) {

    this.age = age;
}

function F2(age) {

    this.age = age;
}


F2.prototype = new F1(10);

function F3(age) {

    this.age = age;
}

F3.prototype = new F2(20);


var f3 = new F3(30);

console.log(f3.age);


//-------------------------------------------------------------------------------------------------------------------//


//高阶函数声明


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


if (true) {

    function f4() {

        console.log("Chrome、firefox export");
    }
} else {

    function f5() {

        console.log("IE8 export");
    }
}

f4();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










