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


//-------------------------------------------------------------------------------------------------------------------//


/**
 *
 * 写正则表达式，根据字符串来写正则表达式进行匹配
 *
 * 经验:
 *
 *  1. 找规律
 *  2. 不要追求完美
 *
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 * 身份证的正则表达式
 *
 */


/**
 *
 *
 * 15位 数字
 * [1 - 9][0 - 9]{14}
 *
 * 18位 数字
 * [1 - 9][0 - 9]{16}[0 - 9xX]
 *
 * 15位 或 18位 数字
 * ([1 - 9][0 - 9]{14}) | ([1 - 9][0 - 9]{16}[0 - 9xX])
 *
 *
 * ([1 - 9][0 - 9]{14}([0 - 9]{2}[0 - 9xX]))?
 *
 *
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 *
 *
 * 座机号正则表达式
 *
 *
 * 010 - 19341583
 * 0314 - 31531532
 *
 *
 * [0 -9]{3,4}[-][0 - 9]{8}
 *
 * \d{3,4}[1][0 - 9]{8}
 *
 * \d{3,4}[-]\d{8}
 *
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 *
 * QQ 号正则表达式
 *
 *
 * 5 - 11 位数字
 *
 * [1 - 9][0 - 9]{4,10}
 *
 * [1 - 9]\d{4,10}
 *
 * \d{5,11}
 *
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 *
 * 手机号正则表达式
 *
 * 130 131 132 133 134 135 136 137 138 139
 * 143 147
 * 150 151 152 153 154 155 156 157 158 159
 * 170 171 173 176 177
 * 180 181 182 183 184 185 186 187 188 189
 *
 * ([1][358][0 - 9]{8}) | ([1][4][37][0 - 9]{8}) | ([1][7][01367][0 - 9]{8})
 *
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 *
 * 邮箱的正则表达式
 *
 * xiaodao_92@126.com.cn
 *
 * [0 - 9a - zA - Z.-]+[@][0 - 9a - zA - Z.-]+([.][a - zA -Z]+{1,2})
 *
 * xiaodao_92 ==> [0 - 9a - zA - Z.-]+
 *
 * @ ==> [@]
 *
 * 126 ==> [0 - 9a - zA - Z.-]+
 *
 * .com.cn ==> ([.][a - zA -Z]+{1,2})
 *
 *
 */

//-------------------------------------------------------------------------------------------------------------------//


//创建对象完毕( 没有正则表达式的对象 )
//可以放在 引号用 也可以放在 / xxx / 中
var reg1 = new RegExp(/\d{5}/);
var reg2 = new RegExp("\d{5}");

//字符串
var str = 'my phone number: 10086';

//调用方法验证字符串是否匹配
var flag = reg1.test(str);
console.log(flag);


var reg3 = new RegExp(/\d{5}/);
var flag1 = reg3.test('my phone number: 10010');
console.log(flag1);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//字面量方式创建正则表达式对象

var reg4 = /\d{1,5}/;

var flag4 = reg4.test('my luckily number: 888');

console.log(flag4);


//-------------------------------------------------------------------------------------------------------------------//


//识别正则表达式是否匹配


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 * var reg5 = /[a-zA-Z]+/;
 * var flag5 = reg5.test('hello');
 * console.log(flag5);
 *
 */

//简化代码
console.log(/[a-zA-Z]+/.test('hello'));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 任意一个除 '\n' 以外的 字符
 *
 */
console.log("/./: 任意一个除 回车 以外的 字符 ==> " + /./.test("除回车以外的任意字符"));//true


/**
 * 任意一个除 '\n' 以外的字符，出现了 0次 或 n次
 *
 */
console.log("/.*/: 任意一个除 '\\n' 以外的字符，出现了 0次 或 n次 ==> " + /.*/.test("0个到多个"));                   //true


/**
 * 任意一个除了 '\n' 以外的字符，出现了 1次 或 n次
 *
 */
console.log(/.+/.test("1个到多个"));                   //true


/**
 * 任意一个除 '\n' 以外的字符，出现了 0次 或 1次
 *
 */
console.log(/.?/.test("哈哈"));                       //true


/**
 * 0 - 9 之间任意一个数字
 *
 */
console.log(/[0-9]/.test("9527"));                   //true


/**
 * a - z 之间任意一个字母
 *
 */
console.log(/[a-z]/.test("what"));                   //true


/**
 * A - Z 之间任意一个大写字母
 *
 */
console.log(/[A-Z]/.test("Are"));                   //true


/**
 * 所有大小写字母中任意一个字母
 *
 */
console.log(/[a-zA-Z]/.test("干啥子"));              //false


/**
 * 0 到 9 和 所有 大小写字母中任意一个
 *
 */
console.log(/[0-9a-zA-Z]/.test("9ebg"));            //true


/**
 * b 或者 ara 中任意一个
 *
 */
console.log(/b|(ara)/.test("abra"));                //true


/**
 * a - z 字母中出现了 2次 到 3次
 *
 */
console.log(/[a-z]{2,3}/.test("arfsf"));            //true


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 任意一个数字
 *
 */
console.log(/\d/.test("998"));              //true

/**
 * 任意一个数字出现 0次 到 n次
 *
 */
console.log(/\d*/.test("998"));             //true

/**
 * 任意一个数字出现 1次 到 n次
 *
 */
console.log(/\d+/.test("998"));             //true

/**
 * 任意一个数字出现 0次 到 n次 == *
 *
 */
console.log(/\d{0,}/.test("998"));          //true

/**
 * 任意一个数字出现 2次 到 3次
 *
 */
console.log(/\d{2,3}/.test("998"));         //true

/**
 * 任意一个非数字
 *
 */
console.log(/\D/.test("eat"));              //true

/**
 * 空白符
 *
 */
console.log(/\s/.test("before   after"));       //true

/**
 * 非空白符
 *
 */
console.log(/\S/.test("嘎嘎 "));                  //true

/**
 * 非特殊符号
 *
 */
console.log(/\w/.test("_"));                    //true

/**
 * 特殊符号
 *
 */
console.log(/\W/.test("_"));        //false


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//














































