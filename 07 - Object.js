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


//-------------------------------------------------------------------------------------------------------------------//


//创建一条黄色的小狗，叫大黄，今年三岁，250斤的重量每次走路很慢，喜欢吃大骨头


var smallDog = new Object;

//add property
smallDog.name = "大黄";
smallDog.age = "3";
smallDog.weight = "250kg";
smallDog.color = "yellow";

//add methods
smallDog.walk = function () {
    console.log("I am very slow");
};
smallDog.eat = function () {
    console.log("I like eat big boon");
};


//invoking property
console.log(smallDog.name);
console.log(smallDog.age);
console.log(smallDog.color);

//invoking method
smallDog.walk();
smallDog.eat();


//-------------------------------------------------------------------------------------------------------------------//


//推理构造函数工厂模式( 一次性创建多个个对象 )
//
//推理自定义构造函数
//


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//01. 创建 人的对象

var person = new Object();

//add property
person.name = "alpha";
person.age = "18";

//add method
person.saySeeYou = function () {

    console.log("See you again");
};

//invoking
console.log("This is a " + person.name + person.age + " object");
person.saySeeYou();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//02. 创建学生的对象

var stu = new Object();

//add property
stu.name = "beta";
stu.age = "17";

//add method
stu.sayLove = function () {

    console.log("I love you");
};

//invoking
console.log("This is a " + stu.name + stu.age + " object");
stu.sayLove();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//03. 创建 小狗对象

var dogXT = new Object();

//add property
dogXT.name = "哮天犬";
dogXT.age = "11";

//add method
dogXT.sayWang = function () {
    1

    console.log("wang wang .... !")
};

//invoking
console.log("This is a " + dogXT.name + dogXT.age + " object");
dogXT.sayWang();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//判断 人、学生、小狗 是什么对象类型
//
// 无法判断出 每个对象 所对应的相对类型


// console.log(person instanceof Person);               //ReferenceError: Person is not defined
// console.log(stu instanceof Beta);                    //ReferenceError: Stu is not defined
// console.log(dogXT instanceof DogXT);                 //ReferenceError: DogXT is not defined


//对象不能分辨出 每个对象属于什么类型
//
// objectName instanceof typeName
//
console.log(person instanceof Object);                  //Object
console.log(stu instanceof Object);                     //Object
console.log(dogXT instanceof Object);                   //Object


//-------------------------------------------------------------------------------------------------------------------//


//函数封装
//
//调用对象不可缺少的:  1. return:没有 "return" 就没有返回值
//                  2. 调用封装函数，"必须新建一个变量" 储存 "函数体"
//                  3. 调用什么就 . 什么

function createMoreObject() {

    var obj = new Object;

    //add property
    obj.name = "omega";
    obj.age = 13;

    //add method
    obj.sayGo = function () {

        console.log("I want go to " + this.name);
    };
    return obj;
}

//invoking
var master = createMoreObject();
master.sayGo();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function createMoreObject1() {

    var obj = new Object();

    //add property
    obj.name = "王大锤";
    obj.age = "11";

    //add method
    obj.sayWant = function () {

        console.log("I want " + this.name + "I want" + this.age);
    };
    return obj;
}

//create a function in new variable
var master1 = createMoreObject1();
var master2 = createMoreObject1();

//invoking property
console.log("This is a " + master.name + master.age);

//invoking method
//
//重复调用相同属性值的方法
master1.sayWant();
master2.sayWant();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//构造函数工厂模式推理

function createMoreObject2(name, age) {

    var obj = new Object();

    //add property
    obj.name = name;
    obj.age = age;

    //add method
    obj.sayYes = function () {

        console.log("My name is " + this.name + ", 今年 " + this.age);
    };
    return obj;
}

var admin1 = createMoreObject2("石榴姐", 99);
var admin2 = createMoreObject2("秋香", 18);

admin1.sayYes();
admin2.sayYes();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

//自定义构造对象函数推理

function CreateMoreObject3(name, age) {

    //add property
    this.name = name;
    this.age = age;

    //add method
    this.sayGet = function () {

        console.log("I will get " + this.name + this.age);
    };
}


//create a function in new variable
var administrator = new CreateMoreObject3("自定义构造函数", 10);

//invoking property
console.log(administrator.name);
console.log(administrator.age);

//invoking method
administrator.sayGet();


//another new CustomConstructorsObject
var administrator1 = new CreateMoreObject3("另一个自定义构造函数", 20);

administrator1.sayGet();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//自定义构造函数创建对象做了四件事( !important )
//
//多数面向对象语言的基本执行原理

// 1. 在内存中开辟空间( 申请一块空闲的空间 )，存储创建的新对象
//
// 2. 把 "this" 设置为 "当前对象"
//
// 3. 设置对象的 "属性" 和 "方法"
//
// 4. 把 "this" 这个对象返回


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//自定义构造对象函数可以用 instanceof 判断是什么类型
//
//自定义构造函数仍然属于 object 类型
//
//true； 是同一个类型
//
//false: 不是同一个类型

console.log(administrator instanceof CreateMoreObject3);            //true
console.log(administrator1 instanceof CreateMoreObject3);           //true
console.log(administrator1 instanceof Object);                      //true


console.log(administrator1 instanceof createMoreObject1);                 //false


//-------------------------------------------------------------------------------------------------------------------//


//通过自定义构造函数创建对象

//创建一个图片对象，图片有宽、有高、有大小( 4M )，图片可以展示内容


function PhotoDisplay(width, height, size) {

    //add property
    this.width = width;
    this.height = height;
    this.size = size;

    //add method
    this.displayContent = function () {

        console.log("I have " + "width = " + this.width + ", height = " + this.height + ", size = " + this.size);
    };
}

//create a function in new variable
var onePhoto = new PhotoDisplay(100, 200, 4);

//invoking method
onePhoto.displayContent();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//创建一个小猫的对象，小猫有颜色、体重、年龄，小猫可以抓耗子、可以打架

function SmallCat(color, weight, age) {

    //add property
    this.color = color;
    this.weight = weight;
    this.age = age;

    //add method
    this.catchMice = function () {

        console.log("虽然我有 " + this.weight + "， 但是我可以抓老鼠");
    };
    this.fight = function () {

        console.log("虽然我年龄 " + this.age + "，但是我打架很厉害");
    };
}

//create a function in new variable
var oneSmallCat = new SmallCat("black", 180, 250);

//invoking methods
oneSmallCat.catchMice();
oneSmallCat.fight();


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
//
// 利用构造函数传参

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
//
// 自定义构造函数主要用于 ==> 创建对象
// 自定义构造函数命名规则: " 大驼峰命名 "
// 函数和构造函数的区别: 函数命名的首字母谁否是大写( 如果是小写: 普通函数 -> 用于调用; 如果是大写: 自定义构造函数 -> 创建对象 )

// 系统的对象构造函数
//
// Object
// ==> function Object(value) {}

//定义构造函数
//
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
//
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
//
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

function SonObjectInstanceof(name, age, sex) {

    this.name = name;
    this.age = age;
    this.sex = sex;
}

var son = new SonObjectInstanceof("son", 20, "male");

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
//
// 把 "this" 设置为当前的对象
// this.name;;
// this.age;
// this.sayHi;

//Step - 3
//
// 设置对象的属性和方法的值
// this.name = name;
// this.age = age;
//
// this.sayHi = function () {
//     console.log("Hello, My name is " + this.name + ", " + this.age + " year old.");
// };

//Step - 4
//
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
//
// 字面形式创建对象类似于 数组
//
// 注意: 方法后不用加 ";"

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
//
//一次性对象

var myNewObjectShort = {

    name: "alphaNoChanged",                     //修改对象数据方法 - 2: 在源码上更改
    agea: 38,
    sex: "male"
};

//修改对象数据方法 - 1
//
// 1. 通过 "." 语法修改( 属性 )
//
myNewObjectShort.name = "beta";                 //Change name = "beta";

console.log(myNewObjectShort.name);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.05: 设置和获取属性的另一种方式

//Basic Code
//
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
//
// changedValue.name = "Rebeca";
// console.log(changedValue.name);
// changedValue.play();

//Method - 2
//
changedValue["name"] = "Rebeca";
console.log(changedValue["name"]);

//invoking method - 2
//
changedValue["play"]();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//JavaScript Object Notation( Json ) 格式的数据


//step - 1
//
// Json 数据展示

var jsonDateDisplay = {

    "name": "alpha",
    "age": "18",
    "sex": "male"
};


//step - 2
//
// invoking json date

//通过 ["keyName"] 调用 【"wordValue"]
//
// jsonName["keyName"]; ==> back ==> "wordValue"
//
console.log("json: " + jsonDateDisplay["name"]);


//推理 json 数据遍历过程
//
var jsonKey1 = "age";
//expected output: 18
//
console.log("jsonKey: " + jsonDateDisplay[jsonKey1]);
//expected output: 18


//不能调取 json 中没有的数据
//
var jsonKey2 = "weight";
//expected output: undefined


//step - 3
//
// for ... in ...

for (var key1 in jsonDateDisplay) {

    console.log(key1);
    //expected output: name age sex

    console.log(jsonDateDisplay[key1]);
    //expected output: alpha 18 male
}


//遍历数组对比
var arrDisplay = [10, 20, 30];

for (var i = 0; i < arrDisplay.length; i++) {

    console.log(arrDisplay[i]);
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NO.06_01: for ... in 循环，遍历 Json 数据

// 对象中确实有这个属性用 " . "
//
// 对象中


var json = {

    "name": "alpha",
    "age": "10",
    "sex": "male",
};


//json 数据遍历
for (var key in json) {

    //invoking jsonkey
    //
    // console.log(key);
    //expected output: name age sex

    //invoking jsonWord
    //
    // console.log(json[key]);
    //expected output: alpha 18 male

    console.log(key + ": " + json[key]);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




















