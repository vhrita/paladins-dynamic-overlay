$(document).ready(function(){
    function animatedLines() {
        $(".cam span:nth-child(1)").addClass("span1")
        .delay(1000).queue(function(next1){
            $(".cam span:nth-child(1)").removeClass("span1");
            $(".cam span:nth-child(2)").addClass("span2");
            next1();
        }).delay(1000).queue(function(next2){
            $(".cam span:nth-child(2)").removeClass("span2");
            $(".cam span:nth-child(3)").addClass("span3");
            next2();
        }).delay(1000).queue(function(next3){
            $(".cam span:nth-child(3)").removeClass("span3");
            $(".cam span:nth-child(4)").addClass("span4");
            next3();
        }).delay(1000).queue(function(next4){
            $(".cam span:nth-child(4)").removeClass("span4");
            next4();
        }).delay(0).fadeOut(0, animatedLines);
    }
    animatedLines();
});