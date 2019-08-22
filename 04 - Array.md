<h2 id="#">Array</h2>

<h3 id="#">3.1 Array Description</h3>

数组是类似列表的对象，其原型具有执行遍历和变异操作的方法；
JavaScript数组的长度和元素的类型都不固定；
由于数组的长度可以随时改变，并且数据可以存储在数组中的非连续位置，因此不能保证JavaScript数组密集; 

<br/>

* 数组:
    
    存储一组有序的数据
    
    * 一次性存储多个数据
    
        * 构造函数方式创建数组
        
            var arrayName = new Array();
            
            * 空数组
            
                var cars = new Array(); ==> undefined
                
            * 定义数组，并且有长度
            
                var cars = new Array(2); ==> array.length == 2
                
            * 定义数组, 有长度, 并且有个多个数据
            
                var cars = new Array( "Volvo", "BWM"... ) 
            
            * 
        
        * 字面亮方式创建数组
        
            var arrayName = [];
            
            * 空数组
            
                var cars = []; ==> undefined
            
            * 数组长度
            
                var cars = ["Saab", "Volvo", "BMW"];
                
                console.log(cars.length);
                
            * 
    
* 数组元素:

    数组中存储的每个数据, 都可以称为数组的元素
    
    * 

* 数组长度 ( length -1 就是最大的索引值 ):

    数组元素的个数等于元素长度
    
    * arrayName.length
    
    * 
    
    * 
    
* 数组索引 ( 从 0 开始，到 length -1 结束 ):

    数组的第一个元素是索引 0
    
    最后一个元素的索引等于数组 length - 1
    
    使用无效的索引号返回 undefined
    
    * 获取数组元素的值
    
    * 改变数组元素的值
    
    *
    
* 数组中可以存储不同类型的数据

    通常是一样的，方便进行同类操作

    * Number、String、Boolean、Null、undefined、new object

    *
    
* 数组中长度是可以改变的

    * 



<br/>
<hr/>
<br/>



<h3 id="#">3.2 Array Property</h3>

<h4 id="#">Create an Array</h4>

**1. 通过构造函数的方式创建数组**

```javascript


//Create an Array
var cars = new Array("Saab", "Volvo", "BMWW");


//An empty Array
var cars = new Array();
// undefined


//Create an Array with 6 length undefined
var cars = new Array(6);
// 6 * undefined


```

<br/>

**2. 通过字面量的方式创建数组**

```javascript


//Create an Array
var array = ["Saab", "Volvo", "BMW"];


//An empty Array
var array = [];
// undefined


//Create an Array with 6 length
var array = ["Saab", "Volvo", "BMW"];
console.log(array.length);  
// 3


//The values of the elements in an array can be different types
var cars = [99,"BMW", true, null, undefined, "new object"];


//Defined Array value
var car7 = [];

cars7[0] = 10;
cars7[1] = 20;

// car7 = [10, 20];


```

<br/>

<h3 id="#">循环遍历数组</h3>

```javascript


var arr = [10, 20, 30, 40, 50]

//display all array values
console.log(arr[0]); 
console.log(arr[1]); 
console.log(arr[2]); 
console.log(arr[3]); 
console.log(arr[4]); 
console.log(arr[5]); 


//so easy
for(var i = 0; i < arr.length; i++) {
    console.log(i);
}


```



<br/>
<hr/>
<br/>



**Example - 1**

计算数组中所有元素的和

```javascript

var arr11 = [10, 20, 30, 40, 50];
var arr11Sum = 0;

for(var i = 0; i < arr11.length; i++) {

    arr11Sum += arr11[i];
}
console.log(arr11Sum);


```

<br/>

**Example - 2**

计算数组中所有元素的平均值

```javascript


var arr12 = [10, 20, 30, 40, 50];
var arr12Sum = 0;
var average = 0;

for(var i = 0; i < arr12.length; i++) {
    
    arr12Sum += arr12[i];
    average = arr12Sum / arr12.length;

}

console.log(average);


```

<br/>

**Example - 3**

计算数组中所有元素的最大值

```javascript


var arr13 = [1, 3, 2, 5, 10, 100, 50];
var arr13Max = arr13[0];

for(var i = 0; i < arr13.length; i++) {

    if(arr13Max < arr13[i]) {
        arr13Max = arr13[i];
    }

}
console.log(arr13Max);


```

<br/>

**Example - 4**

计算数组中所有元素的最小值

```javascript


var arr14 = [10, 20, 30, 40, 50];
var arr14Min = arr12[0]

for(var i = 0; i < arr14.length; i++) {
    if(arr14Min < arr14[i]) {
        arr14Min = arr14[i];
    }
}

console.log(arr12Min);


```

<br/>

**Example - 5**

倒序遍历数组

```javascript


var arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr15Reverse = [];

for(var i = arr15.length-1; i >= 0; i--) {
    
    console.log(arr15[i]);

}


```

<br/>

**Example - 6**

把数组中每个元素用 " | " 拼接到一起产生一个字符串并输出

```javascript

//Method - 1

var naruto = ["卡卡西", "佐助", "鸣人", "大蛇丸", "锄田", "黑崎一护"];
var str = "";

for(var i = 0; i < naruto.length-1; i++) {
    str += naruto[i] + "|";
}

console.log(str + naruto[naruto.length-1]);
 

//Method - 2

var naruto = ["卡卡西", "佐助", "鸣人", "大蛇丸", "锄田", "黑崎一护"];
    var str = "";

    for(var i = 1; i < naruto.length; i++) {

        str += "|" + naruto[i];

    }

    console.log(naruto[0] + str);


```

<br/>

**Example - 7**

去掉数组中重复的 0

```javascript


var arr = [10, 0, 20, 0, 30, 0, 50];
var newArr = [];

for(var i = 0; i <= arr.length; i++) {
    
    if(arr[i] != 0) {
    
        //把新数组的长度最为索引使用 ( 数组的长度是可以改变的 )
        newArr[newArr.length] = arr[i];
    }
}

console.log(newArr);


```

<br/>


**Example - 8**

反转数组

```javascript


var arr = [10, 20, 30, 40, 50];

for(var i = 0; i < arr.length/2; i++) {

    var temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;

}
console.log(arr);


```

<br/>


**Example - 9**

提示用户输入班级人数

求总成绩、平局分、最高分、最低分 

```javascript


var perCount =  parseInt(prompt("Please enter class size"));
var perScore = [];
var perScoreSum = 0;

// var perScoreAvg = [];

for(var i = 0; i < perCount; i++) {
    perScore[perScore.length] = parseInt(prompt("Please enter the score of the" + (i + 1) + "nd person:"));
}
console.log(perScore);

//perScoreSum
for(var i = 0; i < perScore.length; i++) {
    perScoreSum += perScore[i];
}
console.log("perScoreSum:" + perScoreSum);


var perScoreMax = perScore[0];
var perScoreMin = perScore[0];

//perScoreMax
for(var i = 0; i < perScore.length; i++) {
    if(perScoreMax < perScore[i]) {
        perScoreMax = perScore[i];
    }
    if(perScoreMin > perScore[i]) {
        perScoreMin = perScore[i];
    }
}
console.log("perScoreMax:" + perScoreMax);
console.log("perScoreMin:" + perScoreMin);


var perScorAvg = perScoreSum / perCount;
console.log("perScorAvg:" + perScorAvg);


```

<br/>

**Example - 9**

冒泡排序: 把所有的数据按照一定的顺序进行排列 ( 从小到大，从大到小 )

```javascript


var arr = [1, 20, 30, 45, 80, 50];

for (var i = 0; i < arr.length - 1; i++) {

    for (var j = 0; j < arr.length - 1 - i; j++) {

        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);


```

