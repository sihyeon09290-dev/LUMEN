// 썸네일 Swiper
var swiper = new Swiper('.product_thumbnail', {
    spaceBetween: 0,
    slidesPerView: 'auto',
    freeMode: true,
});

// submenu
$(function() {

    // .submenu를 숨긴다.
    $(".sub-menu-section").hide();

    // .gnb li한테 마우스를 올리면,
    $(".nav li").mouseenter(function() {

        // .gnb li의 자식요소인 .submenu가 slideDown 한다.
        $(this).children(".sub-menu-section").stop().slideDown();
    });

    // .gnb li에서 마우스가 벗어나면,
    $(".nav li").mouseleave(function() {

        // .gnb li의 자식요소인 .submenu가 slideUp 한다.
        $(this).children(".sub-menu-section").stop().slideUp();
    });
});





// 메인 이미지 Swiper
var swiper2 = new Swiper('.product_main_image', {
    spaceBetween: 0,
});


// 썸네일 클릭
$('.product_thumbnail .swiper-slide').on('click', function () {

    // 클릭한 썸네일의 순서
    var index = $(this).index();

    // 썸네일 0번 → 메인 이미지 1번
    // 썸네일 1번 → 메인 이미지 2번
    // 썸네일 2번 → 메인 이미지 3번
    // 썸네일 3번 → 메인 이미지 4번
    swiper2.slideTo(index + 1);
    // +1을 해주는 이유 : 메인 이미지 첫 번째가 기본 이미지이기 때문

});