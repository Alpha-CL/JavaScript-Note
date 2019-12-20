///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO.01: 数组

//NO.01.1: 构造函数创建数组

//NO.01.2: 字面量创建数组

//NO.01.3: 字面量创建数组

//NO.01_Epl_01.1: 循环遍历数组

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


//NO.01.1: 构造函数创建数组

//Create an Array
var cars1 = new Array('Saab', 'Volvo', 'BMW');


//An empty Array
var colors1 = new Array();
//expected output: undefined


//Create an Array with 6 length undefined
var foods1 = new Array(6);
//expected output: undefined * 6




//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NO.01.2: 字面量创建数组

//Create an Array
var car2 = ['Saab', 'Volvo', 'BMW'];


//An empty Array
var colors2 = [];
//expected output: undefined


//Create an Array with 3 length
var foods2 = ["tomato", "apple", "banana"];
console.log(foods2.length);
//foods 3 length


//The values of the elements in an array can be different types
var moreType = [99, "BMW", true, null, undefined, "new object"];


//Defined Array value
var cars7 = [];              //新建空数组

cars7[0] = 10;              //数组第一位赋值为 10
cars7[1] = 20;              //数组第二位赋值为 20
// car7 = [10, 20];


//-------------------------------------------------------------------------------------------------------------------//


//NO.01_Epl_01.1.1: 循环遍历数组( 正序 )

var leapDisplayArr = [10, 20, 30, 40, 50];

//display all array value
console.log(leapDisplayArr[0]);                 //10
console.log(leapDisplayArr[1]);                 //20
console.log(leapDisplayArr[2]);                 //30
console.log(leapDisplayArr[3]);                 //40
console.log(leapDisplayArr[4]);                 //50


//so easy
for (var i = 0; i < leapDisplayArr.length; i++) {
    console.log(leapDisplayArr[i]);
}


//NO.01_Epl_01.1.2: 循环遍历数组( 倒序 )

for (var i = leapDisplayArr.length; i >= 0; i--) {

    console.log(leapDisplayArr[i]);
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NO.01_Epl_01.2: 计算数组中所有元素的和

var arrAllNum = [10, 20, 30, 40, 50];
var arrAllNumSum = 0;


for (var i = 0; i < arrAllNum.length; i++) {

    arrAllNumSum += arrAllNum[i];
}
console.log(arrAllNumSum);
//expected output: 150


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NO.01_Epl_01.3: 计算数组中所有元素的平均值


var arrAllNum3 = [10, 20, 30, 40, 50];
var arrAllNumSum3 = 0;
var arrAverage = 0;

for (var i = 0; i < arrAllNum3.length; i++) {
    arrAllNumSum3 += arrAllNum3[i];
    arrAverage = arrAllNumSum3 / arrAllNum3.length;
}

console.log(arrAverage);
//expected output: 30


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NO.01_Epl_01.4: 计算数组中所有元素的最大值

var arrAllNum4 = [10, 20, 30, 40, 50];
var arrMax = arrAllNum4[0];

for (var i = 0; i < arrAllNum4.length; i++) {

    if (arrMax < arrAllNum4[i]) {

        arrMax = arrAllNum4[i];
    }
}

console.log(arrMax);
//expected output: 50


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NO.01_Epl_01.5: 计算数组中所有元素的最小值

var arrAllNum5 = [10, 20, 30, 40, 50];
var arrMin = arrAllNum5[0];

for (var i = 0; i < arrAllNum5.length; i++) {

    if (arrMin > arrAllNum4[i]) {

        arrMin = arrAllNum4[i];
    }
}

console.log(arrMin);
//expected output: 10


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NO.01_Epl_01.6: 把数组中每个元素用 "|" 拼接到一起产生一个字符串并输出

var arrAllNum6 = [10, 20, 30, 40, 50];

var arrLink1 = "";
var arrLink2 = "";


//method - 1
//先组合 0 ～ length-1 位置, 再加 第 length 位
for (var i = 0; i < arrAllNum6.length - 1; i++) {

    arrLink1 += arrAllNum6[i] + "|";
}
console.log(arrLink1 + arrAllNum6[arrAllNum6.length - 1]);


//method - 2
//先组合 1 ～ length 位置，再加 第 0 位
for (var i = 1; i < arrAllNum6.length; i++) {

    arrLink2 += "|" + arrAllNum6[i];
}
console.log(arrAllNum6[0] + arrLink2);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NO.01_Epl_01.7: 去掉数组中重复的 0

var arrAllNum7 = [10, 0, 20, 0, 30, 0, 50];

var newArr = [];

//遍历数组
for (var i = 0; i < arrAllNum7.length; i++) {

    //判断数组的每一位如果不是 0 ，则存入新数组
    if (arrAllNum7[i] !== 0) {

        newArr[newArr.length] = arrAllNum7[i];
    }
}
console.log(newArr);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NO.01_Epl_01.8: 反转数组

var reverseArr = [10, 20, 30, 40, 50];

for (var i = 0; i < reverseArr.length / 2; i++) {

    //利用第三方 变量交换 数组的值
    var temp = reverseArr[i];                                       //新建变量存放原数组第 i 位置的变量
    reverseArr[i] = reverseArr[reverseArr.length - 1 - i];          //原数组第 i 位置的变量 存放 位置相对倒数的变量
    reverseArr[reverseArr.length - 1 - i] = temp;                   //位置相对倒数的变量存放 temp 中 原数组 i 位的变量
}

console.log(reverseArr);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NO.01_Epl_01.9: 提示用户输入班级人数,求总成绩、平局分、最高分、最低分


var perCount = parseInt(prompt('请输入班级人数'));

var perScore = [];
var perScoreSum = 0;


//循环的方式记录每个人的成绩
for (var i = 0; i < perCount; i++) {
    perScore[perScore.length] = parseInt(prompt("请输入第" + (i + 1) + "个人的成绩成绩"));
}
console.log(perScore);


// 求总成绩
for (var i = 0; i < perScore.length; i++) {
    perScoreSum += perScore[i];
}
console.log("perScoreSum:" + perScoreSum);


var perScoreMax = perScore[0];
var perScoreMin = perScore[0];

//求最大值 和 最小值
for (var i = 0; i < perScore.length; i++) {

    // 最大值
    if (perScoreMax < perScore[i]) {
        perScoreMax = perScore[i];
    }

    //最小值
    if (perScoreMin > perScore[i]) {
        perScoreMin = perScore[i];
    }
}

console.log("perScoreMax:" + perScoreMax);
console.log("perScoreMin:" + perScoreMin);

//平均值
var perScorAvg = perScoreSum / perCount;
console.log("perScorAvg:" + perScorAvg);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//NO.01_Epl_01.10: 冒泡排序: 把所有的数据按照一定的顺序进行排列 ( 从小到大，从大到小 )


// 从小到大
//          |       5       |       4       |       3       |       2       |       1       |  比较次数
// ------------------------------------------------------------------------------------------------------------
//
// 第 i 轮比较   5 > 4 ==> 4    5 > 3 ==> 3    5 > 2 ==> 2     5 > 1 ==> 1       5              length-1
//
// 第 i 轮比较   4 > 3 ==> 3    4 > 2 ==> 2    4 > 1 ==> 1     4                 5              length-1 - i
//
// 第 i 轮比较   4 > 3 ==> 3    4 > 2 ==> 2    3               4                 5              length-1 - i
//
// 第 i 轮比较   4 > 3 ==> 3    2              3               4                 5              length-1 - i
//
// 第 i 轮比较   1              2              3               4                 5              length-1 - i
//
//

//从小到大
var numSortMin = [1, 20, 30, 45, 80, 50];

//横向遍历
for (var i = 0; i < numSortMin.length - 1; i++) {

    //纵向遍历
    for (var j = 0; j < numSortMin.length - 1 - i; j++) {

        //遍历比对大小
        if (numSortMin[j] > numSortMin[j + 1]) {

            //第三方变量交换值
            var swopNum1 = numSortMin[j];
            numSortMin[j] = numSortMin[j + 1];
            numSortMin[j + 1] = swopNum1;
        }
    }
}
console.log(numSortMin);


//从大到小
var numSortMax = [1, 20, 30, 45, 80, 50];

for (var i = 0; i < numSortMax.length - 1; i++) {

    for (var j = 0; j < numSortMax.length - 1 - i; j++) {

        if (numSortMax[j] < numSortMax[j + 1]) {

            var swopNum2 = numSortMax[j];
            numSortMax[j] = numSortMax[j + 1];
            numSortMax[j + 1] = swopNum2;
        }
    }
}
console.log(numSortMax);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////











