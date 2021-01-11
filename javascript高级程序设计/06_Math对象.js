// 获取数组最大值 Math.max()
var values = [1, 2, 3, 4, 5, 6, 7, 8]
var max = Math.max.apply(Math, values)
console.log(max) // 8

/*
    1、Math.ceil()
        执行向上舍入，即它总是将数值向上舍入为最接近的整数
    2、Math.floor()
        执行向下舍入，即它总是将数值向下舍入为最接近的整数
    3、Math.round()
        执行标准舍入，即它总是将数值四舍五入为最接近的整数
    4、Math.random()
        获取随机数[0 1)  包含0，不包括1
*/
console.log(Math.ceil(25.97)) // 26
console.log(Math.floor(25.97)) // 25
console.log(Math.round(25.1257)) // 25

// 获取任意区间随机数
// 方法一
function rand( min,max ){
	return Math.round( Math.random()*(max-min) + min )
}
// 方法二
function rand (min, max) {
    return Math.floor( Math.random()*(max-min+1) + min)
}


