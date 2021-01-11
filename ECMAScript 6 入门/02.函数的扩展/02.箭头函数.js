// 1. 箭头函数和普通函数写法
var f = function(v){ // 普通函数
    return v;
}
var f = v => v; //箭头函数

//************************************************************************************


// 2. 箭头函数不需要参数或需要多个参数，使用一个圆括号代表参数部分
var f = function(){  // 普通函数没参数
    return 5;
}
var f = () => 5; //箭头函数没参数

var f = function(num1,num2){  //普通函数有参数
    return num1+num2;
}
// 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回
var f = (num1,num2) => num1+num2; //箭头函数有参数，只有一条语句简写形式
var f = (num1,num2) => {          //箭头函数有参数，不简写形式
    return num1+num2;
}

//*****************************************************************************************

// 3.由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错
// let fn = id => { id:id, name:"temp"}; 报错
let fn1 = id => ({id:id, name:"tem"}); // 一行语句返回一个对象的写法，加()
console.log(fn1());

let fn = id =>{
    return {
        id:id,
        name:"temp"
    }
}
console.log(fn());

//*********************************************************************************************

// 4.箭头函数可以与变量解构结合使用
const full = ({ first, last }) => first + ' ' + last;

// 等同于
function fulls(person) {
  return person.first + ' ' + person.last;
}

//*******************************************************************************************

// 5.箭头函数使得表达更加简洁
var ev = function(num){
    return num % 2 ===  0;
}
console.log(ev(4));     // true

const isEven = n => n % 2 === 0;
console.log(isEven(5)); //false

var sq = function(num){
    return num*num;
}
console.log(sq(2)); //4

const square = n => n * n;
console.log(square(3)); // 9

//****************************************************************************************

// 6.箭头函数的一个用处是简化回调函数
// [1,2,3].map(function(x){
//     return x*x;
// })
// [1,2,3,4].map( x => x*x);

//rest 参数与箭头函数结合的例子。
// const numbers = (...nums) => nums;

// numbers(1, 2, 3, 4, 5)
// // [1,2,3,4,5]

// const headAndTail = (head, ...tail) => [head, tail];

// headAndTail(1, 2, 3, 4, 5)
// [1,[2,3,4,5]]

//**************************************************************************************

// 7.箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => this.s1++, 1000);
    // 普通函数
    setInterval(function () {
        this.s2++;
    }, 1000);
}
  
  var timer = new Timer();
/*
    Timer函数内部设置了两个定时器，分别使用了箭头函数和普通函数。
    前者的this绑定定义时所在的作用域（即Timer函数），
    后者的this指向运行时所在的作用域（即全局对象）。
    所以，3100 毫秒之后，timer.s1被更新了 3 次，而timer.s2一次都没更新。
*/   
  setTimeout(() => console.log('s1: ', timer.s1), 3100);  // 3
  setTimeout(() => console.log('s2: ', timer.s2), 3100);  // 0











