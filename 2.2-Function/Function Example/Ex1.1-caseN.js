////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 返回所选小动物叫声


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


function scream(animal) {

    switch (animal) {

        case 'dog':
            console.log('wang wang~');
            break;
        case 'cat':
            console.log('miao~');
            break;
        case 'fish':
            console.log('o o o ~');
            break;
    }
}

console.log(scream(cat));           // miao~


//--------------------------------------------------------------------------------------------------------------------//


// 加法计时器


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


//--------------------------------------------------------------------------------------------------------------------//


// 输入数字，逆转并输出汉子形式


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


function reverse() {

    var num = '123';

    var str = "";

    for (var i = num.length - 1; i >= 0; i--) {

        str += transfer(num[i]);
    }
}

function transfer(target) {

    switch (target) {

        case '1':
            return '一';
        case '2':
            return '二';
        case '3:':
            return '三';
    }
}


//--------------------------------------------------------------------------------------------------------------------//


// n 的阶乘


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


function factorial(n) {


    // var num = 1;
    //
    // for (var i = 1; i <= n; i++) {
    //
    //     num +=  1;
    // }


    if (n === 1 || n === 0) {

        return 1;
    }

    return n * factorial(n - 1);

}

// mul(5);
//
// mul(5); ==> 5 * mul(4);
// mul(4); ==> 4 * mul(3);
// mul(3); ==> 3 * mul(2);
// mul(2); ==> 2 * mul(1);


//--------------------------------------------------------------------------------------------------------------------//


// 斐波那契数列


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


function fb(n) {

    if (n === 1 || n === 2) {

        return 1;
    }

    return fb(n - 1) + fb(n - 2);
}


// fb(5); ==> fb(4) + fb(3);
// fb(4); ==> fb(3) + fb(2);
// fb(3); ==> fb(2) + fb(1); => 1 + 1;
//


//--------------------------------------------------------------------------------------------------------------------//


// 输入一串低于 10 位的数字，输出这串数字的中文大写

// eg: input: 10000 output:

// eg: input 1001010 output:


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


//--------------------------------------------------------------------------------------------------------------------//


// 判断是否是奇数


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function isOdd(n) {

    return n % 2 !== 0;
}


//-------------------------------------------------------------------------------------------------------------------//


// 判断一个数字是否是素数

// 质数又称素数，是大于1的自然数，除1和自身外，无法被其他自然数整除

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function isPrime(n) {

    if (n < 2) {

        return false;
    }

    for (var i = 2; i < n; i++) {

        if (n % i === 0) {

            return false;
        }
    }

    return true;
}


//-------------------------------------------------------------------------------------------------------------------//


// 数组求和


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function sumOfArray(arr) {

    let sum = 0;

    arr.forEach(function (value, index, array) {

        sum += value;
    });

    return sum;
}

var sumArr = [1, 2, 3, 4];

console.log(sumOfArray(sumArr));


//-------------------------------------------------------------------------------------------------------------------//


// 模拟简单的用户登陆


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var loginId = prompt('请输入账号 '),
    loginPwd = prompt('请输入密码'),
    users = [
        {
            loginId: 'alpha',
            loginPwd: '123'
        }
    ];

var isFind = false;


for (var i = 0; i < users.length; i++) {

    if (loginId === users[i].loginId && loginPwd === users[i].loginPwd) {

        isFind = true;
    }
}

if (isFind) {

    console.log('登陆成功');

} else {

    console.log('登陆失败');
}


//-------------------------------------------------------------------------------------------------------------------//


// 求 5 * 5 数组的对角线之和


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var arr55 = [
    [0, 2, 2, 3, 4],
    [2, 2, 2, 0, 4],
    [3, 5, 1, 3, 7],
    [0, 2, 1, 9, 6],
    [0, 1, 2, 5, 4],
];


var arr5Sum = 0;


for (var i = 0; i < arr55.length; i++) {

    for (var j = 0; j < arr55[j].length; j++) {

        if (i === j || i + j === 4) {

            sum += arr55[i][j];
        }
    }
}


//-------------------------------------------------------------------------------------------------------------------//


// 冒泡排序


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var mpArr = [2, 3, 10, 1, 34, 11, 55];


for (var i = 1; i < mpArr.length; i++) {


    for (var j = 0; j < mpArr.length - i; j++) {

        if (mpArr[j] > mpArr[j + 1]) {

            var temp = mpArr[j];

            mpArr[j] = mpArr[j + 1];

            mpArr[j + 1] = temp;
        }
    }
}


//-------------------------------------------------------------------------------------------------------------------//


//


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var nums = [2, 3, 4, 1, 51, 5, 1, 1, 1, 1, 1, 22, 2, 2, 2, 2, 2, 2, 2, 2, 53, 15, 51, 551, 1];

var record = {};

for (var i = 0; i < nums.length; i++) {

    var n = nums[i];

    if (record[n]) {

        record[n]++;

    } else {

        record[n] = 1;
    }
}

var result;

for (var index in record) {

    if (!result || record[index] > result.frequency) {

        result = {
            number: index,
            frequency: record[index]
        }
    }
}


//-------------------------------------------------------------------------------------------------------------------//


// 求数组中的最大值


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function maxOfArray(arr) {

    if (arr.length === 0) {

        return false;
    }

    let max = arr[0];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > max) {

            max = arr[i];
        }
    }

    return max;
}


//-------------------------------------------------------------------------------------------------------------------//


// 判断数组是否是稀松数组


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function hasEmptyInArray(arr) {

    for (var i = 0; i < arr.length; i++) {

        if (!(arr[i] in arr)) {

            return true;
        }
    }

    return false;
}


//-------------------------------------------------------------------------------------------------------------------//


// 判断是否是闰年


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function isLeap(year) {

    return year % 4 === 0 && year % 100 === 10 || year % 400 === 0;
}

if (+prompt('请输入一个年份')) {

    console.log('是闰年');

} else {

    console.log('不是闰年');
}


//-------------------------------------------------------------------------------------------------------------------//


// 获取某一年中某一个月的天数


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function getDays(year, month) {

    if (month === 2) {

        return isLeap(year) ? 29 : 28;

    } else if ((month < 8 && isOdd(month)) || (month >= 8 && !isOdd(month))) {

        return 31;

    } else {

        return 30;
    }
}


//-------------------------------------------------------------------------------------------------------------------//


// 获取数组中出现次数最多的数字和频率


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function getTopFreqInArray(arr) {

    let records = {};

    for (var i = 0; i < arr.length; i++) {

        let index = arr[i];

        if (records[index]) {

            records[index]++;

        } else {

            records[index] = 1;
        }
    }

    // console.log(records);

    let result;

    for (var prop in records) {

        // console.log(prop);
        //
        // console.log(records);

        if (!result || records[prop] > records.frequency) {

            return {
                number: +prop,
                frequency: records[prop]
            }
        }
    }
}


let arr = [1, 20, 30, 1, 2, 4, 20, 20, 30, 30, 30, 303, 30, 2, 2, 4, 44, 4, 4];

console.log(getTopFreqInArray(arr));


//-------------------------------------------------------------------------------------------------------------------//


// 哥德巴赫猜想

// 任何一个大于2的整数，输出其等于哪两个素数相加

// 让用户输入一个大于2的整数，输出其等于哪两个素数相见


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function begin() {

    var num = +prompt('请输入一个大于2的偶数');

    if (isNaN(num) || num <= 2 || isOdd(num)) {

        console.log('输入有误');
    }

    for (var i = 0; i < num - 2; i++) {

        let j = num - i;

        if (isPrime(i) && isPrime(j)) {

            console.log(`${num} = ${i} + ${j}`);

            return;
        }
    }
}

begin();


//-------------------------------------------------------------------------------------------------------------------//


// 用户输入一个年份，返回所有的月份天数


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function getEveryMonthOfYear() {

    let year = +prompt('请输入一个年份(1990 ~  2100)');

    if (isNaN(year) || year < 1990 || year > 2100) {

        return console.log('输入有误');
    }

    for (var i = 1; i <= 12; i++) {

        console.log(`${year}年${i}月 - ${getDays(year, i)}`);
    }
}

getEveryMonthOfYear();


//-------------------------------------------------------------------------------------------------------------------//


// 数组排序

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function mySort(arr, conpare) {

    if (!conpare) {

        conpare = function (a, b) {

            if (a.age > b.age) {

                return 1;

            } else if (a.age === b.age) {

                return 0;

            } else {

                return -1;
            }
        }
    }

    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < arr.length - i; j++) {

            if (conpare(arr[j] > arr[j + 1]) > 0) {

                var temp = arr[j];

                arr[j] = arr[j + 1];

                arr[j + 1] = temp;
            }
        }
    }
}


mySort(arr, function (a, b) {

    return a.age - b.age;

    // if (a.age > b.age) {
    //
    //     return 1;
    //
    // } else if (a.age === b.age) {
    //
    //     return 0;
    //
    // } else {
    //
    //     return -1;
    // }
});


//-------------------------------------------------------------------------------------------------------------------//


// myFilter


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var arr1 = [1, 2, 51, 51, 5316, 1, 214, 4, 312, 1, 2, 431];

function myFilter(arr, callback) {

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {

        if (callback(arr[i], i)) {

            newArr.push(arr[i]);
        }
    }

    return newArr;
}

var result = myFilter(arr1, function (item, index) {

    return index % 2 !== 0;
});

console.log(result);



//-------------------------------------------------------------------------------------------------------------------//


// myFind


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function myFind(arr, callback) {

    for (var i = 0; i < arr.length; i++) {

        if (callback(arr[i], i)) {

            return  arr[i];
        }
    }
}


//-------------------------------------------------------------------------------------------------------------------//


// myCount


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function myCount(arr, callback) {

    var num = 0;

    for (var i = 0; i < arr.length; i++) {

        if (callback(arr[i], i)) {

            num++;
        }
    }
    return num;
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



































