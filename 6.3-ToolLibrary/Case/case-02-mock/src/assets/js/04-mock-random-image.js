import Mock from "mockjs";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Mock.Random();
 *
 *
 * 生成高度自定义的图片地址
 */

let Random = Mock.Random;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Random.image(size?, background?, foreground?, format?, text?);
 *
 *
 * @size: 指示图片的宽高
 * @background: 指示图片的背景色
 * @foreground: 指示图片的前景色（文字）
 * @format: 指示图片的格式
 * @text: 指示图片上的文字
 */

console.log("Random.image(): ", Random.image());

console.log("Random.image('200x100'): ", Random.image('200x100', '#f40', '#fff', 'png', 'alpha'));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.dataImage(size?, text?);          // 图片的背景色是随机的，取值范围参考自 http://brandcolors.net/
 *
 *
 * @size: 指示图片的宽高
 * @text: 指示图片上的文字
 *
 *
 * 生成一段随机的 Base64 图片编码
 */

console.log("Random.dataImage(): ", Random.dataImage());

console.log("Random.dataImage(): ", Random.dataImage('100x100', 'hello world'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////