/*
    1.constructor方法是类的构造函数的默认方法，通过new命令生成对象实例时，自动调用该方法。
*/
class Box{
    constructor(){
        console.log("自动执行constructor");
    }
}
var obj = new Box();

/*
    2.constructor方法如果没有显式定义，会隐式生成一个constructor方法。
      所以即使你没有添加构造函数，构造函数也是存在的。
      constructor方法默认返回实例对象this，
      但是也可以指定constructor方法返回一个全新的对象，让返回的实例对象不是该类的实例。
*/
class Dask{
    constructor(){
        this.msg = "嘻嘻嘻嘻";
    }
}
class Box1{
    constructor(){
        return new Dask();  // 直接返回一个全新的对象
    }
}
var obj1 = new Box1();
console.log(obj1.msg); // 嘻嘻嘻嘻


/*
    3.constructor中定义的属性可以称为实例属性（即定义在this对象上），
      constructor外声明的属性都是定义在原型上的，可以称为原型属性（即定义在class上)。
      hasOwnProperty()函数用于判断属性是否是实例属性。其结果是一个布尔值， true说明是实例属性，false说明不是实例属性。
      in操作符会在通过对象能够访问给定属性时返回true,无论该属性存在于实例中还是原型中。
*/

class Box2{
    constructor(num1,num2){
        this.num1 = num1;
        this.num2=num2;
    }
    sum(){
        return num1+num2;
    }
}
var box2=new Box2(12,88);
console.log(box2.hasOwnProperty("num1"));//true
console.log(box2.hasOwnProperty("num2"));//true
console.log(box2.hasOwnProperty("sum"));//false
console.log("num1" in box2);//true
console.log("num2" in box2);//true
console.log("sum" in box2);//true
console.log("say" in box2);//false


/*
    4.class不存在变量提升，所以需要先定义再使用。
      因为ES6不会把类的声明提升到代码头部，但是ES5就不一样,ES5存在变量提升,可以先使用，然后再定义。


        //ES5可以先使用再定义,存在变量提升
        new A();
        function A(){

        }
        
        //ES6不能先使用再定义,不存在变量提升 会报错
        new B(); //B is not defined
        class B{

        }
*/




