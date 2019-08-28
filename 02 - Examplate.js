///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.01: 变量语法

//NO.01_Epl_01.1: 变量交换 - 1( 利用第三方变量交换 )

//NO.01_Epl_01.2: 变量交换 - 2( 新建同名变量交换，使用于数字 )

//NO.01_Epl_01.3: 变量交换 - 3( 位运算( C 语言 ) )


//NO.02: 数据类型


//NO.03: 获取数据类型


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


//NO.01: 变量语法

//Var Syntax

var varName1;
console.log(varName1);                  //undefined

var varName2 = "varValue2";
console.log(varName2);                  //"varValue"


//Let Syntax

function letSyntax() {

    let letName1 = "varValue1";

    console.log(letName1);              //"varValue"
}

letSyntax();


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


//NO.02: 数据类型

//Number

// -> Integer
var numberInt = 10;
// -> Float
var numberFlt = 9.9;


//Boolean

// -> True
var booleanTrue = true;
// -> False
var booleanFalse = false;


//String
var myString = "This is a string";


//Null
//
var myNull = null;


//Undefined

// -> variable undefined
var myUndefined;
console.log(myUndefined);               //undefined

// -> function undefined
function newFunction() {
    var isUndefined;
    console.log(isUndefined);           //undefined
}

newFunction();


//Symbol



//Object




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







