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
// f1.call(obj, para1, para2;
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

    console.log('This function is a method of the window object');
}

//obj is a object
var obj = {

    age: 10,
    sex: 'male'
};

//改变 this 的指向
window.f2.apply(obj, [10, 20]);
window.f2.call(obj, 10, 20);

console.dir(obj);               //f2


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

//接收函数返回值
var r1 = per.sayHi.apply(stu, [10, 20]);
var r2 = per.sayHi.call(stu, 10, 20);

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

Person.prototype.sayHi = function (x, y) {

    console.log((x + y) + ': ==> ' + this);
};


function Student4(age) {

    this.age = age;
}


var per4 = new Person4(10);         //实例对象
var stu4 = new Student4();               //实例对象


per4.apply(stu4, [10, 20]);
sayHi.call(stu4, 10, 20);


//-------------------------------------------------------------------------------------------------------------------//





//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


























//-------------------------------------------------------------------------------------------------------------------//










































