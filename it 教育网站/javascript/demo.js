$(document).ready(function(){
    var liObj  = $("#list li");
    var divObj = $(".detail .course-sort");
    var index;
    var startTime,endTime,time,flag,mark;

    liObj.hover( function(event) {
        endTime = new Date();
        startTime?(time = endTime - startTime):(startTime=null);
        index = liObj.index($(this)[0]);
        $(this).addClass('list-show');
        $(".detail").addClass('detail-show');
        if (startTime && time < 100 && flag === index) {
            divObj.eq(index).addClass('show').siblings().removeClass('show');
        }else {
            divObj.eq(index).addClass('show animation').siblings().removeClass('show');
        }
        return false
    }, function(event) {
        $(".detail").removeClass('detail-show');
        divObj.removeClass('show animation');
        $(this).removeClass('list-show');
        $(".detail").hover( function() {
            $(this).addClass('detail-show');
            $(divObj).eq(index).addClass('show');
            liObj.eq(index).addClass('list-show');                
        }, function() {
            flag = index;
            startTime = new Date();
            $(this).removeClass('detail-show');
            divObj.eq(index).removeClass('show');
            liObj.eq(index).removeClass('list-show');
            $(this).unbind('mouseenter mouseleave');
        });
        return false      
    });
})