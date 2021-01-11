//输出多个变量
let myNames = "laotie";
let myAge = 90;
let myfn = function(){
	return "我是"+myNames+",今年"+myAge+"岁了";
}
//导出多个变量,如果不想暴露模块中的变量名字，可以通过as来进行操作
export {
	myNames as name,
	myAge as age,
	myfn as fn
}

