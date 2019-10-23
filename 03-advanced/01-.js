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
console.log(per1.eat == per2.eat);                  // false


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
console.log(per3.eat == per4.eat);                  //true


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


console.log(p5 == p6);                              //false
console.log(p5.eat == p6.eat);                      //true


//-------------------------------------------------------------------------------------------------------------------//


//通过构造函数实例对象，并初始化
var arr = new Array(10, 20, 30, 40);

//join 是方法，实例对象调用的方法
arr.join("|");

console.dir(arr);                                   //Array

//join方法 在实例对象 __proto__ 中
console.log(arr.__proto__ == Array.prototype);      //true


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


(function (win) {

    var num1 = 10;          //局部变量

    //JS 是一门动态类型的语言
    //对象没有属性，点了就有了
    win.num1 = num1;

})(window);

console.log(num1);


//如何把局部变量变成全局变量
//把局部变量给 window 就可以了


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







