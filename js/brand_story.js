

$(function () {

    const opening = document.getElementById('opening');
    const video = document.getElementById('opening_video');

    if (!opening || !video) return;

    let openingEnded = false;
    let isMoving = false;

    // 오프닝이 시작될 때 페이지를 최상단으로 고정
    window.scrollTo(0, 0);


    // ==========================================
    // AOS 시작
    // ==========================================

    function startAOS() {

        console.log('AOS START');

        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 120
        });

        AOS.refresh();
    }


    // ==========================================
    // 오프닝 닫기
    // ==========================================

    function closeOpening() {

        if (openingEnded) return;

        openingEnded = true;

        console.log('OPENING CLOSE');


        // ==========================================
        // 영상 오프닝 fade
        // ==========================================

        $(opening).fadeOut(1000, function () {

            opening.remove();

            console.log('OPENING REMOVED');


            // ==========================================
            // 오프닝이 완전히 사라진 후
            // AOS 실행
            // ==========================================

            setTimeout(function () {

                startAOS();

            }, 500);

        });
    }


    // ==========================================
    // 영상 위에서 스크롤
    // ==========================================

    opening.addEventListener('wheel', function (e) {

        // 브라우저 기본 스크롤 막기
        e.preventDefault();

        // 이벤트가 메인 화면으로 전달되는 것 막기
        e.stopPropagation();


        // 중복 실행 방지
        if (isMoving || openingEnded) return;

        isMoving = true;

        console.log('OPENING SCROLL');


        // 스크롤하면 바로 오프닝 종료
        closeOpening();

    }, {
        passive: false
    });


    // ==========================================
    // 영상이 끝났을 때
    // ==========================================

    video.addEventListener('ended', function () {

        console.log('VIDEO ENDED');

        closeOpening();

    });


    // ==========================================
    // 영상 오류
    // ==========================================

    video.addEventListener('error', function () {

        console.log('VIDEO ERROR');

        closeOpening();

    });


    // ==========================================
    // 영상 재생
    // ==========================================

    video.play().then(function () {

        console.log('VIDEO PLAYING');

    }).catch(function (error) {

        console.log('VIDEO PLAY ERROR:', error);

        closeOpening();

    });

});



// 컨텐츠 2
document.addEventListener("DOMContentLoaded", function () {

    const storyIntro = document.querySelector(".story_intro");

    if (!storyIntro) return;

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    storyIntro.classList.add("is-active");

                    observer.unobserve(storyIntro);
                }

            });

        },
        {
            threshold: 0.25
        }
    );

    observer.observe(storyIntro);

});


// 컨텐츠 3
document.addEventListener("DOMContentLoaded", function () {

    const lookbook = document.querySelector(".lumen-lookbook");

    if (!lookbook) return;


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    lookbook.classList.add("is-active");

                    observer.unobserve(lookbook);
                }

            });

        },
        {
            threshold: 0.3
        }
    );


    observer.observe(lookbook);

});

