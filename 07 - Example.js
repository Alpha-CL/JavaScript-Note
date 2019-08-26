///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.01: 创建一个有手机型号、手机颜色、可以打电话、发短信的 手机对象

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


//NO.1: 创建一个有手机型号、手机颜色、可以打电话、发短信的 手机对象
var phone = new Object();

phone.size = "iphone6";
phone.color = "black";

phone.call = function () {
    console.log("Call me");
}
phone.msg = function () {
    console.log("Send a message to me");
}

phone.call();
phone.msg();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.02: 构造函数的形式创建对象
function createObject(name, age) {      //step - 1 add name and age variable

    //create a new object
    var obj = new Object();


    //Add property

    //Step - 1
    //obj.name = "alpha";               //add name variable
    //obj.age = "18";                   //add age variable

    //Step - 2
    //name and age is pair
    obj.name = name;
    obj.age = age;


    //Add method
    obj.sayHi = function () {
        console.log("Hello , My name is " + this.name + ", " + this.age + " year old.");
    };
    return obj;
}


//批量生产对象, 对象名称相同，值不同
var per1 = createObject("beta", 20);
var per2 = createObject("omega", 18);

per1.sayHi();
per2.sayHi();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Principle of this attribute
function myFunction(name, size) {

    this.name = name;
    this.size = size;

    this.sayHello = function () {
        console.log("Hello world");
    };
}


//Step - 1
//在内存中开辟控件，储存创建新的对象


//Step - 2
//Set this as the current object


//Step - 3
//Set the value of the properties and method of the Object


//Step - 4
//Return this object


//自定义方式创建函数
//自定义构造函数主要用于创建对象
//构造函数的函数名规则: " 大驼峰命名 "
function myDefinedFunction() {


    //Create a new objectl
    var obj = new Object();


    //Add property
    obj.name = "alpha";
    obj.age = 18;


    obj.sayHi = function () {
        console.log("Hello, My name is " + this.name + ", " + this.age + " year old.");
    };
    return obj;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






































