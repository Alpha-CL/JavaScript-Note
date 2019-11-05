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


// apply 和 call
// 可以改变 this 的指向
//
// f1.apply(obj, [para1, para]);
// f1.call(obj, para1, para2);
//
// fn.call(obj, para1, para2);
// methodName.call(obj, para1, para2);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function f1(x, y) {

    console.log('result: ' + (x + y) + this);
}

window.f1(10, 20);  //window 可省略


//没有传参数，调用此参数的对象是 window
// f1.apply();
// f1.call();
//传入参数 null，调用此参数的对象是 window
// f1.apply(null);
// f1.call(null);


//方法效果一样，传参形式不同
f1.apply(null, [100, 200]);             //300
f1.call(null, 100, 200);                //300

var result1 = f1.apply(null, [10, 20]);         //30
var result2 = f1.call(null, 10, 20);            //30


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function f2(x, y) {

    console.log('This function is a method of the window object: ' + (x + y) + this);
}

//obj is a object
var obj = {

    age: 10,
    sex: 'male'
};

//改变 this 的指向
window.f2.apply(obj, [10, 20]);             //30[object, window]
window.f2.call(obj, 10, 20);                //30[object, object]
console.dir(obj);                           //f2  ==> object


/**
 *
 * apply 和  call 可以改变 this 的指向
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Person(age, sex) {

    this.age = age;
    this.sex = sex;
}

//通过原型添加方法
Person.prototype.sayHi = function (x, y) {

    console.log('hello ' + this.sex);

    //如果有返回值，则需要用变量去接收
    return 1000;
};

//实例初始化 Person
var per = new Person(10, 'male');

//调用方法
per.sayHi();


function Student(name, sex) {

    this.name = name;
    this.sex = sex;
}

var stu = new Student('beta', 'female');


//未接受返回值，只调用
per.sayHi.apply(stu, [10, 20]);         //hello female
per.sayHi.call(stu, 10, 20);            //hello female


//接收函数返回值( 接受返回值，必须用变量 )
var r1 = per.sayHi.apply(stu, [10, 20]);        //hello female 1000
var r2 = per.sayHi.call(stu, 10, 20);           //hello female 1000

console.log(r1);
console.log(r2);


// --------------------------------------------------------------------------------------------------//


function f3(x, y) {

    console.log(x + y + '==>' + this);

    return 'This is function return value';
}

//改变 this 指向
var obj3 = {

    sex: 'male'
};

// var r3 = f3.apply(null, [10, 20]);          //f1 中 的 this 指向 window
// console.log(r3);
//
// var r4 = f3.call(null, 10, 20);             //f1 中 的 this 指向 window
// console.log(r4);


//改变指向
var r5 = f3.apply(obj3, [10, 20]);          //f1 中 的 this 指向 obj3
console.log(r5);

var r6 = f3.call(obj3, 10, 20);             //f1 中 的 this 指向 obj3
console.log(r6);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//方法改变 this 的指向

function Person4(age) {

    this.age = age;
}

Person4.prototype.sayHi = function (x, y) {

    console.log((x + y) + ': ==> ' + this);
};


function Student4(name) {

    this.name = name;
}


var per4 = new Person4(10);                 //实例对象
var stu4 = new Student4(20);               //实例对象


per4.sayHi.apply(stu4, [10, 20]);
per4.sayHi.call(stu4, 10, 20);


/**
 *
 * apply &  call use method
 *
 * @apply attribute
 * fnName.apply(object, [para1, para2, ... paraN]);
 * propertyName.apply(object, [para1, para2, ... paraN]);
 *
 * @call attribute
 * fnName.call(object, para1, para2, ... paraN]);
 * propertyName.call(object, [para1, para2 ... paraN)
 *
 *
 * 作用: 改变 this 指向
 * 不同的地方: 参数传递的方式不同
 *
 * 只要是想使用别的对象的方法，并且希望这个方法是当前对象的
 * 那么就可以使用 apply 或 call 的方法改变 this 指向
 *
 */

//-------------------------------------------------------------------------------------------------------------------//


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function f4() {

    console.log(this);          //f4();
}

console.dir(f4);

f4.apply();                     //window
f4.call();                      //window


//所有函数都是 Function 的实例对象
//
//apply 和 call 实际上并不是在函数的实例对象中，而是在 Function 的 prototype 中
//
console.log(f4.__proto__);                              //f4 () {( native code )}
console.log(f4.__proto__ === Function.prototype);       //true


function Person5() {

    this.sayHi = function () {

        console.log('This is Person5');
    }
}

Person5.prototype.eat5 = function () {

    console.log('This is eat5');
};

var per5 = new Person5();

per5.sayHi();               //This is Person5
per5.eat5();                //This is eat5

console.dir(per5);


//-------------------------------------------------------------------------------------------------------------------//


//bind 方法

/**
 *
 * apply 和 call 是调用的时候改变了 this 的指向
 *
 * bind 是复制的时候，改变 this 的指向
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function f6(x, y) {

    console.log((x + y) + ' ==> ' + this);
}

//正常调用
f6(20, 40);               //60 ==> [object  window]

//
f6.bind();                      //NaN ==> 30

/**
 * 复制一份的时候，把参数传入 f6 函数中
 *
 * null == this ===> window
 *
 * bind 方式是复制的意思
 * 参数可以在复制的时候传进去
 * 也可以在复制之后调用的时候穿进去
 *
 */


var ff6 = f6.bind(30, 30);
var ff7 = f6.bind(null, 30, 30);

ff6();                          //NaN ==> 30
ff7();                          //NaN ==> 30


function Person7(age) {

    this.age = 1000;
}

Person7.prototype.eat7 = function () {

    console.log('This is eat7');
};

var per7 = new Person7();

//复制 fn 的时候 修改 this 的指向
var ff8 = f1.bind(per, 10, 30);

ff8();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Person10(age) {

    this.age = age;
}

Person10.prototype.play = function () {

    console.log(this + ' ==> ' + this.age);
};

function Student10(age) {

    this.age = age;
}

var per10 = new Person10();
var stu10 = new Student10();


var ff10 = per10.play.bind(stu10);

ff10();

/**
 *
 * bind Method
 *
 * fnName.bind(object, para1, para2, ... paraN); ==> return: 复制之后的函数
 *
 * property.bind(object, para1, para2 ... paraN); ==> return: 复制之后的方法
 *
 */


//-------------------------------------------------------------------------------------------------------------------//


//bind 方法使用


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function ShowRandom() {

    //1 - 10 的随机数
    this.number = parseInt(Math.random() * 10 + 1);
}

//添加原型方法
ShowRandom.prototype.show1 = function () {

    //改变了 定时器中 this 的指向
    window.setInterval(this.show2.bind(this), 10000);
};

//添加原型方法
ShowRandom.prototype.show2 = function () {

    //显示随机数
    console.log(this.number);
};

//实例对象
var sr = new ShowRandom();

//调用方法，输出随机数
sr.show1();
sr.show2();


//-------------------------------------------------------------------------------------------------------------------//


//函数中的几个成员


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function f11(x, y) {

    //name: 函数名( 只读 )，无法修改
    console.log(f11, name);

    //arguments.length: 实参的个数
    console.log(f11, arguments.length);

    //length: 形参的个数
    console.log(f11, length);

    //caller: 调用者( '其他函数' 调用 这个函数，返回 '其他函数' )
    console.log(f11.caller);
}

function f12() {

    console.log("This is f12");

    f11(3, 6);
}


f11(10, 20);
f11(10, 20, 30, 40);
console.dir(f11);

/**
 *
 * name: 函数的名字( 只读 )，无法修改
 *
 * arguments.length: 实参的个数
 *
 * length: 形参的个数
 *
 * caller: 调用者( '其他函数' 调用 这个函数，返回 '其他函数' )
 *
 */


//-------------------------------------------------------------------------------------------------------------------//


//高阶函数 - 回调函数( 函数作为参数使用 )


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//传入命名函数
function invokeFn(callBackFn) {

    console.log('This is invokeFn');

    callBackFn();
}


//传入匿名函数
invokeFn(function () {

    console.log('This is callBackFn');

});


//-------------------------------------------------------------------------------------------------------------------//


//定时器中传入函数


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function f20(fn) {

    setInterval(function () {

        console.log('定时器开始');
        fn();
        console.log('定时器结束');

    }, 10000)
}

f20(function () {

    console.log('好困，好累，好想睡觉');

});


//-------------------------------------------------------------------------------------------------------------------//


//高阶函数 - 函数作为返回值使用


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function f21() {

    console.log('f21 函数开始');

    return function () {

        console.log('我是 f21 函数，但是此时作为返回值使用')
    };

    // console.log('f21 函数结束');         //return 后无法显示此行
}

var ff = f21();

ff();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var num = 10;
console.log(typeof num);                //获取 num 这个变量的数据类型

var obj1 = {};                          //对象
console.log(typeof num);                //获取这个对象 是不是某个数据类型
console.log(obj instanceof Object);     //判断这个对象是不是另外一个数据类型，返回 true


//获取 某个对象的数据类型
console.log(Object.prototype.toString());                      //[object Object]
console.log(Object.prototype.toString.call([]));        //[object Array]

var arr = [10, 20, 30];

console.log(Object.prototype.toString.call(arr));               //[object Array]
console.log(Object.prototype.toString.call(new Date()));        //[object Date]


Object.prototype.toString.call(arr);
/**
 *
 *
 * Object.prototype.toString.call(对象);
 *
 * 此时得到的就是这个对象的类型
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 * 获取某个对象的类型是不是你传入的类型
 *
 * [10, 20, 30] 是不是 '[object Array]'
 *
 * type == 变量 == 参数 == '[object Array]'
 *
 * obj == 变量 == 参数 == '[10, 20, 30]'
 *
 */


//判断这个对象和传入的类型是不是同一个类型
function getFunc(type) {

    return function (obj) {

        return Object.prototype.toString.call(obj) === type;
    }
}


var ff1 = getFunc('[object Array]');

var result = ff1([10, 20, 30]);

console.log(result);                    //true

var ff2 = getFunc('[object Object]');


var dt22 = new Date();

var result3 = ff2(dt22);

console.log(result3);                   //false


//-------------------------------------------------------------------------------------------------------------------//


//函数作为返回值练习


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var arr21 = [1, 100, 20, 300, 40, 50, 10];


//排序: 函数作为参数使用，匿名函数作为 sort 方法的参数使用，那么此时饿匿名函数中有两个函数
//不稳定
//
// arr21.sort();
//
// console.log(arr21);


arr21.sort(function (obj1, obj2) {

    if (obj1 > obj2) {

        return 1;

    } else if (obj1 == obj2) {

        return 0;

    } else {

        return -1;
    }
});

console.log(arr21);


var arr22 = ['acbe', 'abcd', 'bcedf', 'bced'];

//比较的是 ASK 码的值
arr.sort(function (a, b) {

    if (a > b) {

        return 1;

    } else if (a == b) {

        return 0;

    } else {

        return -1;
    }
});

console.log(arr22);


//-------------------------------------------------------------------------------------------------------------------//


//函数作为返回值练习


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//












//-------------------------------------------------------------------------------------------------------------------//


































