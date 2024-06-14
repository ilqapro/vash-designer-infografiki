$(function() {
    let displaySize = 'mobile';
    let htmlWidth = $('html').width();

    if( htmlWidth >= 600 && htmlWidth < 991 ) {
        displaySize = 'tablet';
    } else if( htmlWidth >= 991 && htmlWidth < 1200 ) {
        displaySize = 'large';
    } else if( htmlWidth >= 1200 ) {
        displaySize = 'desktop';
    }

    if( displaySize == 'mobile' || displaySize == 'tablet' ) {
        $('body').removeClass('do-css-hover')
    }

    $('.js-desktopSearchTrigger').on('click', function(e) {
        e.preventDefault();
        $('.dektopHeader__headerControl').toggleClass('searchForm-opened')
    })
    $('.js-mobileSearchTrigger').on('click', function(e) {
        e.preventDefault();
        $('.mobileHeader').toggleClass('searchForm-opened')

        if( $('.mobileHeader').hasClass('searchForm-opened') ) {
            $('.mobileHeader__search').slideDown(300)
        } else {
            $('.mobileHeader__search').slideUp(300)
        }
    })

    new Swiper('.siteHero__slider-desktop .swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        speed: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    let siteHeroSubSlider = new Swiper('.siteHero__subSlider .swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        speed: 1000,
    })

    let siteHeroPrimarySlider = new Swiper('.siteHero__slider-mobile .swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        speed: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    siteHeroSubSlider.controller.control = siteHeroPrimarySlider;
    siteHeroPrimarySlider.controller.control = siteHeroSubSlider;
    

    new Swiper('.companySteps__slider .swiper', {
        slidesPerView: 4,
        navigation: {
            nextEl: '.companySteps__sliderControl .swiper-button-next',
            prevEl: '.companySteps__sliderControl .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            991: {
                slidesPerView: 4,
            }
        }
    })

    let companyStaffSliderOptions = {
        slidesPerView: 8,
        loop: true,
        autoplay: {
            delay: 0,
            reverseDirection: false,
            disableOnInteraction: false
        },
        spaceBetween: 20,
        speed: 5000,
        allowTouchMove: false,
        loopFillGroupWithBlank: true,
        breakpoints: {
            0: {
                slidesPerView: 1.6,
                autoplay: false,
                allowTouchMove: true,
                spaceBetween: 16,
            },
            601: {
                slidesPerView: 6,
                spaceBetween: 16,
            },
            991: {
                slidesPerView: 6,
                spaceBetween: 16,
            },
            1201: {
                slidesPerView: 7,
                spaceBetween: 16,
            },
        }
    };

    let companyStaffSliderOptionsReverse = JSON.parse(JSON.stringify(companyStaffSliderOptions));
    companyStaffSliderOptionsReverse.autoplay.reverseDirection = true;

    new Swiper('.companyStaff__sliders-swiper.no-reverse .swiper', companyStaffSliderOptions)

    new Swiper('.companyStaff__sliders-swiper.reverse .swiper', companyStaffSliderOptionsReverse)

    new Swiper('.ourPartners__slider .swiper', {
        slidesPerView: 6,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.6,
            },
            601: {
                slidesPerView: 5,
            },
            991: {
                slidesPerView: 5,
            },
            1200: {

            },
        }
    })

    $('.sliderSection').each(function() {
        let swiper = $(this).find('.swiper')[0];
        let buttonNext = $(this).find('.swiper-button-next')[0];
        let buttonPrev = $(this).find('.swiper-button-prev')[0];

        new Swiper(swiper, {
            slidesPerView: 4,
            navigation: {
                nextEl: buttonNext,
                prevEl: buttonPrev,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.6,
                },
                601: {
                    slidesPerView: 4,
                }
            }
        })
    })

    new Swiper('.companyReviews__slider .swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.companyReviews__sliderControl .swiper-button-next',
            prevEl: '.companyReviews__sliderControl .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.4,
                spaceBetween: 16,
                pagination: false,
            },
            601: {
                slidesPerView: 3,
            }
        }
    })

    new Swiper('.companyVideos__slider .swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.companyVideos__sliderControl .swiper-button-next',
            prevEl: '.companyVideos__sliderControl .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.4,
                spaceBetween: 16,
                pagination: false,
            },
            601: {
                slidesPerView: 3,
            }
        }
    })

    if( displaySize == 'desktop' ) {
        $(window).on('load', function() {
            let heroHeight = $(window).innerHeight() - $('.siteHeader').height();
            $('.siteHero').height(heroHeight)
        })
    }

    $('input[type="tel"]').inputmask({  
        "mask": "+7 (999) 999-99-99",
        "clearMaskOnLostFocus": "false"
    });

    $('.siteFaq__list-header').on('click', function() {
        let $parent = $(this).parent();

        $parent.toggleClass('active')

        if( $parent.hasClass('active') ) {
            $parent.find('.siteFaq__list-answerWrapper').slideDown(300)
        } else {
            $parent.find('.siteFaq__list-answerWrapper').slideUp(300)
        }
    }).first().trigger('click')

    $('.ourProjects__header-link').on('click', function(e) {
        e.preventDefault();
        let section_id = $(this).data('section_id');

        $('.ourProjects__section.active').removeClass('active')
        $('.ourProjects__section.' + section_id).addClass('active')

        $(this).parent().find('.active').removeClass('active')
        $(this).addClass('active')
    }).first().trigger('click')

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
    
})