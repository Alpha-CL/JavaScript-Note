////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.01: 变量语法

//Var Syntax

var varName1;
console.log(varName1);                  //undefined

var varName2 = "varValue2";
console.log(varName2);                  //"varValue"


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Let Syntax

function letSyntax() {

    let letName1 = "varValue1";

    console.log(letName1);              //"varValue"
}

letSyntax();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Const Syntax
const cntName1 = 10;

// const cntName1 = 20;                 //cntName1 has already been declared

console.log(cntName1);                  //10


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.01_Epl_01.1: 变量交换 - 1( 利用第三方变量交换 )

var num1 = 10;
var num2 = 20;

//新建变量 temp 存放 num1 的值
var temp = num1;                        //10

//新建变量 num1 存放 num2 的值
//此时的 num1 是新的原始数据单元
var num1 = num2;                        //20

//变量 num 2 存放 "temp = num1" 的值
var num2 = temp;                        //10


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.01_Epl_01.2: 变量交换 - 2( 新建同名变量交换，使用于数字 )
//主要理解：新声明的重名变量为新的原始数据单元

var num3 = 10;
var num4 = 20;

//新建变量 num3 存放 num3 和 num4 的和
//此时的 num3 是新的原始数据单元
var num3 = num3 + num4;                 //30

//利用新建变量 num3 减去原有的 num4 等于 10
num4 = num3 - num4;                     //10

//利用新建变量 num3 减去新赋值的 num4 等于 20
num3 = num3 - num4;                     //20

console.log(num3);                      //10
console.log(num4);                      //20


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.01_Epl_01.3: 变量交换 - 3( 位运算( C 语言 ) )

var num5 = 10;
var num6 = 20;

num5 = num5 ^ num6;
num6 = num5 ^ num6;
num5 = num5 ^ num6;

console.log(num5, num6);                //20 10

//原理解释:
//把数字 10 和 20 转换为 计算机中 二进制的 10 和 20 的数字放在一起
//找到 10和20 的二进制的 源码 的 反码 的 补码放在一起，并且是正数的情况下
//接着进行位移的运算


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.02: 数据类型展示

//Number

// -> Integer
var numberInt = 10;
// -> Float
var numberFlt = 9.9;


//不要用小数验证小数( 语言 BUG )
var flt1 = 0.1;
var flt2 = 0.2;
var fltSum = flt1 + flt2;

console.log(fltSum);

//console.log(fltSum == 0.3);
//expected output: false


// -> 正无穷
var numInfBig = Infinity;
// -> 负无穷
var numInfSmall = -Infinity;


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//MAX_VALUE: JS 中的最大值
function multiplyMax(x, y) {

    if (x * y > Number.MAX_VALUE) {

        return ("Process as Infinity");
    }
    return (x * y);
}

console.log(multiplyMax(1.7976931348623157e+308, 1));
//expected output: 1.7976931348623157e+308
console.log(multiplyMax(1.7976931348623157e+308, 2));
//expected output: "Process as Infinity"


//MIN_VALUE: JS 中的最小值
function multiplyMin(x, y) {

    if (x * y < Number.MIN_VALUE) {

        return ("Process as -Infinity");
    }
    return (x * y);
}

console.log(multiplyMin(5e-324, 1));
//expected output: 5e-324
console.log(multiplyMin(-1.7976931348623157e+308, 2));
//expected output: Process as -Infinity


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NaN
// -> not a number

// NaN === NaN;                             //false
// Number.NaN === NaN;                      //false

//isNaN
// -> is not a number

isNaN(NaN);                                 //true
isNaN(Number.NaN);                          //true


function valueIsNaN(v) {

    return v !== v;
}

console.log(valueIsNaN(1));             //false
console.log(valueIsNaN(NaN));              //true
console.log(valueIsNaN((isNaN)));          //true


//-------------------------------------------------------------------------------------------------------------------//


//String
var myString = "This is a string";


//-------------------------------------------------------------------------------------------------------------------//


//Boolean

// -> True
var booleanTrue = true;
// -> False
var booleanFalse = false;


//-------------------------------------------------------------------------------------------------------------------//


//Null

// typeof null;                         //"object" (not "null" for legacy reasons)

// null === null;                       //true
// null == null;                        //true
// !null;                               //true

var myNull = null;                     //null


//-------------------------------------------------------------------------------------------------------------------//


//Undefined

// typeof undefined;                     //undefined

// -> variable undefined
var myUndefined;
console.log(myUndefined);               //undefined

// -> function undefined
function newFunction() {
    var isUndefined;
    console.log(isUndefined);           //undefined
}

newFunction();


//-------------------------------------------------------------------------------------------------------------------//


//Symbol


//-------------------------------------------------------------------------------------------------------------------//


//Object


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//typeof

//typeof Numbers

console.log(typeof 37 === 'number');
console.log(typeof 3.14 === 'number');
console.log(typeof 42 === 'number');
console.log(typeof Math.LN2 === 'number');

console.log(typeof Infinity === 'number');
console.log(typeof NaN === 'number');
console.log(typeof Number('1') === 'number');


console.log(typeof 42n === 'bigint');
//BigInt 是一个内置对象，它提供了一种表示大于2 53的整数的方法，
//这是  JavaScript 可以用 Number 原语可靠地表示的最大数字。
//BigInt 可以用于任意大整数


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//typeof Strings

console.log(typeof '' === 'string');

console.log(typeof 'hello' === 'string');
console.log(typeof 'hello word' === 'string');

console.log(typeof '1' === 'string');
console.log(typeof (typeof 1) === 'string');

console.log(typeof String(1) === 'string');
//"String()" 将任何内容转换为字符串，比 ".toString" 更安全


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//typeof Boolean

console.log(typeof true === 'boolean');
console.log(typeof false === 'boolean');

//Boolean(); == !!();
console.log(typeof Boolean(1) === 'boolean');
console.log(typeof !!(1) == 'boolean');


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//typeof Symbols

// console.log(Symbol() === 'symbol');                            //false
// console.log(Symbol('foo') === 'symbol');                       //false
// console.log(Symbol.iterator === "symbol");                     //false


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//typeof undefined

console.log(undefined === 'undefined');                                 //false
// console.log(declaredButUndefinedVariable === 'undefined');           //undefined
// console.log(undeclareadVariable === 'undefined');                    //undefined


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//typeof Object

//使用数组: isArray 或 Object .prototype .toString .call
//对象和数组的区别

console.log(typeof [1, 2, 3,] === 'object');
console.log(typeof new Date() === 'object');
console.log(typeof /regex/ === 'object');

// console.log(typeof new Boolean(true) === 'object');                   //true
// console.log(typeof new Boolean(1) === 'object');                      //true
// console.log(typeof new Boolean(adc) === 'object');                    //false


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//typeof Function

// console.log(typeof function () {} === 'function');                      //true
// console.log(class c {} === 'function');                                 //false
// console.log(Math.sin === 'function');                                   //false


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Number Method

//isNaN
// -> is a number -> true
console.log(isNaN(123));                   //true

// -> is not a number -> false
//console.log(isNaN(adc));                         //false


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

//Number()
//严格模式

console.log(Number("10"));                    //10
console.log(Number("10afrewssa"));            //NaN
console.log(Number("g10"));                   //NaN
console.log(Number("1fsd0"));                 //NaN
console.log(Number("10.98"));                 //10
console.log(Number("10.98dwafag"));           //NaN


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//parseInt
//Number.parseInt === parseInt;                    //true

console.log(Number.parseInt("10"));                      //10
console.log(Number.parseInt("10afrewssa"));              //10
console.log(Number.parseInt("g10"));                     //NaN
console.log(Number.parseInt("1fsd0"));                   //1
console.log(Number.parseInt("10.98"));                   //10
console.log(Number.parseInt("10.98dwafag"));             //10


function roughScale(x, base) {

    var parsed = Number.parseInt(x, base);

    if (Number.isNaN(parsed)) {             //if x is a number, return 0

        return 0;
    }
    return parsed * 100;                    //if x is not a number, return parsed * 100
}

console.log(roughScale(' 0xF', 16));
//expected output: 1500

console.log(roughScale('321', 2));
//expected output: 0


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//parseFloat
//Number.parseFloat(string)

console.log(Number.parseFloat("10"));                    //10
console.log(Number.parseFloat("10afrewssa"));            //10
console.log(Number.parseFloat("g10"));                   //NaN
console.log(Number.parseFloat("1fsd0"));                 //1
console.log(Number.parseFloat("10.98"));                 //10.98
console.log(Number.parseFloat("10.98dwafag"));           //10.98


function circumference(r) {

    if (Number.isNaN(Number.parseFloat(r))) {

        return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;            //Math.PI == 3.1415926 ...
}

console.log(circumference('4.567abcdefgh'));
//expected output: 28.695307297889173

console.log(circumference('abcdefgh'));
//expected output: 0


//-------------------------------------------------------------------------------------------------------------------//


//.toString()

//String.length

var strLength = "what do you want";
console.log(strLength.length);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

//两个字符串连接

var str1 = "10";
var str2 = "20";

console.log(str1 + str2);          // str3 == 1020


//一个字符串和其他类型连接

var str3 = "10";
var str4 = 20;

console.log(str3 + str4);          // str3 = 1020


//一个字符串减去不是字符串的类型

var str5 = "10";
var str6 = 20;

console.log(str5 - str6);
// 浏览器自动 ( 隐式转换 ) 把字符串类型转成了数字类型进行计算


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//string = object.toString();

//Let's imagine an <a id="myAnchor" href="https://developer.mozilla.org/en-US/docs/HTMLHyperlinkElementUtils/toString"> element is in the document

// var anchor = document.getElementById('myAnchor');

// var result = anchor.toString();
//Return: 'https://developer.mozilla.org/en-US/docs/HTMLHyperlinkElementUtils/toString'


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//String()
//Strict mode
//String() 可以强行把没有意义的类型，转换为 字符串

var numNull = null;
var numUndefined = undefined;

console.log(String(numNull));
//expected output: "numNull"

console.log(String(numUndefined));
//expected output: "numUndefined"


//-------------------------------------------------------------------------------------------------------------------//


//Boolean

// -> false: 0、-0、false、NaN、undefined、""、false

// var bNoParam = new Boolean();
// var bZero = new Boolean(0);
// var bNull = new Boolean(null);
// var bEmptyString = new Boolean('');
// var bfalse = new Boolean(false);



// -> true: is

// var btrue = new Boolean(true);
// var btrueString = new Boolean('true');
// var bfalseString = new Boolean('false');
// var bSuLin = new Boolean('Su Lin');
// var bArrayProto = new Boolean([]);
// var bObjProto = new Boolean({});


//-------------------------------------------------------------------------------------------------------------------//


//算数运算符

//赋值运算符: "="

//加: "+"

//减: "-"

//乘: "*"

//除: "\"

//余: "%"


//-------------------------------------------------------------------------------------------------------------------//


//算数运算符表达式 - 一元运算符


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//算数运算符表达式 - 二元运算符


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//算数运算符表达式 - 三元运算符


//-------------------------------------------------------------------------------------------------------------------//


//复合运算符

//加等于: "+="

//减等于: "-="

//乘等于: "*="

//除等于: "\="

//减等于: "-="

//模等于: "%="


//-------------------------------------------------------------------------------------------------------------------//


//关系运算符

//大于: ">"

//小于: "<"

//大于等于: ">="

//小于等于: "<="

//值等于: "=="

//值与类型等于: "==="

//非等于: "!="

//值与类型非等于: "!=="


//-------------------------------------------------------------------------------------------------------------------//


//逻辑运算符

// &&


// ||


// !=


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.01: 变量语法

//Var Syntax

var varName1;
console.log(varName1);                  //undefined

var varName2 = "varValue2";
console.log(varName2);                  //"varValue"


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Let Syntax

function letSyntax() {

    let letName1 = "varValue1";

    console.log(letName1);              //"varValue"
}

letSyntax();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//Const Syntax
const cntName1 = 10;

// const cntName1 = 20;                 //cntName1 has already been declared

console.log(cntName1);                  //10


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.01_Epl_01.1: 变量交换 - 1( 利用第三方变量交换 )

var num1 = 10;
var num2 = 20;

//新建变量 temp 存放 num1 的值
var temp = num1;                        //10

//新建变量 num1 存放 num2 的值
//此时的 num1 是新的原始数据单元
var num1 = num2;                        //20

//变量 num 2 存放 "temp = num1" 的值
var num2 = temp;                        //10


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.01_Epl_01.2: 变量交换 - 2( 新建同名变量交换，使用于数字 )
//主要理解：新声明的重名变量为新的原始数据单元

var num3 = 10;
var num4 = 20;

//新建变量 num3 存放 num3 和 num4 的和
//此时的 num3 是新的原始数据单元
var num3 = num3 + num4;                 //30

//利用新建变量 num3 减去原有的 num4 等于 10
num4 = num3 - num4;                     //10

//利用新建变量 num3 减去新赋值的 num4 等于 20
num3 = num3 - num4;                     //20

console.log(num3);                      //10
console.log(num4);                      //20


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.01_Epl_01.3: 变量交换 - 3( 位运算( C 语言 ) )

var num5 = 10;
var num6 = 20;

num5 = num5 ^ num6;
num6 = num5 ^ num6;
num5 = num5 ^ num6;

console.log(num5, num6);                //20 10

//原理解释:
//把数字 10 和 20 转换为 计算机中 二进制的 10 和 20 的数字放在一起
//找到 10和20 的二进制的 源码 的 反码 的 补码放在一起，并且是正数的情况下
//接着进行位移的运算


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.02: 数据类型展示

//Number

// -> Integer
var numberInt = 10;
// -> Float
var numberFlt = 9.9;


//不要用小数验证小数( 语言 BUG )
var flt1 = 0.1;
var flt2 = 0.2;
var fltSum = flt1 + flt2;

console.log(fltSum);

//console.log(fltSum == 0.3);
//expected output: false


// -> 正无穷
var numInfBig = Infinity;
// -> 负无穷
var numInfSmall = -Infinity;


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//MAX_VALUE: JS 中的最大值
function multiplyMax(x, y) {

    if (x * y > Number.MAX_VALUE) {

        return ("Process as Infinity");
    }
    return (x * y);
}

console.log(multiplyMax(1.7976931348623157e+308, 1));
//expected output: 1.7976931348623157e+308
console.log(multiplyMax(1.7976931348623157e+308, 2));
//expected output: "Process as Infinity"


//MIN_VALUE: JS 中的最小值
function multiplyMin(x, y) {

    if (x * y < Number.MIN_VALUE) {

        return ("Process as -Infinity");
    }
    return (x * y);
}

console.log(multiplyMin(5e-324, 1));
//expected output: 5e-324
console.log(multiplyMin(-1.7976931348623157e+308, 2));
//expected output: Process as -Infinity


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NaN
// -> not a number

// NaN === NaN;                             //false
// Number.NaN === NaN;                      //false

//isNaN
// -> is not a number

isNaN(NaN);                                 //true
isNaN(Number.NaN);                          //true


function valueIsNaN(v) {

    return v !== v;
}

console.log(valueIsNaN(1));             //false
console.log(valueIsNaN(NaN));              //true
console.log(valueIsNaN((isNaN)));          //true


//-------------------------------------------------------------------------------------------------------------------//


//String
var myString = "This is a string";


//-------------------------------------------------------------------------------------------------------------------//


//Boolean

// -> True
var booleanTrue = true;
// -> False
var booleanFalse = false;


//-------------------------------------------------------------------------------------------------------------------//


//Null

// typeof null;                         //"object" (not "null" for legacy reasons)

// null === null;                       //true
// null == null;                        //true
// !null;                               //true

var myNull = null;                     //null


//-------------------------------------------------------------------------------------------------------------------//


//Undefined

// typeof undefined;                     //undefined

// -> variable undefined
var myUndefined;
console.log(myUndefined);               //undefined

// -> function undefined
function newFunction() {
    var isUndefined;
    console.log(isUndefined);           //undefined
}

newFunction();


//-------------------------------------------------------------------------------------------------------------------//


//Symbol


//-------------------------------------------------------------------------------------------------------------------//


//Object


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//typeof

//typeof Numbers

console.log(typeof 37 === 'number');
console.log(typeof 3.14 === 'number');
console.log(typeof 42 === 'number');
console.log(typeof Math.LN2 === 'number');

console.log(typeof Infinity === 'number');
console.log(typeof NaN === 'number');
console.log(typeof Number('1') === 'number');


console.log(typeof 42n === 'bigint');
//BigInt 是一个内置对象，它提供了一种表示大于2 53的整数的方法，
//这是  JavaScript 可以用 Number 原语可靠地表示的最大数字。
//BigInt 可以用于任意大整数


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//typeof Strings

console.log(typeof '' === 'string');

console.log(typeof 'hello' === 'string');
console.log(typeof 'hello word' === 'string');

console.log(typeof '1' === 'string');
console.log(typeof (typeof 1) === 'string');

console.log(typeof String(1) === 'string');
//"String()" 将任何内容转换为字符串，比 ".toString" 更安全


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//typeof Boolean

console.log(typeof true === 'boolean');
console.log(typeof false === 'boolean');

//Boolean(); == !!();
console.log(typeof Boolean(1) === 'boolean');
console.log(typeof !!(1) == 'boolean');


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//typeof Symbols

// console.log(Symbol() === 'symbol');                            //false
// console.log(Symbol('foo') === 'symbol');                       //false
// console.log(Symbol.iterator === "symbol");                     //false


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//typeof undefined

console.log(undefined === 'undefined');                                 //false
// console.log(declaredButUndefinedVariable === 'undefined');           //undefined
// console.log(undeclareadVariable === 'undefined');                    //undefined


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//typeof Object

//使用数组: isArray 或 Object .prototype .toString .call
//对象和数组的区别

console.log(typeof [1, 2, 3,] === 'object');
console.log(typeof new Date() === 'object');
console.log(typeof /regex/ === 'object');

// console.log(typeof new Boolean(true) === 'object');                   //true
// console.log(typeof new Boolean(1) === 'object');                      //true
// console.log(typeof new Boolean(adc) === 'object');                    //false


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//typeof Function

// console.log(typeof function () {} === 'function');                      //true
// console.log(class c {} === 'function');                                 //false
// console.log(Math.sin === 'function');                                   //false


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Number Method

//isNaN
// -> is a number -> true
console.log(isNaN(123));                   //true

// -> is not a number -> false
//console.log(isNaN(adc));                         //false


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

//Number()
//严格模式

console.log(Number("10"));                    //10
console.log(Number("10afrewssa"));            //NaN
console.log(Number("g10"));                   //NaN
console.log(Number("1fsd0"));                 //NaN
console.log(Number("10.98"));                 //10
console.log(Number("10.98dwafag"));           //NaN


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//parseInt
//Number.parseInt === parseInt;                    //true

console.log(Number.parseInt("10"));                      //10
console.log(Number.parseInt("10afrewssa"));              //10
console.log(Number.parseInt("g10"));                     //NaN
console.log(Number.parseInt("1fsd0"));                   //1
console.log(Number.parseInt("10.98"));                   //10
console.log(Number.parseInt("10.98dwafag"));             //10


function roughScale(x, base) {

    var parsed = Number.parseInt(x, base);

    if (Number.isNaN(parsed)) {             //if x is a number, return 0

        return 0;
    }
    return parsed * 100;                    //if x is not a number, return parsed * 100
}

console.log(roughScale(' 0xF', 16));
//expected output: 1500

console.log(roughScale('321', 2));
//expected output: 0


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//parseFloat
//Number.parseFloat(string)

console.log(Number.parseFloat("10"));                    //10
console.log(Number.parseFloat("10afrewssa"));            //10
console.log(Number.parseFloat("g10"));                   //NaN
console.log(Number.parseFloat("1fsd0"));                 //1
console.log(Number.parseFloat("10.98"));                 //10.98
console.log(Number.parseFloat("10.98dwafag"));           //10.98


function circumference(r) {

    if (Number.isNaN(Number.parseFloat(r))) {

        return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;            //Math.PI == 3.1415926 ...
}

console.log(circumference('4.567abcdefgh'));
//expected output: 28.695307297889173

console.log(circumference('abcdefgh'));
//expected output: 0


//-------------------------------------------------------------------------------------------------------------------//


//.toString()

//String.length

var strLength = "what do you want";
console.log(strLength.length);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

//两个字符串连接

var str1 = "10";
var str2 = "20";

console.log(str1 + str2);          // str3 == 1020


//一个字符串和其他类型连接

var str3 = "10";
var str4 = 20;

console.log(str3 + str4);          // str3 = 1020


//一个字符串减去不是字符串的类型

var str5 = "10";
var str6 = 20;

console.log(str5 - str6);
// 浏览器自动 ( 隐式转换 ) 把字符串类型转成了数字类型进行计算


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//string = object.toString();

//Let's imagine an <a id="myAnchor" href="https://developer.mozilla.org/en-US/docs/HTMLHyperlinkElementUtils/toString"> element is in the document

// var anchor = document.getElementById('myAnchor');

// var result = anchor.toString();
//Return: 'https://developer.mozilla.org/en-US/docs/HTMLHyperlinkElementUtils/toString'


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//String()
//Strict mode
//String() 可以强行把没有意义的类型，转换为 字符串

var numNull = null;
var numUndefined = undefined;

console.log(String(numNull));
//expected output: "numNull"

console.log(String(numUndefined));
//expected output: "numUndefined"


//-------------------------------------------------------------------------------------------------------------------//


//Boolean

// -> false: 0、-0、false、NaN、undefined、""、false

// var bNoParam = new Boolean();
// var bZero = new Boolean(0);
// var bNull = new Boolean(null);
// var bEmptyString = new Boolean('');
// var bfalse = new Boolean(false);



// -> true: is

// var btrue = new Boolean(true);
// var btrueString = new Boolean('true');
// var bfalseString = new Boolean('false');
// var bSuLin = new Boolean('Su Lin');
// var bArrayProto = new Boolean([]);
// var bObjProto = new Boolean({});


//-------------------------------------------------------------------------------------------------------------------//


//算数运算符

//赋值运算符: "="

//加: "+"

//减: "-"

//乘: "*"

//除: "\"

//余: "%"


//-------------------------------------------------------------------------------------------------------------------//


//算数运算符表达式 - 一元运算符


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//算数运算符表达式 - 二元运算符


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//算数运算符表达式 - 三元运算符


//-------------------------------------------------------------------------------------------------------------------//


//复合运算符

//加等于: "+="

//减等于: "-="

//乘等于: "*="

//除等于: "\="

//减等于: "-="

//模等于: "%="


//-------------------------------------------------------------------------------------------------------------------//


//关系运算符

//大于: ">"

//小于: "<"

//大于等于: ">="

//小于等于: "<="

//值等于: "=="

//值与类型等于: "==="

//非等于: "!="

//值与类型非等于: "!=="


//-------------------------------------------------------------------------------------------------------------------//


//逻辑运算符

// &&


// ||


// !=


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
