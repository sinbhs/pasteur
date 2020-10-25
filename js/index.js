$(function(){
    //a 이벤트 방지
    $('a[href="#"]').on('click',function(e){
        e.preventDefault();
        // return false;
    });

    //mobile menu 클릭시 overlay_menu 등장
    $('.mobile_menu').on('click',function(){
        $('.overlay_menu').slideDown().addClass('on');
        $('.mask').addClass('on');
    });
    //mobile overlay_menu close_btn 클릭시 메뉴 닫기
    $('.overlay_menu .close_btn').on('click',function(){
        $('.overlay_menu').slideUp().removeClass('on');
        $('.mask').removeClass('on');
    });

    //scrollTop scroll event 스크롤 이벤트 - scrollTop버튼 등장
    $(window).scroll(function(){
        $('.scrollTop').stop().animate({opacity:0},700);
        var scroll = $(this).scrollTop();
        if(scroll > 400) {
            $('.scrollTop').stop().animate({opacity:1});
        }
    });

    //scrollTop 버튼 클릭 시
    $('.scrollTop').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },600);
    });
});