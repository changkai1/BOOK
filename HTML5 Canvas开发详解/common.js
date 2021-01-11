/*
    1.绘制多边形
        n:表示多边形  
        dx/dy：表示n变形中心坐标
        size:表示n变形的大小
*/ 
function createPolygon(cxt,n,dx,dy,size){
    cxt.beginPath();
    var degree = (2*Math.PI)/n;
    for(var i = 0; i < n; i++){
        var x = Math.cos(i*degree);
        var y = Math.sin(i*degree);
        cxt.lineTo(x*size + dx,y*size + dy);
    }
    cxt.closePath();
}












