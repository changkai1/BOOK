// 1、slice() 不会改变原始数组
// var arr = [1,2,3,4,5]
// var brr = arr.slice(1) // [ 2, 3, 4, 5 ]  1代表下标
// var brr1 = arr.slice(1,4)
// console.log(brr1) // [ 2, 3, 4 ] 不包含下标4
// console.log(brr)
// console.log(arr)

// var crr = [6,7,8,9]
// var crr1 = crr.push(10)
// console.log(crr1)
// console.log(crr) // 改变原数组

// 2、splice() 改变原数组
// var arr1 = [1,2,3,4,5]
// 删除：两个参数  要删除的第一项的位置  要删除的项数
// var arr2 = arr1.splice(1,3)
// console.log('arr2', arr2) // [ 2, 3, 4 ]
// console.log('arr1', arr1) // [ 1, 5 ]

// 插入：3个参数  起始位置  0  要插入的项
// var arr3 = arr1.splice(2,0,10,11)
// console.log('arr3', arr3) // []
// console.log('arr1', arr1) // [1,2,10,11,3,4,5]

// 替换 3个参数 起始位置 要删除的项数 要插入的任意数量的项
// var arr2 = arr1.splice(1,2,41,42)
// console.log('arr2', arr2) // [ 2, 3 ]
// console.log('arr1', arr1) // [ 1, 41, 42, 4, 5 ]

// 3、indexOf() 可接收两个参数：要查找的项  查找起始位置的索引(可选)
var arr = [12,2,3,4,5,6,2,8,9]
console.log(arr.indexOf(2,3))