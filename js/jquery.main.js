const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors){
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector(''+ blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })

    })
}
$( document ).ready(function() {
    $(function() {
        $('.tabs__btn').click(function(){
            const tab_id = $(this).attr('href');

            $('.tabs__btn').removeClass('active');
            $('.tabs__content').removeClass('active');

            $(this).addClass('active');
            $(tab_id).addClass('active');
        })
    });
});
$( document ).ready(function() {
    $(function() {
        $('.nav__btn').click(function(){
            $('.nav').toggleClass('active');
        })
    });
});
let selectedSlide = 0

startChanging();

function showSlide(n) {
    let slides = document.getElementsByClassName("slider__item");

    if (n > slides.length - 1) {
        n = 0;
    }

    selectedSlide = n

    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = i === selectedSlide ? "grid" : "none";
    }

    let dots = document.getElementsByClassName("slider-dots__item");

    for (let i = 0; i < slides.length; i++){
        if (i === selectedSlide) {
            dots[i].className = "slider-dots__item slider-dots__item_active"
        } else {
            dots[i].className = "slider-dots__item"
        }
    }
}

function startChanging() {
    let time = 3000 // 3s

    showSlide(selectedSlide)

    setInterval(nextSlide, time)
}

function nextSlide() {
    selectedSlide++;
    showSlide(selectedSlide)
}

let selectedSlideAbout = 0

// startChangingAbout();
showSlideAbout(0);

function showSlideAbout(n) {
    let slides = document.getElementsByClassName("achievements_items");

    if (n > slides.length - 1) {
        n = 0;
    }

    selectedSlideAbout = n

    let blocksCount = 0;
    if (document.body.clientWidth < 767){
        blocksCount = slides.length
    }
    else {
        blocksCount = Math.floor(slides.length/4);
    }

    for (let i = 0; i < blocksCount; i++){
        if(document.body.clientWidth < 767){
            slides[i].style.display = i === selectedSlideAbout ? "flex" : "none";
        }
        else {
            slides[i * 4].style.display = i === selectedSlideAbout ? "flex" : "none";
            slides[i * 4 + 1].style.display = i === selectedSlideAbout ? "flex" : "none";
            slides[i * 4 + 2].style.display = i === selectedSlideAbout ? "flex" : "none";
            slides[i * 4 + 3].style.display = i === selectedSlideAbout ? "flex" : "none";
        }
    }

    let dots = document.getElementsByClassName("slider-dots__item");

    for (let i = 0; i < blocksCount; i++){
        if (i === selectedSlideAbout) {
            dots[i].className = "slider-dots__item slider-dots__item_active"
        } else {
            dots[i].className = "slider-dots__item"
        }
    }
}