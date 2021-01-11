    /* 
    ES5
    构造函数生成实例的执行过程：
        1.当使用了构造函数，并且new 构造函数(),后台会隐式执行new Object()创建对象;
        2.将构造函数的作用域给新对象，（即new Object()创建出的对象），而函数体内的this就代表new Object()出来的对象。
        3.执行构造函数的代码。
        4.返回新对象（后台直接返回）;
    */
    function Person1(name,age){
        this.name = name;
        this.age = age;
    }
    Person1.prototype.say1 = function(){
        return "我的名字叫" + this.name + "今年" + this.age + "岁了";
    }
    var obj1 = new Person1("laotie",88); //通过构造函数创建对象，必须使用new运算符
    console.log(obj1.say1()); //我的名字叫laotie今年88岁了

//*****************************************************************************************************

    /*
        ES6构造函数
            注意：1.在类中声明方法的时候，千万不要给方法加上function关键字
                 2.方法之间不要用逗号分隔，否则会报错
    */
    class Person2{  // 定义了一个名字为persons的类
        constructor(name,age){ //constructor是一个构造方法，用来接收参数
            this.name = name;
            this.age = age;
        }
        say2(){ //类的方法，注意千万不要加上function
            return "我的名字叫" + this.name + "今年" + this.age + "岁了";
        }
    }

     //可以通过prototype属性给类添加方法
    Person2.prototype.addFn = function(){
        return "我是通过prototype新增的方法，名字叫addFn"
    } 

    // 通过Object.assign 方法来为对象动态增加方法
    Object.assign(Person2.prototype,{
        getName:function(){
            return this.name
        },
        getAge:function(){
            return this.age
        }
    })

    var obj2 = new Person2("laoli","8");
    console.log(obj2.say2());    // 我的名字叫laoli今年8岁了
    console.log(obj2.addFn());   // 我是通过prototype新增的方法，名字叫addFn
    console.log(obj2.getName()); // laoli
    console.log(obj2.getAge());  //  8
    console.log(typeof Person2); // function
   
    






