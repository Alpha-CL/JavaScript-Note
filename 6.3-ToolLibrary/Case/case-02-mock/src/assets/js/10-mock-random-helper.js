import Mock from "mockjs";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Mock.Random();
 *
 *
 */

let Random = Mock.Random;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Random.capitalize(word);
 *
 *
 * 把字符串的第一个字母转换为大写
 */

console.log(Random.capitalize('alpha'));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.upper(str);
 *
 *
 * 把字符串转换为大写
 */

console.log(Random.upper('alpha'));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.lower(str);
 *
 *
 * 把字符串转换为小写
 */

console.log(Random.lower('alpha'));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.pick(arr);
 *
 *
 * 从数组中随机选取一个元素，并返回
 */

console.log(Random.pick([1, 2, 3, 4, 5, 6]));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.shuffle(arr);
 *
 *
 * 打乱数组中元素的顺序，并返回
 */

console.log(Random.shuffle([1, 2, 3, 4, 5, 6]));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////