function my$(ele) {

    return document.getElementById(ele);
}


var arr = [

    {word: 'Root', mean: 'Meaning in English', example: 'English examples'},
    {word: 'a', mean: 'b', example: 'c'},
    {word: 'a', mean: ' ', example: ' '}
];


//创建 table 加入 div
var tableObj = document.createElement('table');
my$('tb').appendChild(tableObj);


//创建行，追加到 table 中
for (var i = 0; i < arr.length; i++) {

    //get all ele
    var dt = arr[i];

    //create multi row
    var trObj = document.createElement('tr');
    tableObj.appendChild(trObj);

    //create col 1
    var td1 = document.createElement('td');
    td1.innerText = dt.word;
    td1.className = 'tds';
    trObj.appendChild(td1);

    //create col 2
    var td2 = document.createElement('td');
    td2.innerText = dt.mean;
    td2.className = 'tds';
    trObj.appendChild(td2);

    //create col 3
    var td3 = document.createElement('td');
    td3.innerText = dt.example;
    td3.className = 'tds';
    trObj.appendChild(td3);

}

























































































