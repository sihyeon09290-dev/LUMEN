

const storeSwipers = document.querySelectorAll('.storeSwiper');

storeSwipers.forEach(function(swiperElement) {
    new Swiper(swiperElement, {
        loop: true,
        speed: 600,           // 슬라이드가 넘어가는 속도 (부드럽게 밀리는 속도 조절)
        
        // 💡 화살표 버튼 기능 활성화
        navigation: {
            nextEl: swiperElement.querySelector('.swiper-button-next'),
            prevEl: swiperElement.querySelector('.swiper-button-prev'),
        },
        
        // 자동 재생을 빼고 싶다면 아래 autoplay 블록은 지워주세요!
        // (버튼을 누를 때만 넘어가게 하려면 자동재생을 없애는 것이 좋습니다)
    });
});
