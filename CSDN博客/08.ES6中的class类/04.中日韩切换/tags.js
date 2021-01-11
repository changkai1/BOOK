class Tag{
    constructor(options){
        this.btns = document.querySelectorAll(options.el+" input");
        this.divs = document.querySelectorAll(options.el+" div");
        this.index = options.index;  // 显示元素的下标
        this.colorArr = options.colorArr;
        this.init();
    }
    init(){ // 初始化
        this.hide();
        this.show();
        // 点击按钮
        for(let i = 0; i < this.btns.length; i++){
            this.btns[i].onclick = (ev)=>{
                this.index = i;
                this.hide();
                this.show();
                ev.cancelBubble = true;
            };
        }
    }
    hide(){ //隐藏div，去除按钮背景色
        for(var i = 0; i < this.btns.length; i++){
            this.btns[i].style.background = null;
            this.divs[i].style.display = "none";
        }
    }
    show(){ //对应按钮下的div显示
        this.btns[this.index].style.background = this.divs[this.index].style.background = this.colorArr[this.index];
        this.divs[this.index].style.display = "block";
    }
}

class strongTag extends Tag{
    constructor(options){
        super(options);
        this.bodyTag();
        this.autoTag(options.s);
    }
    bodyTag(){
        document.body.onclick = ()=>{
            this.index++;
            if(this.index > this.colorArr.length-1){
                this.index = 0;
            }
            this.hide();
            this.show();
        }
    }
    autoTag(s){
       setInterval(()=>{
           this.index++;
            if(this.index > this.colorArr.length-1){
                this.index = 0;
            }
            this.hide();
            this.show();
       },s*100)
    }
}