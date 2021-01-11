/*
    1. 子类的constructor方法和say方法中，都出现了super关键字，它在这里表示父类的构造函数，用来新建父类的this对象。 
       子类必须在constructor方法中调用super方法，之后才能使用this关键字，否则新建实例时会报错。
       这是因为子类没有自己的this对象，而是继承父类的this对象。如果不调用super方法，子类就得不到this对象。
       在这一点上ES5的继承与ES6正好相反，ES5先创建自己的this对象然后再将父类的属性方法添加到自己的this当中。 
       如果子类First没有显式的定义constructor，那么下面的代码将被默认添加(不信可以尝试下，哈)。换言之，如果constructor函数中只有super的话，该constructor函数可以省略。
*/

// super 详解  https://www.jb51.net/article/126399.htm
// constructor(){} 中的方法会自动执行
class Cucurbit{
    constructor(name,color){
        console.log("farther");
        this.name = name;
        this.color = color;
    }
    say(){
        console.log("我的名字叫"+ this.name + "我是" + this.color + "颜色的");
    }
}

class First extends Cucurbit{
    constructor(name,color) {
        super(name,color);  // 调用父类的constructor(name,color)
    }
    say(){
        console.log("我是child");
        super.say();   // 调用父类的 say()
    }
}
var wa = new First("大娃","红色");
wa.say();  // farther  我是child   我的名字叫大娃我是红色颜色的







