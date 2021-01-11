
changeFontSize();//进来先匹配

window.onresize = function (){
    changeFontSize();
}

function changeFontSize(){// 绑定到窗口的这个事件中
    let designSizeWidth = 1920;// 设计图尺寸
    let html = document.documentElement;
    let wW = html.clientWidth;// 窗口宽度
    if(wW<=900){
        wW = 900;
    }
    let rem = wW * 100 / designSizeWidth;
    document.documentElement.style.fontSize = rem + 'px';
}
