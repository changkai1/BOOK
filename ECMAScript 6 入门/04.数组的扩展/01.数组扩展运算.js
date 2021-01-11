//拓展运算符  将一个数组转为用逗号分隔的参数序列

// console.log(...[1,2,3]);
var arr1 = [4,5];
var arr2 = [6,7];

// 直接push数组
arr1.push(arr2)
console.log(arr1);  // [ 4, 5, [ 6, 7 ] ]

// 使用拓展运算符
var arr3 = [12,34];
var arr4 = [56,78];
arr3.push(...arr4);
console.log(arr3);   // [ 12, 34, 56, 78 ]


// 1.复制数组  ES5
const a1 = [45,23];
const a2 = a1.concat();
a2[0] = 2;
console.log(a1); //[45,23]

// 复制数组  ES6
const a3 = [45,56];
const a4 = [...a3];
a3[0] = 0;
console.log(a4); //[ 45, 56 ]

//***************************************************

// 2.数组合并
var arr5 = ["a","b"];
var arr6 = ["c"];
var arr7 = ["d","e"];
// ES5数组合并
var arr8 = arr5.concat(arr7,arr6);
console.log(arr8);  // [ 'a', 'b', 'd', 'e', 'c' ]
// ES6数组合并
var arr9 = [...arr5,...arr6,...arr7];
console.log(arr9); // [ 'a', 'b', 'c', 'd', 'e' ]
 
// 浅拷贝  它们的成员都是对原数组成员的引用
var b1 = [{foo:1}];
var b2 = [{bar:2}];
var b3 = b1.concat(b2);
var b4 = [...b1,...b2];
console.log(b3,b4);  //[ { foo: 1 }, { bar: 2 } ]
console.log(b3[0] === b1[0]);  //true
console.log(b4[0] === b1[0]);  //true

//****************************************************

// 3.可以将字符串转为真正的数组
var c1 = [..."hellow"];
console.log(c1);  //[ 'h', 'e', 'l', 'l', 'o', 'w' ]
// 可以识别unicode字符
var c2 = [...'x\uD83D\uDE80y']; // [ 'x', '🚀', 'y' ]
console.log(c2);

var c3 = [...'x\uD83D\uDE80y'].reverse().join(""); 
console.log(c3);  // y🚀x

//***********************************************************

// 4.Array.of()  将一组值，转换为数组。弥补Array()的不足
//Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一。
// Array.of()
console.log(Array.of());       // []
console.log(Array.of(1));      // [ 1 ]
console.log(Array.of(1,2));    // [ 1, 2 ]

/*
    Array方法没有参数、一个参数、三个参数时，返回结果都不一样。
    只有当参数个数不少于 2 个时，Array()才会返回由参数组成的新数组。
    参数个数只有一个时，实际上是指定数组的长度。
*/ 

console.log(Array());          // []
console.log(Array(1));         // [ <1 empty item> ] 指的是数组长度为1
console.log(Array(1,2));       // [ 1, 2 ]
console.log(Array(1,2,3));     // [ 1, 2, 3 ]

//**************************************************************************************

/*
    5.find() 找出第一个符合条件的数组成员,找到返回true,找不到返回undefined
      findIndex() 找到第一个符合条件的数组成员的下标位置，找不到返回-1
*/ 
var s = [1,4,-3,10].find((n) => n < 0);
console.log(s);  // -3

var s2 = [1,5,10,15].find(function(value,index,arr){
    return value > 10;
})
console.log(s2);  //15

var s3 = [1,5,10,15].find(function(value,index,arr){
    return index > 1; // 下标大于1的值
})
console.log(s3); //10

var s4 = [1,5,10,15].findIndex(function(value,index,arr){
    return value > 5; 
})
console.log(s4); // 值大于5的下标 2

var s4 = [1,5,10,15].findIndex(function(value,index,arr){
    return value > 5; 
})
console.log(s4); // 值大于5的下标 2

// find() findIndex() 都可以接收第二个参数，用来绑定回调函数的this对象
function f(v){
    return v > this.age;
}
let person = {
    name:"John",
    age:20
}
var s5 = [10,15,20,25].find(f,person);
console.log(s5);  // 25;

var s6 = [10,15,20,35].findIndex(f,person);
console.log(s6); // 3 返回的是下标

//******************************************************************************************

/*
    6.includes() 方法返回一个布尔值,第二个参数表示搜索的起始位置，默认为0，
      如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。
*/
var d1 = [1,2,3];
console.log(d1.includes(2));   // true
console.log(d1.includes(4));   // false
console.log(d1.includes(4));   // false
console.log(d1.includes(3,2)); // true  第二个参数表示从哪个下标位置开始搜索












