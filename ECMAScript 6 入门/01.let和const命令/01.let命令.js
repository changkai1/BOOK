/*
    暂时性死区的本质：只要一进入当前作用域，所要使用的变量就已经存在了，
    但是不可获取，只有等到声明变量的那一行代码出现，才能获取和使用该变量。
*/


{
    let a = 10;
    var b = 1;
}
// 1. let声明的变量只在它所在的代码块有效
// console.log(a);  // 报错
console.log(b);     // 1

for(let i = 0; i < 10; i++){

}
// 2.计数器i只在for循环体内有效，再循环体外引用就会报错
// console.log(i);  // 报错  


// 3. for循环中使用var和let
var a = [];
for(var i = 0; i < 10; i++){
    a[i] = function(){
        console.log(i);
    }
}
a[6](); //10
/*
    执行：
    当i=0时，输出的i指向的是0;
    a[0] = function(){
        console.log(i);   i指向0
    }

    当i=1时，输出的i指向的是1;以此类推
    a[0] = function(){
        console.log(i);   i指向1
    }
    a[1] = function(){
        console.log(i);   i指向1
    }
*/
var b = [];
for(let i = 0; i < 10; i++){
    b[i] = function(){
        console.log(i)
    }
}
b[7](); // 7

// 4. let定义的变量for循环有两个作用域，设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
for(let i = 0; i < 3; i++){  // ()是父作用域
    let i = "abc";   // {}是子作用域
    console.log(i);
}

// 5.let不存在变量提升,var定义的变量存在变量提升，先找var，找不到赋值undefined
console.log(foo);  //undefined
var foo = 2;

// console.log(bar); // 报错
let bar = 3;


// 6.let不允许在相同作用域内重复声明同一个变量
function func(){
    let a = 10;
    var a = 1;
}
function fun(){
    let a = 10;
    let a = 1;
}


// 7.ES6的块级作用域
function f1(){
    let n = 5;
    if(true){
        let n = 10;
    }
    console.log(n);
}
f1(); //5


// 8. 块级作用域内函数写成函数表达式，而不是函数声明语句
{
    let a = "secret";
    let f = function(){ // 块级作用域内部，优先使用函数表达式
        return a;
    }
    console.log(f()); //secret
}

{
    let a = 'secret';
    function f() { // 块级作用域内部的函数声明语句，建议不要使用
      return a;
    }
    // console.log(fn()) // 报错
}
