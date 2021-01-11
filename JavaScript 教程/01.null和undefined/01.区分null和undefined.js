// null 和 undefined
/*
    null 是一个表示"空"的对象，转为数值时为0
    null 表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入null，表示该参数为空。
    undefined 是一个表示"此处无定义"的原始值，转为数值时为NaN。
*/

// 1. if语句中null、undefined、false、0、NaN "" 空字符串  都会自动转变为false
//    空数组 ([]) 和空对象 ({}) 对应的布尔值,都是true。
    if(!null){
        console.log(11);
    }

    if(!undefined){
        console.log(22);
    }

    if( !0 ){
        console.log(33);
    }

    if( !NaN ){
        console.log(44);
    }

    if( !"" ){
        console.log(55);
    }

    if([]){ // 空数组解析为true
        console.log(66);
    }

    if({}){ // 空对象解析为true
        console.log(77);
    }

// 2. == 运算符直接报两者相等
console.log(null == undefined) // true

// 3. null转为数字时，自动变成0
console.log(Number(null)); // 0

// 4. undefined转为数值时为NaN
console.log(Number(undefined)); //NaN

// 5.函数没有返回值时，默认返回 undefined
function f(){}
console.log(f()); //undefined



