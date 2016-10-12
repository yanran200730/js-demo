var plane = document.getElementById("plane");
var wrap  = document.getElementById("wrap");
var wrapWidth  = wrap.offsetWidth;
var wrapHeight = wrap.offsetHeight;
var planeWidth  = plane.offsetWidth;
var planeHeight = plane.offsetHeight;
var mouseX,mouseY,moveX,moveY;

// 给小飞机添加事件
startHandler = function(event){
    event.preventDefault()  //阻止拖动图片时的默认行为
    mouseX = event.clientX - wrap.offsetLeft - plane.offsetLeft;
    mouseY = event.clientY - wrap.offsetTop - plane.offsetTop; 
    document.addEventListener('mousemove', moveHandler);
}

moveHandler = function(event){
    moveX = event.clientX - wrap.offsetLeft - mouseX;
    moveY = event.clientY -  wrap.offsetTop - mouseY;

    //给小飞机设定移动限制
    if (moveX > wrapWidth - planeWidth) {
        plane.style.left = wrapWidth - planeWidth + "px";
    } else if (moveX > 0 && moveX < wrapWidth){
        plane.style.left = moveX + "px";
    } else {
        plane.style.left = 0;
    }
    if (moveY > wrapHeight - planeHeight) {
        plane.style.top = wrapHeight - planeHeight+ "px";
    } else if (moveY > 0 && moveY < wrapHeight){
        plane.style.top = moveY + "px";
    } else {
        plane.style.top = 0;
    }
};

endHandler = function(event){
    document.removeEventListener('mousemove',moveHandler)
};

plane.addEventListener('mousedown', startHandler);
document.addEventListener('mouseup', endHandler);


// 随机生成
function EnemyPlane(){
    this.list = document.getElementById("list");
    this.number = Math.floor(Math.random()*5+2); //敌机的数量
    this.wrapHeight = wrapHeight;  //界面的高度
    this.init();
    this.renderDom();             //渲染敌机DOM,初始化相关配置
}

EnemyPlane.prototype.init = function(){
    var list = this.list;
    var len = list.getElementsByTagName("li").length;
    if (len){
        var li = list.getElementsByTagName("li");
        for (var i=0;i<len;i++){
            list.removeChild(list.childNodes[0]);
        }
    }
};

EnemyPlane.prototype.renderDom = function(){
    var list = this.list;
    var number = this.number;
    var wrapHeight = this.wrapHeight;
    var Int = wrapWidth/number;        
    var randomInt = Math.random()*(Int - 63); //随机敌机的纵坐标

    for (var i=0;i<number;i++){
        var li = document.createElement("li");
        var img = document.createElement("img");
        li.style.webkitTransition = "-webkit-transform 6s linear " + Math.floor(Math.random()*4) + "s";
        li.style.left = randomInt + i*Int + "px";
        li.style.webkitTransform = 'translateY(' + 0  + '+px)';
        img.setAttribute("src","img/enemy.png");
        li.appendChild(img);
        list.appendChild(li);
    }
};

EnemyPlane.prototype.move = function(){
    var list = this.list;
    var li = list.getElementsByTagName("li");
    var wrapHeight = this.wrapHeight;
    var width = this.width;

    for (var i=0;i<li.length;i++){       
        li[i].style.webkitTransform = 'translateY('+ wrapHeight + 'px)';
    } 
};

var enemyPlane = new EnemyPlane();
window.onload = function(){
    var timer = setInterval(function(){
        var enemyPlane = new EnemyPlane();
        setTimeout(function(){
            enemyPlane.move();
        },100)
        // enemyPlane.move();
    },10000)
}


