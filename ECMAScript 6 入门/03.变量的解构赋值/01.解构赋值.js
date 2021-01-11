// 1.数组的解构赋值
// ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
let [a,b,c] = [1,2,3];
console.log(a); // 1

//*******************************************************************************

// 2.对象的解构赋值
let {foo,bar} = {foo:"aaa",bar:"bbb"};
// let {bar,foo} = {foo:"aaa",bar:"bbb"};  // 与变量的位置没关系
console.log(foo,bar);  // aaa   bbb

//********************************************************************************

// 3.字符串解构赋值
const [d,e,f,g,h] = 'hello';
console.log(d,e,f,g,h); // h e l l o
let {length:len} = "hello";
console.log(len); //5

//*********************************************************************************

/*
    4.数值和布尔值的解构赋值
        如果等号右边是数值和布尔值，则会先转为对象
*/ 
// let {toString: s} = 123;
// s === Number.prototype.toString // true

// let {toString: s} = true;
// s === Boolean.prototype.toString // true

// let { prop: x } = undefined; // TypeError
// let { prop: y } = null; // TypeError

//*******************************************************************************

/*
    5.从函数返回多个值
        函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。
        有了解构赋值，取出这些值就非常方便。
*/ 
// 返回一个数组
function example() {
    return [1, 2, 3];
}
let [q,w,r] = example();
console.log(q,w,r);   // 1 2 3

// 返回一个对象
function exe() {
    return {
      n: 1,
      j: 2
    };
}
let { n, j } = exe();
console.log(n,j); // 1 2

//********************************************************************************

// 6.提取JSON数据
let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number); // 42 'OK' [ 867, 5309 ]


