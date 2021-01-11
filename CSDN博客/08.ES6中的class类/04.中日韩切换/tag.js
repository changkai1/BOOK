class Tag{
    constructor(id){
        this.id = document.getElementById("country");
        this.btn = this.id.querySelectorAll("input");
        this.div = this.id.querySelectorAll("div");
        this.color = ['red','yellow','green'];
        this.index = 0; // 显示元素的下标
        this.init();
    }
    init(){ // 初始化
        this.hide();
        this.show();
        // 点击按钮
        for(let i = 0; i < this.btn.length; i++){
            this.btn[i].onclick = function(){
                this.index = i;
                this.hide();
                this.show()
            }.bind(this);
        }
    }
    hide(){ //隐藏div，去除按钮背景色
        for(var i = 0; i < this.div.length; i++){
            this.div[i].style.display = "none";
            this.btn[i].style.background = null;
        }
    }
    show(){ //对应按钮下的div显示
        this.div[this.index].style.display = "block";
        this.btn[this.index].style.background = this.div[this.index].style.background = this.color[this.index];
    }
}