window.onload = function(){
    var list = [[1,2,3,4,5,6,7],[8,9,10,11,12,13,14],[15,16,17,18,19,20,21]];

    function Slider(opts){
        this.wrap = opts.dom;
        this.list = opts.list;
        this.width = window.innerWidth;
        this.init();
        this.renderDOM();
        this.bindDOM();
    }

    Slider.prototype.init = function(){
        this.index = 0;
    };

    Slider.prototype.renderDOM = function(){
        var wrap = this.wrap;
        var data = this.list;
        var len  = data.length;
        var listLen = data[0].length;

        this.outer = document.getElementById("list");
        for (var i=0;i<len;i++){
            var li = document.createElement("li");
            var item = data[i];
            li.style.webkitTransform = 'translate3d('+ i*this.width +'px, 0, 0)';
            for (var j=0;j<listLen;j++){
                var span = document.createElement("span");
                span.innerHTML = data[i][j];
                li.appendChild(span);
            }
            this.outer.appendChild(li);
        }
    };

    Slider.prototype.goIndex = function(n){
        var index = this.index;
        var li    = this.outer.getElementsByTagName("li");
        var len   = li.length;
        var cindex = index + n*1;

        if (cindex > len -1){
            cindex = len -1;
        }else if (cindex < 0){
            cindex = 2;
        }

        this.index = cindex;
        li[cindex].style.webkitTransition = '-webkit-transform 0.2s ease-out';
        li[cindex-1] && (li[cindex-1].style.webkitTransition = '-webkit-transform 0.2s ease-out');
        li[cindex+1] && (li[cindex+1].style.webkitTransition = '-webkit-transform 0.2s ease-out');

        if(n == "-1" && index == 0){
            li[0].style.webkitTransform = 'translate3d('+ this.width +'px, 0, 0)';
        }
        
        li[cindex].style.webkitTransform = 'translate3d(0, 0, 0)';
        li[cindex-1] && (li[cindex-1].style.webkitTransform = 'translate3d(-'+ this.width +'px, 0, 0)');
        li[cindex+1] && (li[cindex+1].style.webkitTransform = 'translate3d('+ this.width +'px, 0, 0)');
    };

    Slider.prototype.bindDOM = function(){

        var self  = this;
        var width = self.width;
        var wrap  = self.wrap;
        var outer = self.outer;
        var index = self.index;
        var len   = self.list.length;

        var startHandler = function(event){
            var li = outer.getElementsByTagName("li");
            self.startTime = new Date() * 1;
            self.startX    = event.touches[0].pageX;
            self.offsetX   = 0;
            if (self.index == 0){
                li[2].style.webkitTransform = 'translate3d(-'+ width +'px, 0, 0)';
            }
        }; 


        var moveHandler = function(event){

            var li = outer.getElementsByTagName("li");
            var i  = self.index - 1;
            var m = i + 3;

            event.preventDefault();
            self.offsetX = event.touches[0].pageX - self.startX;

            for (i; i < m; i++){
                li[i] && (li[i].style.webkitTransition = '-webkit-transform 0s ease-out');
                li[i] && (li[i].style.webkitTransform = 'translate3d('+ ((i-self.index)*width + self.offsetX) +'px, 0, 0)');
                if (i === -1) {
                    li[2].style.webkitTransform = 'translate3d(-'+  (width-self.offsetX) +'px, 0, 0)';
                }
            }
        };


        var endHandler = function(enevt){

            var endTime = new Date() * 1;
            var li = outer.getElementsByTagName("li");
            var boundary = width/2;
            event.preventDefault();

            if (endTime - self.startTime >= 300){
                if (self.offsetX >= boundary){
                    self.goIndex("-1");
                }else if (self.offsetX < 0 && self.offsetX < -boundary){
                    self.goIndex("+1");
                }else{
                    self.goIndex("0");
                }
            }else{
                if (self.offsetX > 50){
                    self.goIndex("-1");
                }else if(self.offsetX < -50){
                    self.goIndex("+1");
                }else{
                    self.goIndex("0");
                }
            }
        }; 

        wrap.addEventListener('touchstart', startHandler,false);
        wrap.addEventListener('touchmove', moveHandler,false);
        wrap.addEventListener('touchend', endHandler,false);
    };

    var obj = new Slider({
        dom : document.getElementById("wrap"),
        list: list
    });
    console.log(obj)
};