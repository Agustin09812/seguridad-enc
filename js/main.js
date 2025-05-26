document.addEventListener('DOMContentLoaded', () => {
    "use strict"

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow')
        } else {
            $('.back-to-top').fadeOut('slow')
        }
    })

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500, 'easeInOutExpo')
        return false
    })

    // Smooth scroll for the navigation and links with .scrollto classes
    $(document).ready(function () {

        $('a.nav-link, a.scrollto').on('click', function (e) {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
                location.hostname === this.hostname) {

                const target = $(this.hash)
                if (target.length) {
                    e.preventDefault()

                    let top_space = 0
                    const header = $('#header, .navbar.fixed-top')

                    // Ajuste si el header no está scrolleado
                    if (header.length) {
                        top_space = header.outerHeight()

                        if (!header.hasClass('header-scrolled')) {
                            top_space -= -50
                        }
                    }

                    // Scroll suave
                    $('html, body').animate({
                        scrollTop: target.offset().top - top_space
                    }, 500, 'swing')

                    // Colapsar menú si está abierto (mobile)
                    if ($('.navbar-collapse').hasClass('show')) {
                        $('.navbar-collapse').collapse('hide')
                    }

                    // Setear clase activa
                    $('.navbar-nav .nav-link').removeClass('active')
                    $(this).addClass('active')
                }
            }
        })
    })

    // Navigation active state on scroll
    var nav_sections = $('section')
    var main_nav = $('.main-nav, .mobile-nav')
    var main_nav_height = $('#header').outerHeight()

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop()

        nav_sections.each(function () {
            var top = $(this).offset().top - main_nav_height,
                bottom = top + $(this).outerHeight()

            if (cur_pos >= top && cur_pos <= bottom) {
                main_nav.find('li').removeClass('active')
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active')
            }
        })
    })

    new Swiper('.patent-slider', {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 60
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 80
            },
            992: {
                slidesPerView: 6,
                spaceBetween: 120
            }
        }
    })

    function adjustButtonWidth() {
        var button = document.getElementById("rtobutton")

        if (window.innerWidth <= 425) {
            button.classList.remove("w-50")
            button.classList.add("w-100")
        } else {
            button.classList.remove("w-100")
            button.classList.add("w-50")
        }
    }

    adjustButtonWidth()

    window.addEventListener("resize", adjustButtonWidth)

})

function toggleCollapse() {
    const myCollapse = new bootstrap.Collapse(document.getElementById('myCollapse'), { toggle: true })
}

