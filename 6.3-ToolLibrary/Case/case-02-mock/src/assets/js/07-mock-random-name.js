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
 * Random.first();
 *
 *
 * 随机生成一个常见的英文名
 */

console.log("Random.first(): ", Random.first());


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.last();
 *
 *
 * 随机生成一个常见的英文姓
 */

console.log("Random.last(): ", Random.last());



//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.name(middle?);
 *
 *
 * @middle: 布尔值。指示是否生成中间名
 *
 *
 * 随机生成一个常见的英文姓名
 */

console.log("Random.name(): ", Random.name());



//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.cfirst();
 *
 *
 * 随机生成一个常见的中文名
 */

console.log("Random.cfirst(): ", Random.cfirst());



//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.clast();
 *
 *
 * 随机生成一个常见的中文姓
 */


console.log("Random.clast(): ", Random.clast());


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.cname();
 *
 *
 * 随机生成一个常见的中文姓名
 */


console.log("Random.cname(): ", Random.cname());



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////