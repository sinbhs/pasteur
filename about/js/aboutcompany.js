$(function(){
    //a 이벤트 방지
    $('a[href="#"]').on('click',function(e){
        e.preventDefault();
        // return false;
    });

    //scroll event - scrollTop 버튼 등장
    $(window).scroll(function(){
        $('.scrollTop').stop().animate({opacity:0},700);
        var scroll = $(this).scrollTop();
        if(scroll > 90) {
            $('.scrollTop').stop().animate({opacity:1});
        }
    });

    //scrollTop 버튼 클릭 시
    $('.scrollTop').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },600);
    });
    
    // 밑 이미지 클릭 시 전환
    $('.sub_img li').on('click',function(){
       const img = $(this).children().attr("src");
       const alt = $(this).children().attr("alt");
       $('.gallery img').attr({"src":img, "alt":alt});
       $(this).siblings().children().removeClass('active');
       $(this).children().addClass('active');
   });
});