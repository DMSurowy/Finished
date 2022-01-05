$(document).ready(function(){
    $("#showMore").click(function(){
        console.info("I was clicked")
        $("#moreContent").slideToggle("slow", function(){
            if($(this).is(':hidden')){
                $("#showMore").text("Show Details")
            }else{
                $("#showMore").text("Hide Details")
            }
        });
    });

    $(".burgerMenu").click(function(){
        $("nav").slideToggle("fast")
    });

    $("#lightSlider").lightSlider({
     item: 1,
     slideMargin: 0,
     loop: true,
     auto: true
    });

});