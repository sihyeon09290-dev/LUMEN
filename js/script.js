
// ============================== OPENING ==============================
// $(function () {

// const opening = document.getElementById('opening');
// const video = document.getElementById('opening_video');

// if (!opening || !video) return;

// let openingEnded = false;


// function closeOpening() {

//     if (openingEnded) return;

//     openingEnded = true;

//     console.log('OPENING CLOSE');


// 영상이 끝난 뒤 잠깐 유지
//     setTimeout(function () {

//         $(opening).fadeOut(1000, function () {

//             opening.remove();

//             console.log('OPENING REMOVED');

//         });

//     }, 300);

// }


// 영상이 완전히 끝났을 때
// video.addEventListener('ended', function () {

//     console.log('VIDEO ENDED');

//     closeOpening();

// });


// 영상 오류
// video.addEventListener('error', function () {

//     console.log('VIDEO ERROR');

//     closeOpening();

// });


// 영상 재생
// video.play().then(function () {

//     console.log('VIDEO PLAYING');

// }).catch(function (error) {

//     console.log('VIDEO PLAY ERROR:', error);

//     closeOpening();

// });

// });


// ------------------------ main banner
$(function () {
    var swiper = new Swiper('.main_banner', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 800,
    });
});



// --------------------- .product_info
const productInfo = document.querySelector('.product_info');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            productInfo.classList.add('active');
        } else {
            productInfo.classList.remove('active');
        }

    });
}, {
    threshold: 0.3
});

observer.observe(productInfo);


//----------------------- header 
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {

    if (window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

});


// ------------------------ shop
$(function () {
    new Swiper('.shop_slider_swiper', {

        slidesPerView: 'auto',
        spaceBetween: 20,

        loop: true,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },

        speed: 1000

    });

});


//---------------------------- color chip
document.querySelectorAll('.color_chip').forEach(function (colorGroup) {

    const chips = colorGroup.querySelectorAll('.chip');

    chips.forEach(function (chip) {

        chip.addEventListener('click', function () {

            chips.forEach(function (item) {
                item.classList.remove('active');
            });

            this.classList.add('active');

        });

    });

});

document.querySelectorAll('.shop_item').forEach(function (item) {

    const productImg = item.querySelector('.product_img');
    const chips = item.querySelectorAll('.color_chip .chip');

    chips.forEach(function (chip) {

        chip.addEventListener('click', function () {

            chips.forEach(function (chip) {
                chip.classList.remove('active');
            });

            this.classList.add('active');

            productImg.src = this.dataset.image;

        });

    });

});


// ------------------ lumen care
const careImages = document.querySelectorAll('.care-image');

const careObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }

    });

}, {
    threshold: 0.3
});


careImages.forEach((image) => {
    careObserver.observe(image);
});




/* =========================  STORE CARD JS  ========================= */

const cards = document.querySelectorAll(".store_card");


cards.forEach(card => {


    /* 마우스를 올렸을 때 */

    card.addEventListener("mouseenter", () => {

        cards.forEach(item => {

            item.classList.remove("active");

        });

        card.classList.add("active");

    });


    /* 클릭했을 때 */

    card.addEventListener("click", () => {

        cards.forEach(item => {

            item.classList.remove("active");

        });

        card.classList.add("active");

    });

});





// =============== LOOKBOOK ======================

const lookbookData = {

    spring: {
        video: "./ai_video/spring_lookbook_video.mp4",

        items: [
            { img: "./images/lookbook/spring_02.jpg" },
            { img: "./images/lookbook/spring_03.jpg" },
            { img: "./images/lookbook/spring_04.jpg" },
            { img: "./images/lookbook/spring_05.jpg" },
            { img: "./images/lookbook/spring_06.jpg" },
            { img: "./images/lookbook/spring_07.jpg" }
        ]
    },


    summer: {
        video: "./ai_video/summer_lookbook_video.mp4",

        items: [
            { img: "./images/lookbook/summer_02.jpg" },
            { img: "./images/lookbook/summer_03.jpg" },
            { img: "./images/lookbook/summer_04.jpg" },
            { img: "./images/lookbook/summer_05.jpg" },
            { img: "./images/lookbook/summer_06.jpg" },
            { img: "./images/lookbook/summer_07.jpg" }
        ]
    },


    autumn: {
        video: "./ai_video/autumn_lookbook_video.mp4",

        items: [
            { img: "./images/lookbook/fall_02.jpg" },
            { img: "./images/lookbook/fall_03.jpg" },
            { img: "./images/lookbook/fall_04.jpg" },
            { img: "./images/lookbook/fall_05.jpg" },
            { img: "./images/lookbook/fall_06.jpg" },
            { img: "./images/lookbook/fall_07.jpg" }
        ]
    },


    winter: {
        video: "./ai_video/winter_lookbook_video.mp4",

        items: [
            { img: "./images/lookbook/winter_02.jpg" },
            { img: "./images/lookbook/winter_03.jpg" },
            { img: "./images/lookbook/winter_04.jpg" },
            { img: "./images/lookbook/winter_05.jpg" },
            { img: "./images/lookbook/winter_06.jpg" },
            { img: "./images/lookbook/winter_07.jpg" }
        ]
    }

};


// ==============================
// 요소 선택
// ==============================

const seasonBtns = document.querySelectorAll('.season-btn');

const videoElement = document.getElementById('season-video');

const scrollContainer = document.getElementById('scrollContainer');

const swiperWrapper = scrollContainer.querySelector('.swiper-wrapper');


// 현재 Swiper 저장
let lookbookSwiper = null;


// ==============================
// 룩북 업데이트
// ==============================

function updateLookbook(season) {

    const data = lookbookData[season];

    if (!data) return;


    // ==========================
    // 1. 기존 Swiper 제거
    // ==========================

    if (lookbookSwiper) {

        lookbookSwiper.destroy(true, true);

        lookbookSwiper = null;

    }


    // ==========================
    // 2. 영상 변경
    // ==========================

    videoElement.src = data.video;

    videoElement.load();

    videoElement.play().catch(() => { });


    // ==========================
    // 3. 기존 카드 제거
    // ==========================

    swiperWrapper.innerHTML = '';


    // ==========================
    // 4. 카드 생성
    // ==========================

    data.items.forEach(item => {

        const card = document.createElement('div');

        card.className = 'look-card swiper-slide';


        card.innerHTML = `
            <img src="${item.img}" alt="LUMEN Lookbook">
        `;


        swiperWrapper.appendChild(card);

    });


    // ==========================
    // 5. Swiper 실행
    // ==========================

    lookbookSwiper = new Swiper('#scrollContainer', {

        // 한 화면에 보이는 카드 개수
        slidesPerView: 'auto',

        // 카드 사이 간격
        spaceBetween: 20,

        // 무한 반복
        loop: true,

        // 슬라이드 이동 속도
        speed: 900,

        // 자동 재생
        autoplay: {

            // 2초마다 다음 카드
            delay: 2000,

            // 사용자가 건드려도 자동재생 유지
            disableOnInteraction: false,

            // 마우스를 올리면 잠시 멈춤
            pauseOnMouseEnter: true

        },

        // 마우스 커서로 잡을 수 있음
        grabCursor: true

    });

}


// ==============================
// 시즌 버튼 클릭
// ==============================

seasonBtns.forEach(btn => {

    btn.addEventListener('click', () => {


        // 모든 버튼 active 제거
        seasonBtns.forEach(button => {

            button.classList.remove('active');

        });


        // 클릭한 버튼 active
        btn.classList.add('active');


        // 선택한 계절 가져오기
        const selectedSeason = btn.dataset.season;


        // 룩북 변경
        updateLookbook(selectedSeason);

    });

});


// ==============================
// 최초 실행
// ==============================

updateLookbook('spring');



// text_flow
var swiper = new Swiper(".lumen_message", {
    slidesPerView: 6,
    spaceBetween: 0,
    loop: true,
    allowTouchMove: false, // 사용자가 슬라이드를 손이나 마우스로 드래그 못 하게 막는 설정
    //autoplay: {
    //    delay: 0,
    //    disableOnInteraction: false,
    //},
    speed: 5000, // 슬라이드가 넘어가는데 걸리는 시간
});



























