
$(function () {

    var index = 0;
    var timer = null;
    showAndhideEle(index);

    //鼠标点击
    $(".gps>li").on("click",function () {
        index = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $("section").eq(index).show().siblings("section").hide();
        showAndhideEle(index);
        down(index)
    });

    //滚轮 delta滚轮向上为1  向下为-1
    $("section").mousewheel(function(event,delta){
        clearTimeout(timer);
        timer = setTimeout(function () {
            index -= delta;
            if(index > $(".gps>li").length-1){
                index = $(".gps>li").length-1
            }else if(index<0){
                index = 0
            }
            $(".gps>li").eq(index).addClass("current").siblings().removeClass("current");
            $("section").eq(index).show().siblings("section").hide();
            down(index)
        },400)
    });

   // 显示和隐藏
    function showAndhideEle(index){
        if(index==0){
                $(".header-left").css({display:"none"});
            $(".scroll").css({display:"block"})
        }else{
            $(".header-left").css({display:"block"});
            $(".scroll").css({display:"none"})
        }
    }

    //落空类
    function down(index){
        setTimeout(function () {
            $("section").eq(index).removeClass('current').siblings("section").addClass("current");
        },10)

    }

});