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
 * 得到一个新函数，该函数中 this 的指向，始终指向 指定的值
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


//闭包
//
// 函数 和 对象的闭包


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//函数中的闭包
//基础版本

function f31() {

    var num = 10;

    function f32() {

        console.log('fnNum = ' + num);
    }

    f32();
}

f31();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function f34() {

    var num = 20;

    return function () {

        console.log(num);
    }
}

var ff34 = f34();

ff34();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function f35() {

    var num = 30;

    return function () {

        console.log(num);

        return num;
    }
}

var ff35 = f35();

ff35();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//对象中的闭包

function f33() {

    var num = 30;

    var obj = {

        age: num
    };

    console.log('objNum = ' + obj.age);
}

f33();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function f36() {

    var num = 100;

    return {

        age: num
    };

}

var obj36 = f36();

console.log(obj36.age);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function f37() {

    var num = 70;

    num++;

    console.log(num);
}

f37();          //71
f37();          //71
f37();          //71


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function f38() {

    var num = 70;

    return function () {

        num++;
        return num;
    }
}

var ff38 = f38();

console.log(ff38());        //71
console.log(ff38());        //72
console.log(ff38());        //73


//-------------------------------------------------------------------------------------------------------------------//


//闭包产生多个相同的随机数


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function showRandom() {

    var num = parseInt(Math.random() * 10 + 1);

    console.log(num);
}

//产生了 3 个不同的随机数
showRandom();
showRandom();
showRandom();

//闭包方式，产生三个随机数，但是都是相同的

function f40() {

    var num = parseInt(Math.random() * 10 + 1);

    return function () {

        console.log(num);
    }
}

var ff40 = f40();

//产生了相同的 3 个随机数
ff40();
ff40();
ff40();


//-------------------------------------------------------------------------------------------------------------------//


//沙箱: 环境，黑盒，在一个虚拟的环境中模拟真实世界，做实验，
//     实验结果和真实世界的结果是一样的
//     但是不会影响真实世界


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// var num40 = 10;
// console.log(num + 10);

//沙箱( 自调用函数 )
(function () {

    var num = 10;
    console.log(num);

})();


//沙箱( 自调用函数 )
(function () {

    var num2 = 20;
    console.log(num2);

}());


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var num40 = 100;

(function () {

    var num40 = 10;
    console.log(num40)

}());

console.log(num);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 * 沙箱
 *
 * 自调用函数只执行一次
 *
 * 沙箱内部不会和外部环境相互影响
 *
 */

var str = "小白喜欢小黑";

(function () {

    //沙箱 内部可以访问外部的全局变量
    //
    //沙箱内部预解析提升函数声明
    // console.log(str);               //undefined

    /**
     *
     * 注意沙箱内部预解析
     *
     */

    var str = '小红喜欢小黄';

    str = str.substr(2);

    console.log(str);
}());

str = str.substr(2);
console.log(str);


//-------------------------------------------------------------------------------------------------------------------//


//递归: 函数中调用函数自己，此时就是递归，递归一定要有结束条件
//     死循环
//


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// function f60() {
//
//     console.log('从前有个山，山里有个庙，庙里有个老和尚');
//
//     f60();
// }

// f50();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var i = 0;

function f61() {

    i++;
    if (i < 5) {

        f61();
    }

    console.log('从前有个山，山里有个庙，庙里有个老和尚');
}

f61();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 * 求 n 个数字的和
 *
 * 1 + 2 + 3 + 4 + 5
 *
 */


(function () {

    var sum = 0;

    for (var i = 1; i <= 5; i++) {

        sum += i;
    }
    console.log(sum);

}());


//函数声明
function getSum(x) {

    if (x == 1) {

        return 1;
    }

    return x + getSum(x - 1);
}

//函数调用
console.log(getSum(5));


/**
 *
 * step - 1:
 *
 * getSum(5);
 * -> 5 + getSum(4);
 * -> getSum(4);
 *
 *
 * => getSum(4);
 * -> 4 + getSum(3);
 * -> getSum(3);
 *
 *
 * => getSum(3);
 * -> 3 + getSum(2);
 * -> getSum(2);
 *
 *
 * => getSum(2);
 * -> 2 + getSum(1);
 * -> getSum(1);
 *
 *
 * => getSum(1);
 * -> x == 1;
 * -> return 1;
 *
 *
 * => getSum(2)
 * -> 1 + getSum(2);
 * => 1 + 2  = 3
 * -> getSum(3);
 *
 *
 * => getSum(3);
 * -> 2 + getSum(3);
 * -> 1 + 2 + 3 = 6
 * -> getSum(4);
 *
 * => getSum(4);
 * -> 3 + getSum(4);
 * -> 1 + 2 + 3 + 4 = 10
 * -> getSum(5)
 *
 *
 * => getSum(5);
 * -> 4 + getSum(5);
 * -> 1 + 2 + 3 + 4 + 5 = 15
 *
 */


//-------------------------------------------------------------------------------------------------------------------//


//求一个数字各个数位上数字的和


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function getEverySum(x) {

    if (x < 10) {

        return x;
    }
    return x % 10 + getEverySum(parseInt((x / 10)));
}

console.log(getEverySum(1364));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//斐波那契数列


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function getFib(x) {

    if (x == 1 || x == 2) {

        return 1;
    }
    return getFib(x - 1) + getFib(x - 2);

}

console.log(getFib(12));


//-------------------------------------------------------------------------------------------------------------------//


























