/*
    1、apply()
        接收两个参数
        1、运行函数的作用域
        2、数组或者arguments对象
    2、call()
        接收两个参数
        1、运行函数的作用域
        2、传递的参数必须逐个列举出来
    3、bind()
       这个方法会创建一个函数的实例，其this值会被绑定到传给bind()函数的值
    
*/
function sum (num1, num2) {
    return num1 + num2;
}

// apply
// 传入arguments
function applySum1 (num1, num2) {
    return sum.apply(this, arguments)
}
// 传入数组
function applySum2 (num1, num2) {
    return sum.apply(this, [num1, num2])
}
console.log(applySum1(10, 10)) // 20
console.log(applySum2(10, 10)) // 20

// call
function callSum1 (num1, num2) {
    return sum.call(this, num1, num2)
}
console.log(callSum1(1, 2)) // 3

// bind()
var color = 'red';
var obj = {
    color: 'blue'
}
function sayColor () {
    console.log(this.color);
}
var objectSayColor = sayColor.bind(obj) // 绑定到了对象obj上，this指的对象obj
objectSayColor() // blue