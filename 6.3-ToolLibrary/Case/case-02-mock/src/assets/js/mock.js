import Mock from "mockjs";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Mock.mock({'name|rule':value});
 *
 *
 * 生成的规则必须依赖 Mock.mock();
 *
 *
 * 1) 'name|min-max': value
 *
 * 2) 'name|count': value
 *
 * 3) 'name|min-max.dmin-dmax': value
 *
 * 4) 'name|min-max.dcount': value
 *
 * 5) 'name|count.dmin-dmax': value
 *
 * 6) 'name|count.dcount': value
 *
 * 7) 'name|+step': value
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * key: val-str;
 *
 *
 * 'name|min-max': str              // 随机生成 min~max 数量的 str
 *
 * 'name|count': str                // 固定生成 count 数量的 str
 */


console.log(Mock.mock({"key: val-str; 1-4|1-4": "alpha"}));

console.log(Mock.mock({"key: val-str; 2|2": "alpha"}));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * key: val-num;
 *
 *
 * 'name|+step': num                // 每次生成的值为 当前数字 + 1
 *
 * 'name|min-max': num              // 随机生成 min～max 内的数字
 *
 * 'name|min-max.dcount': num       // 随机生成 min～max 内的数字，并且固定生成 dcount 位的小数
 *
 * 'name|min-max.dmin-dmax': num    // 随机生成 min～max 内的数字，并且随机生成 dmin～dmax 位的小数
 *
 * 'name|count.dmin-dmax': num      // 固定生成 count 位的数字，并且随机生成 dmin～dmax 位的小数
 *
 * 'name|count.dcount': num         // 固定生成 count 位的数字，并且固定生成 dcount 位的小数
 */


console.log(Mock.mock({"key: val-num; +1|+1": 100}));

console.log(Mock.mock({"key: val-num; 1-100|1-100": 1}));

console.log(Mock.mock({"key: val-num; 1-100.5|1-100.5": 1}));

console.log(Mock.mock({"key: val-num; 1-100.1-10|1-100.1-10": 1}));

console.log(Mock.mock({"key: val-num; 100.1-10|100.1-10": 1}));

console.log(Mock.mock({"key: val-num; 100.10|100.10": 1}));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * key: val-bool;
 *
 *
 * boolean 返回概率计算公式: true: min / (min + max); false: max / (min + max);
 *
 *
 * 'name|count': bool               // 固定值 === 1-1，会返回布尔值的概率各 50%
 *
 * 'name|min-max': bool             // 随机生成 布尔值(true/false)返回
 */


console.log(Mock.mock({"key: val-bool; 1 === 1-1|1": true}));

console.log(Mock.mock({"key: val-bool; 1-5|1-5": false}));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * key: val-obj;
 *
 *
 * 'name|count': obj                // 返回固定 count 个子项的对象
 *
 * 'name|min-max': obj              // 随机返回 min~max 个子项的对象
 */


console.log(Mock.mock({"key: val-obj; 1-3|1-3": {a: 10, b: 20, c: 30, d: 40}}));

console.log(Mock.mock({"key: val-obj; 2|2": {a: 10, b: 20, c: 30, d: 40}}));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * key: val-arr;
 *
 *
 * 'name|count': arr                // 返回固定 count 个子项的对象
 *
 * 'name|min-max': obj              // 随机生成 min~max 倍数子项的对象
 */


console.log(Mock.mock({"key: val-arr; 2|2": ["a", "b", "c", "d", "e"]}));

console.log(Mock.mock({"key: val-arr; 1-3|1-3": ["a", "b", "c", "d", "e"]}));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * key: val-func;
 *
 *
 * 'name': function                 // 将该函数的返回结果作为返回对象 key 所对应的 value
 *                                  // return result => {key: result}
 */

console.log(Mock.mock({

    "key: val-func; 1|1": function () {
        return 1 + 2;
    }
}));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * key: val-reg;
 *
 *
 * 'name': reg                      // 根据正则表达式生成返回值
 *                                  // /\s/ 若匹配到 空字符，则返回的字符会多一位
 */


console.log(Mock.mock({"key: val-reg-1;": /[a-z][A-Z][0-9]/}));

console.log(Mock.mock({"key: val-reg-2;": /\w\W\s\S\d\D/}));

console.log(Mock.mock({"key: val-reg-3;": /\d{5,10}/}));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////