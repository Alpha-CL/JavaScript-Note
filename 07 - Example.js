///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.01: 创建对象( 一个有手机型号、手机颜色、可以打电话、发短信的 手机对象 )

//NO.01_Epl_01: 创建对象( 一个电脑对象，有眼色、重量、品牌、型号，可以看电影、听音乐、打游戏、敲代码 )

//NO.01_Epl_02: 创建对象( 穿件一个按钮对象，有宽、高、背景颜色颜色，可以点击、鼠标进入 )

//NO.01_Epl_03: 创建对象( 一个车对象，有重量、颜色、牌子，可以载入、拉货 )


//NO.02: 如何一次性创建多个对象( 把创建对象的代码封装在一个函数中 )

//NO.02_01: 创建函数对象

//NO.02_02: 一次性创建多个函数对象


//NO.03: 自定义构造函数

//NO.03_01: 获取构造函数数据类型 instanceof

//NO.03_02: 自定义构造函数原理( 内部发生四件事 )

//NO.03_03: 示例 - 1( 创建一个图片的对象，图片有宽、有高、有大小( 4M ), 图片可以展示内容 )

//NO.03_04: 示例 - 2( 创建一个小猫的对象, 猫有颜色、体重、年龄, 小猫可以抓耗子, 可以打架 )


//NO.04: 字面量的方式创建对象

//NO.04_1: 字面量的方式创建对象的缺陷


//NO.05: 设置和获取属性的另一种方式


//NO.06: Json 格式的数据

//NO.06_01: for ... in 循环，遍历 Json 数据


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.1: 创建对象( 一个有手机型号、手机颜色、可以打电话、发短信的 手机对象 )

var phone = new Object();

//Add properties
phone.size = "iphone6";
phone.color = "black";

//Add method
phone.call = function () {
    console.log("Call me");
};
phone.msg = function () {
    console.log("Send a message to me");
};

//Invoking function
phone.call();
phone.msg();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.02: 如何一次性创建多个对象( 把创建对象的代码封装在一个函数中 )


// 创建函数对象

// function myNewObject() {                         //Add name and age parameter
//
//     //Create a new object
//     var obj = new Object();
//
//     //Add properties
//     obj.name = "alpha";                          //Add name variable
//     obj.age = 18;                                //Add age variable
//
//     //Add method
//     obj.sayHi = function () {
//         console.log("Hello, My name is " + this.name + ", " + this.age + " year old.");
//     }
//     return obj;
// }
//
// var per2 = myNewObject();
// per2.sayHi();


// 一次性创建多个函数对象

function myNewObject(name, age) {

    //Create a new object
    var obj = new Object();

    //Add properties
    obj.name = name;
    obj.age = age;

    //Add method
    obj.sayHi = function () {
        console.log("Hello, My name is " + this.name + ", " + this.age + " year old.");
    };
    return obj;
}

var per21 = myNewObject("beta", 20);
var per22 = myNewObject("omega", 18);

per21.sayHi();
per22.sayHi();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.03: 自定义构造函数
//自定义构造函数主要用于 ==> 创建对象
//自定义构造函数命名规则: " 大驼峰命名 "
//函数和构造函数的区别: 函数命名的首字母谁否是大写( 如果是小写: 普通函数 -> 用于调用; 如果是大写: 自定义构造函数 -> 创建对象 )


//定义构造函数

// function myDefinedFunction() {                      //小驼峰命名( 普通函数 )
//
//     //Create a new object
//     var obj = new Object();                         //Remove statement
//
//     //Add property
//     obj.name = "alpha";                             //Add "this" keyword
//     obj.age = 18;                                   //Add "this" keyword
//
//     //Add method
//     obj.sayHi = function () {                       //Add "this" keyword
//         console.log("Hello, My name is " + this.name + ", " + this.age + " year old.");
//     };
//     return obj;                                     //Remove statement
// }
//
// var per3 = myDefinedFunction();
// per3.sayHi();


//==> 自定义构造函数

// function MyDefinedFunction() {                       //大驼峰命名( 自定义构造函数 ) !important
//
//     //Remove "var = obj = new Object();"
//
//     this.name = "alpha";                             //Create new
//     this.age = 18;
//
//     this.sayHi = function () {
//         console.log("Hello, My name is " + this.name + ", " + this.age + " year old.");
//     }
//
//     //Remove "return obj;"
// }
//
// var per31 = new MyDefinedFunction();
//
// console.log(obj.name);
// console.log(obj.age);
// per31.sayHi();


//==> 自定义构造函数创建对象

function MyDefinedFunction(name, age) {                   //大驼峰命名( 自定义构造函数 ) !important

    this.name = name;
    this.age = age;

    this.sayHi = function () {
        console.log("Hello, My name is " + this.name + ", " + this.age + " year old.");
    };
}

var per32 = new MyDefinedFunction("alpha", 18);
var per33 = new MyDefinedFunction("alpha2", 19);

per32.sayHi();
per33.sayHi();

console.log(per32 instanceof MyDefinedFunction);            //true
console.log(per33 instanceof MyDefinedFunction);            //true


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.03_01 如何获取对象类型

//基础获取

function MasterObjectInstanceof(name, age) {

    this.name = name;
    this.age = age;

    this.sayHi = function () {
        console.log("Hello, My name is " + this.name + ", " + this.age + " year old.");
    };
}

var per301 = new MasterObjectInstanceof("alpha", 18);
var per302 = new MasterObjectInstanceof("alpha2", 19);

console.log(per301 instanceof MasterObjectInstanceof);            //true
console.log(per302 instanceof MasterObjectInstanceof);            //true


//判断获取

function SonrObjectInstanceof(name, age, sex) {

    this.name = name;
    this.age = age;
    this.sex = sex;
}

var son = new SonrObjectInstanceof("son", 20, "male");

console.log(son instanceof MasterObjectInstanceof);               //false


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.03_02: 自定义构造函数原理

function MyDefinedFunction302(name, age) {

    this.name = name;
    this.age = age;

    this.sayHi = function () {
        console.log("Hello, My name is " + this.name + ", " + this.age + " year old.");
    };
}

var per305 = new MyDefinedFunction302("alpha", 18);

per305.sayHi();


//Step - 1
//在内存中 开辟( 申请一块空闲的 ) 空间，储存创建的新对象

//Step - 2
//把 "this" 设置为当前的对象
// this.name;;
// this.age;
// this.sayHi;

//Step - 3
//设置对象的属性和方法的值
// this.name = name;
// this.age = age;
//
// this.sayHi = function () {
//     console.log("Hello, My name is " + this.name + ", " + this.age + " year old.");
// };

//Step - 4
//把 "this" 这个对象返回


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.04: 字面量的方式创建对象

//字面量方式创建对象

// var newObject = {};
//
// //Add properties
// newObject.name = "alpha";
// newObject.age = 18;
//
// //Add method
// newObject.sayHello = function () {
//     console.log("My name is " + newObject.name + ".");
// };
//
// newObject.sayHello();


//字面量方式创建对象

var newObject = {

    //Add properties
    name: "alpha",
    age: 18,

    //Add method
    sayHello: function () {
        console.log("My name is " + this.name + ".");
    }
};

newObject.sayHello();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//字面量创建对象的缺陷
//一次性对象

var myNewObjectShort = {

    name: "alphaNoChanged",                     //修改对象数据方法 - 2
    agea: 38,
    sex: "male"
};

//修改对象数据方法 - 1
myNewObjectShort.name = "beta";                 //Change name = "beta";

console.log(myNewObjectShort.name);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.05: 设置和获取属性的另一种方式

//Basic Code
function anotherChangedMethod(name, age) {

    this.name = name;
    this.age = age;

    this.play = function () {
        console.log("I really like playing games ")
    };
}

var changedValue = new anotherChangedMethod("alpha", 20);


//Change name value on object

//Method - 1

// changedValue.name = "Rebecca";
// console.log(changedValue.name);
// changedValue.play();

//Method - 2

changedValue["name"] = "Rebecca";
console.log(changedValue["name"]);
changedValue["play"]();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.06_01: for ... in 循环，遍历 Json 数据

//对象中确实有这个属性用 " . "
//对象中


var json = {

    "name": "alpha",
    "age": "10",
    "sex": "male",
};


//
for (var key in json) {

    // console.log(key);
    // console.log(json[key]);
    console.log(key + ": " + json[key]);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




















