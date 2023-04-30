
// (function ($) {
//     //preloader js
//     // $(window).on('load', function () {
//     //     $('.preloader').show();
//     //     setTimeout(function() {
//     //         $('.preloader').hide();
//     //       }, 1000);
//     // })




//     // Isotop init
//     // var gridfilter = $('#product-filter-content');
//     // if (gridfilter.length) {
//     //     $('#product-filter-content').imagesLoaded(function () {
//     //         $('#product-filter-nav').on('click', 'button', function () {
//     //             var filterValue = $(this).attr('data-filter');
//     //             $grid.isotope({
//     //                 filter: filterValue
//     //             });
//     //         });
//     //         var $grid = $('#product-filter-content').isotope({
//     //             itemSelector: '.product-filter-item',
//     //             percentPosition: true,
//     //             masonry: {
//     //                 columnWidth: '.product-filter-item',
//     //             }
//     //         });
//     //     });
//     // }

//     // if ($('#product-filter-nav button').length) {
//     //     var projectfiler = $('#product-filter-nav button');
//     //     if (projectfiler.length) {
//     //         $('#product-filter-nav button').on('click', function (event) {
//     //             $(this).siblings('.active').removeClass('active');
//     //             $(this).addClass('active');
//     //             event.preventDefault();
//     //         });
//     //     }
//     // }




//     /*==== Multipage header Section Start here =====*/
//     $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
//     // drop down menu width overflow problem fix
//     $('ul').parent('li').on('hover', function () {
//         var menu = $(this).find("ul");
//         var menupos = $(menu).offset();
//         if (menupos.left + menu.width() > $(window).width()) {
//             var newpos = -$(menu).width();
//             menu.css({
//                 left: newpos
//             });
//         }
//     });
//     $('.menu li a').on('click', function (e) {
//         var element = $(this).parent('li');
//         if (parseInt($(window).width()) < 992) {
//             if (element.hasClass('open')) {
//                 element.removeClass('open');
//                 element.find('li').removeClass('open');
//                 element.find('ul').slideUp(300, "swing");
//             } else {
//                 element.addClass('open');
//                 element.children('ul').slideDown(300, "swing");
//                 element.siblings('li').children('ul').slideUp(300, "swing");
//                 element.siblings('li').removeClass('open');
//                 element.siblings('li').find('li').removeClass('open');
//                 element.siblings('li').find('ul').slideUp(300, "swing");
//             }
//         }


//     });

//     $('.header-bar').on('click', function () {
//         $(this).toggleClass('active');
//         $('.menu').toggleClass('active');
//     })

//     //Header
//     var fixed_top = $("header");
//     $(window).on('scroll', function () {
//         if ($(this).scrollTop() > 300) {
//             fixed_top.addClass("header-fixed fadeInUp");
//         } else {
//             fixed_top.removeClass("header-fixed fadeInUp");
//         }
//     });

//     /*==== Multipage header Section End here =====*/


//     //Animation on Scroll initializing
jQuery(document).ready(function($) {
    AOS.init({
      // Local settings
    });
  
    // Your code here
  });

//     // lightcase initializing
//     $(document).ready(function() {
//         $('a[data-rel^=lightcase]').lightcase();
//       });

//     //counter initialized
//     // new PureCounter();

//     //nice select 
//     $('select').niceSelect();

//     //text rotatoe
//     $(".text-rotator").textrotator({
//         animation: "flipCubeUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
//         separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
//         speed: 3000 // How many milliseconds until the next word show.
//     });


    //Components Preview slider

    // var swiper = new Swiper(".preview__slider", {
    //     spaceBetween: 24,
    //     grabCursor: true,
    //     loop: true,
    //     freeMode: true,
    //     speed: 5000,
    //     slidesPerView: 1,
    //     breakpoints: {
    //         576: {
    //             slidesPerView: 2,
    //         },
    //         768: {
    //             slidesPerView: 3,
    //         },
    //         1200: {
    //             slidesPerView: 4,
    //         },
    //     },
    //     autoplay: {
    //         delay: -0,
    //         disableOnInteraction: false
    //     },
    // });

    // var swiper = new Swiper(".preview__slider2", {
    //     spaceBetween: 24,
    //     grabCursor: true,
    //     loop: true,
    //     freeMode: true,
    //     speed: 5000,
    //     slidesPerView: 1,
    //     breakpoints: {
    //         576: {
    //             slidesPerView: 2,
    //         },
    //         768: {
    //             slidesPerView: 3,
    //         },
    //         1200: {
    //             slidesPerView: 4,
    //         },
    //     },
    //     autoplay: {
    //         delay: -0,
    //         disableOnInteraction: false
    //     },

    // });





//     // //template slider

    // var swiper = new Swiper(".template__slider", {
    //     spaceBetween: 24,
    //     grabCursor: true,
    //     loop: true,
    //     slidesPerView: 1,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2,
    //         },
    //         1024: {
    //             slidesPerView: 3,
    //         },
    //     },
    //     autoplay: {
    //         delay: 1,
    //     },
    //     speed: 4000,
    // });


    // collection slider 2
    // var swiper = new Swiper(".team__slider", {
    //     spaceBetween: 24,
    //     grabCursor: true,
    //     loop: true,
    //     slidesPerView: 1,
    //     breakpoints: {
    //         576: {
    //             slidesPerView: 2,
    //         },
    //         992: {
    //             slidesPerView: 3,
    //         },
    //         1200: {
    //             slidesPerView: 4,
    //         },
    //     },
    //     autoplay: {
    //         delay: 5,
    //     },
    //     speed: 3000,
    // });
    // $(document).ready(function() {
    //     var swiper= new Swiper(".myPrice", {
    //         spaceBetween: 30,
    //         slidesPerView: 3,
    
    //         breakpoints: {
    //             320: {
    //                 slidesPerView: 1,
    //             },
    //             576: {
    //                 slidesPerView: 1,
    //             },
    //             767: {
    //                 slidesPerView: 2,
    //             },
    //             992: {
    //                 slidesPerView: 2,
    //             },
    //             1140: {
    //                 slidesPerView: 3,
    //             },
    //             1200: {
    //                 slidesPerView: 3,
    //             },
    //         },
    //         navigation: {
    //             nextEl: ".swiper-button-next",
    //             prevEl: ".swiper-button-prev",
    //         },
    //     });
  

    //   });


    // pricing
 
    // var swiper = new Swiper(".myPrice", {
    //     spaceBetween: 30,
    //     centeredSlides: true,
    //     slidesPerView: 3,
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
    //     breakpoints: {
    //         576: {
    //             slidesPerView: 2,
    //         },
    //         992: {
    //             slidesPerView: 3,
    //         },
    //         1140: {
    //             slidesPerView: 3,
    //         },
    //         1200: {
    //             slidesPerView: 4,
    //         },
    //     },
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    // });



//     //Countdown js initialization
//     document.addEventListener('readystatechange', event => {
//         if (event.target.readyState === "complete") {
//             var clockdiv = document.getElementsByClassName("countdown");
//             var countDownDate = new Array();
//             for (var i = 0; i < clockdiv.length; i++) {
//                 countDownDate[i] = new Array();
//                 countDownDate[i]['el'] = clockdiv[i];
//                 countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
//                 countDownDate[i]['days'] = 0;
//                 countDownDate[i]['hours'] = 0;
//                 countDownDate[i]['seconds'] = 0;
//                 countDownDate[i]['minutes'] = 0;
//             }

//             // var countdownfunction = setInterval(function () {
//             //     for (var i = 0; i < countDownDate.length; i++) {
//             //         var now = new Date().getTime();
//             //         var distance = countDownDate[i]['time'] - now;
//             //         countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
//             //         countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             //         countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//             //         countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);

//             //         if (distance < 0) {
//             //             countDownDate[i]['el'].querySelector('.countdown__number-days').innerHTML = 0;
//             //             countDownDate[i]['el'].querySelector('.countdown__number-hours').innerHTML = 0;
//             //             countDownDate[i]['el'].querySelector('.countdown__number-minutes').innerHTML = 0;
//             //             countDownDate[i]['el'].querySelector('.countdown__number-seconds').innerHTML = 0;
//             //         } else {
//             //             countDownDate[i]['el'].querySelector('.countdown__number-days').innerHTML = countDownDate[i]['days'];
//             //             countDownDate[i]['el'].querySelector('.countdown__number-hours').innerHTML = countDownDate[i]['hours'];
//             //             countDownDate[i]['el'].querySelector('.countdown__number-minutes').innerHTML = countDownDate[i]['minutes'];
//             //             countDownDate[i]['el'].querySelector('.countdown__number-seconds').innerHTML = countDownDate[i]['seconds'];
//             //         }
//             //     }
//             // }, 1000);
//         }
//     });


//     //Pricing table switch
//     //   Change the active class on the switcher
//     var price = $('.pricing__item-price');
//     var year = $("#pricing-yearly");
//     var month = $("#pricing-monthly");


//     year.on('click', function () {
//         $(this).addClass('active');
//         $('.pricing__item-billedYearly').addClass('show');
//         month.removeClass('active');
//         price.each(function () {
//             $(this).text($(this).data('year-price'));
//         });

//     });

//     month.on('click', function () {
//         $('.pricing__item-billedYearly').removeClass('show');
//         $(this).addClass('active');
//         year.removeClass('active');
//         price.each(function () {
//             $(this).text($(this).data('month-price'));
//         });
//     });


//     //============ Scroll to top js =========
//     //Check to see if the window is top if not then display button
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 300) {
//             $('.scrollToTop').css({
//                 'bottom': '7%',
//                 'opacity': '1',
//                 'transition': 'all .5s ease'
//             });
//         } else {
//             $('.scrollToTop').css({
//                 'bottom': '-30%',
//                 'opacity': '0',
//                 'transition': 'all .5s ease'
//             })
//         }
//     });
//     //Click event to scroll to top
//     $('.scrollToTop').click(function () {
//         $('html, body').animate({
//             scrollTop: 0
//         }, 500);
//         return false;
//     });





//     // form validation
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')

//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//         form.addEventListener('submit', event => {
//             if (!form.checkValidity()) {
//                 event.preventDefault()
//                 event.stopPropagation()
//             }

//             form.classList.add('was-validated')
//         }, false)
//     })


























// })(jQuery);