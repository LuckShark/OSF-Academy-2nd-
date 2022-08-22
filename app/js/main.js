$(function () {

    // // ----- Drop-down Menu -----
    // let dropMain = document.getElementsByClassName('navigation__item');
    // let dropChosen = document.getElementsByClassName('chosen-value__item_main');

    // for (let i = 0; i < dropMain.length; i++) {
    //     dropMain[i].addEventListener('mouseenter', showSub, false);
    //     dropMain[i].addEventListener('mouseleave', hideSub, false);
    // }

    // for (let i = 0; i < dropChosen.length; i++) {
    //     dropChosen[i].addEventListener('mouseenter', showSub, false);
    //     dropChosen[i].addEventListener('mouseleave', hideSub, false);
    // }

    // function showSub() {
    //     if (this.children.length > 1) {
    //         // this.children[1].style.height = 'auto';
    //         // this.children[1].style.opacity = '1';
    //         // this.children[1].style.overflow = 'visible';
    //         this.children[1].style.display = 'flex';
    //     } else {
    //         return false;
    //     }
    // }

    // function hideSub() {
    //     if (this.children.length > 1) {
    //         // this.children[1].style.height = '0';
    //         // this.children[1].style.opacity = '0';
    //         // this.children[1].style.overflow = 'hidden';
    //         this.children[1].style.display = 'none';
    //     } else {
    //         return false;
    //     }
    // }
    // // ----- // Drop-down Menu -----

    // ----- Slick Slider -----
    $('.slider-slick__slider').slick({
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        appendArrows: $('.slider-slick__arrows'),
        autoplaySpeed: 5000,
        pauseOnDotsHover: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.products__slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnDotsHover: true,
    });
    // ----- // Slick Slider -----

    // ----- Current Year -----
    new Date().getFullYear();
    document.getElementById("year").innerHTML = new Date().getFullYear();
    // ----- // Current Year -----





});