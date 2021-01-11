/*
    1.不需要实例化类，即可直接通过该类来调用的方法，即称之为“静态方法”。
      将类中的方法设为静态方法也很简单，在方法前加上static关键字即可。
      这样该方法就不会被实例继承
*/
class Box{
    static a(){
        return "我是box类中的实例方法，无需实例化，可直接调用";
    }
    static b(){
        console.log(this.a());
    }
    c(){
        console.log("我只允许被静态方法调用")
    }
}
/*
    2.通过类直接调用
    上面的代码一，类Box的a方法前有static关键字， 表明该方法是一个静态方法， 可以直接在Box类上调用。
    静态方法只能在静态方法中调用,不能在实例方法中调用。
*/ 
console.log(Box.a()); // 我是box类中的实例方法，无需实例化，可直接调用
Box.b();              // 我是box类中的实例方法，无需实例化，可直接调用

// 3.通过实例方法来调用静态方法会报错
// var obj = new Box();
// obj.b();  //报错  obj.b is not a function
 

// 4. 父类的静态方法可以被子类继承
class Box2{
    static d(){  // 父类Box2的静态方法
        return "我是父类的静态方法d"
    }
}
class Desk extends Box2{
    constructor(){
        super()
    }
}
// 子类继承父类，可以直接调用父类的静态方法d
console.log(Desk.d()); //我是父类的静态方法d


// 5.子类的静态方法调用父类的静态方法，需要从super对象上调用
class Box3{
    static e(){
        return "我是通过子类super来调取出来的";
    }
}
class Desk2 extends Box3{
    static f(){
        return super.e();  // 子类静态方法调用父类的静态方法使用super
    }
}
console.log(Desk2.f());  // 我是通过子类super来调取出来的


// 6.静态属性指的是Class本身的属性，而不是定义在实例对象(this)上的属性
class Box4{
    constructor(){
        this.name = "实例属性"
    }
}
Box4.prop1 = "静态属性1";
Box4.prop2 = "静态属性2";









