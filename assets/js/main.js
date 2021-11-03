(function ($) {
    $(document).ready(function () {


        $(window).on('load', function () {

            function handlePreloader() {
                if ($('.loader-wrapper').length) {
                    $('.loader-wrapper').delay(800).fadeOut(1000);
                }
            }
            handlePreloader();

        });

        $(window).on('resize', function () {
            var resized = $(window).width();
            if (resized > 1820) {
                $(".nav-wrapper").addClass("left-right-side");
            } else {
                $(".nav-wrapper").removeClass("left-right-side");
            }
            if (resized > 992) {
                $(".nav-list").addClass("clearfix");

            } else {
                $(".nav-list").removeClass("clearfix");
            }
        });

        $(window).on('scroll', function () {

            function headerStyle() {
                var resized = $(window).width();
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.nav');
                var navWrapper = $('.nav-wrapper');
                var scrollLink = $('.scroll-top');
                if (siteHeader.length) {
                    if (windowpos > 150) {
                        siteHeader.addClass('fixed-header fixed-nav');
                        navWrapper.addClass('padding-nav');
                        navWrapper.removeClass('left-right-side');
                        scrollLink.fadeIn(300);
                    } else {
                        siteHeader.removeClass('fixed-header fixed-nav');
                        navWrapper.removeClass('padding-nav');
                        navWrapper.addClass('left-right-side');
                        scrollLink.fadeOut(300);
                    }
                }
                if (resized < 992) {
                    if (windowpos > 0) {
                        $('.header').addClass('mobile-animation fixed-nav');
                    } else {
                        $('.header').removeClass('mobile-animation fixed-nav');
                    }
                } else {
                    $('.header').removeClass('mobile-animation fixed-nav');
                }
            }

            headerStyle();
        });

        $(window).on('scroll', function () {

            function secondHeaderStyle() {
                var windowpos = $(window).scrollTop();
                var header = $('.header-style-2');
                if (header.length) {
                    if (windowpos > 250) {
                        header.addClass('fixed-header-2 fixed-nav');
                    } else {
                        header.removeClass('fixed-header-2 fixed-nav');
                    }
                }
            }
            secondHeaderStyle()
        });

        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1500);

            });
        }

        $(".mobile-button").click(function () {
            $(".nav .nav-wrapper").addClass("active");
        });

        $(".close-nav").click(function () {
            $(".nav .nav-wrapper").removeClass("active");
            $(".list-item.dropdown").find(".sub-menu").removeClass("active");
        });

        $(".list-item.dropdown").each(function () {
            $(this).on("click", function () {
                $(this).find(".sub-menu").addClass("active").parent().siblings().find(".sub-menu").removeClass("active");
            })
        })

        $(".play-btn").each(function () {
            $(this).click(function () {
                $('.nav').addClass("display-none");
                $('.fixed-nav').addClass("display-none");
            })
            $(this).magnificPopup({
                type: 'iframe',
                callbacks: {
                    close: function () {
                        $('.nav').removeClass("display-none");
                        $('.fixed-nav').removeClass("display-none");
                    }
                },
                iframe: {
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',
                            id: function (url) {
                                var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                                if (!m || !m[1]) return null;
                                return m[1];
                            },
                            src: '//www.youtube.com/embed/%id%?autoplay=1'
                        },
                    }
                }
            });
        })

        $(".card").each(function () {
            $(this).mouseenter(function () {
                $(this).addClass("active").parent().siblings().find(".card").removeClass("active")
            })
            $(this).mouseleave(function () {
                $(".card").eq(1).addClass("active").parent().siblings().find(".card").removeClass("active")
            })
        })

        var memberCarousel = function () {
            if ($().owlCarousel) {
                $('.member-wrapper').each(function () {
                    $(this).find('.owl-carousel').owlCarousel({
                        margin: 30,
                        responsiveClass: true,
                        loop: true,
                        responsive: {
                            0: {
                                items: 1,

                            },
                            800: {
                                items: 2,
                            },
                            1200: {
                                items: 3,
                            }
                        }
                    });
                })
            }
        }


        var memberCarouselStyle2 = function () {
            if ($().owlCarousel) {
                $('.member-wrapper-style-2').each(function () {
                    $(this).find('.owl-carousel').owlCarousel({
                        margin: 30,
                        responsiveClass: true,
                        loop: true,
                        dots: true,
                        responsive: {
                            0: {
                                items: 1,
                                dots: false,
                            },
                            800: {
                                items: 2,
                            },
                            1200: {
                                items: 3,
                            }
                        }
                    });
                })
            }
        }


        var testimonialCarousel = function () {
            if ($().owlCarousel) {
                $('.testimonial-slide').each(function () {
                    $(this).find('.owl-carousel').owlCarousel({
                        margin: 20,
                        responsiveClass: true,
                        nav: true,
                        dots: false,
                        loop: false,
                        navRewind: false,
                        navText: ["<i class='fal fa-arrow-left'></i>", "<i class='fal fa-arrow-right'></i>"],
                        responsive: {
                            0: {
                                items: 1,
                            },
                            800: {
                                nav: false,
                                items: 1,
                            },
                            1024: {
                                nav: true,
                                items: 1,
                            },
                            1200: {
                                items: 2,
                            }
                        }
                    });
                })
            }
        }


        var partnerCarousel = function () {
            if ($().owlCarousel) {
                $('.partner-carousel').each(function () {
                    $(this).find('.owl-carousel').owlCarousel({
                        items: 6,
                        margin: 80,
                        navigation: false,
                        pagination: false,
                        autoWidth: true,
                        autoplay: true,
                        loop: true,
                        autoplayTimeout: 5000,
                        responsive: {
                            0: {
                                items: 1,
                                center: true
                            },
                            600: {
                                items: 2,
                                margin: 100,
                            },
                            1000: {
                                items: 5
                            }
                        }
                    });
                });
            }
        };

        var weDoCarousel = function () {
            if ($().owlCarousel) {
                $('.what-we-do-wrapper').each(function () {
                    $(this).find('.owl-carousel').owlCarousel({
                        loop: false,
                        items: 3,
                        margin: 30,
                        nav: true,
                        navText: ["<i class='fal fa-arrow-left'></i>", "<i class='fal fa-arrow-right'></i>"],
                        navRewind: false,
                        responsive: {
                            300: {
                                items: 1,
                                nav: false,
                            },
                            700: {
                                items: 2,
                                nav: false,
                            },
                            1400: {
                                nav: true,
                                items: 3,
                            }
                        }
                    });
                });
            }
        };
        var backgroundCarousel = function () {
            if ($().owlCarousel) {
                $('.background-slider').each(function () {
                    $(this).find('.owl-carousel').owlCarousel({
                        dots: false,
                        items: 1,
                        nav: true,
                        navText: ["<i class='fal fa-arrow-left'></i>", "<i class='fal fa-arrow-right'></i>"],
                        responsive: {
                            0: {
                                items: 1,
                                nav: false,
                            },
                        }
                    });
                });
            }
        };


        $(".gallery").each(function () {
            $(this).magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                },
                callbacks: {
                    close: function () {
                        $('.fixed-nav').removeClass("z-index-1");
                    }
                }
            });
        })
        var elements = $(".reveal-img").toArray();
        $(window).scroll(function () {
            elements.forEach(function (item) {
                if ($(this).scrollTop() >= $(item).offset().top - 700) {
                    $(item).addClass("reveal");
                }
            });
        });
        elements.forEach(function (item) {
            if ($(this).scrollTop() >= $(item).offset().top - 600) {
                $(item).addClass("reveal");
            }
        });

        $('.filter-tab-menu .list').click(function () {
            const value = $(this).attr('data-filter');
            if (value === 'all') {
                $('.item-box').show(400);
            } else {
                $('.item-box').not(`.${value}`).hide(400).removeClass("active")
                $('.item-box').filter(`.${value}`).show(400).addClass("active");
            }
            $(this).addClass('active').siblings().removeClass('active');
        })


        const counters = document.querySelectorAll('.counter-number');
        const speed = 5000;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-count');
                const count = +counter.innerText;

                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });

        memberCarousel();
        memberCarouselStyle2()
        testimonialCarousel()
        partnerCarousel()
        weDoCarousel()
        backgroundCarousel()
    });


})(window.jQuery);

