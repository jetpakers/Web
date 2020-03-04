<template>
  <div>
    <!--Start Preloader-->
    <div class="preloader">
      <div class="d-table">
        <div class="d-table-cell align-middle">
          <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
          </div>
        </div>
      </div>
    </div>
    <!--End Preloader-->

    <!-- header-section start -->
    <header class="header-section">
      <div class="header-top d-none d-lg-block">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 pl-lg-0">
              <div class="header-socials">
                <ul class="social-links">
                  <li>
                    <a href="#0"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#0"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#0"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#0"><i class="fab fa-linkedin"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-9 d-flex flex-wrap justify-content-end pr-lg-0">
              <div class="money-select-list d-flex flex-wrap">
                <div class="money-thumb">
                  <img src="assets/images/dolor.png" alt="image" />
                </div>
                <div class="money-select">
                  <select class="select-bar">
                    <option data-display=""></option>
                    <option value="1">Rupi</option>
                    <option value="2">Taka</option>
                  </select>
                </div>
              </div>
              <div class="language-select-list d-flex flex-wrap">
                <div class="language-thumb">
                  <img src="assets/images/flag.png" alt="image" />
                </div>
                <div class="language-select">
                  <select class="select-bar">
                    <option data-display=""></option>
                    <option value="1">Bangla</option>
                    <option value="2">Hindi</option>
                  </select>
                </div>
              </div>
              <div class="header-top-btn">
                <a href="#" class=" custom-btn--style">Sign in</a>
                <a href="#" class="custom-btn">Create an account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="container">
          <div
            class="row header-border align-items-center justify-content-between"
          >
            <a class="site-logo site-title" href="index.html"
              ><img src="assets/images/logo.png" alt="site-logo"
            /></a>
            <button
              class="navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="fas fa-bars"></span>
            </button>
            <div class="header-bar d-lg-none">
              <i class="fas fa-ellipsis-v"></i>
            </div>
            <div class="header-btn-group d-lg-none">
              <div class="header-top-btn">
                <a href="#" class="custom-btn--style">Sign in</a>
                <a href="#" class="custom-btn">Create an account</a>
              </div>
            </div>
            <nav class="navbar navbar-expand-lg p-0">
              <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav main-menu ml-auto">
                  <li class="menu_has_children">
                    <a href="#0">Home<i class="fas fa-caret-down"></i></a>
                    <ul class="sub-menu">
                      <li><a href="index.html">Home One</a></li>
                      <li><a href="index-2.html">Home Two</a></li>
                    </ul>
                  </li>
                  <li><a href="about.html">About</a></li>
                  <li class="menu_has_children">
                    <a href="#0">Flight<i class="fas fa-caret-down"></i></a>
                    <ul class="sub-menu">
                      <li><a href="flight.html">Flight</a></li>
                      <li>
                        <a href="flight-facilities.html">Flight Facilities</a>
                      </li>
                      <li><a href="search-1.html">Search Flight One</a></li>
                      <li><a href="search-2.html">Search Flight Two</a></li>
                      <li><a href="search-3.html">Search Flight Three</a></li>
                    </ul>
                  </li>
                  <li class="menu_has_children">
                    <a href="#0">Page<i class="fas fa-caret-down"></i></a>
                    <ul class="sub-menu">
                      <li><a href="privacy.html">Privacy Page</a></li>
                      <li><a href="gallery.html">Gallery Page</a></li>
                      <li><a href="booking.html">booking Page</a></li>
                      <li><a href="faq.html">Faq Page</a></li>
                      <li><a href="404.html">404 Page</a></li>
                    </ul>
                  </li>
                  <li class="menu_has_children">
                    <a href="#0">Hotel<i class="fas fa-caret-down"></i></a>
                    <ul class="sub-menu">
                      <li><a href="hotel.html">Hotel</a></li>
                      <li><a href="hotel-details.html">Hotel Details</a></li>
                    </ul>
                  </li>
                  <li class="menu_has_children">
                    <a href="#0">Blog<i class="fas fa-caret-down"></i></a>
                    <ul class="sub-menu">
                      <li><a href="blog-1.html">Blog Post One</a></li>
                      <li><a href="blog-2.html">Blog Post Two</a></li>
                      <li><a href="blog-3.html">Blog Post Three</a></li>
                      <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
                <div class="search-bar">
                  <a href="#0"
                    ><i class="flaticon-search-interface-symbol"></i
                  ></a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- header-section end -->

    <!-- register-section start -->
    <div class="header-register-form">
      <div class="header-register-form-area">
        <div class="account-section">
          <div class="container">
            <div class="account-wrapper">
              <div class="login-area account-area change-form">
                <div class="row m-0">
                  <div class="col-lg-6 p-0">
                    <div class="common-form-style bg-one create-account">
                      <div class="close d-lg-none">
                        <i class="fas fa-times"></i>
                      </div>
                      <h4 class="title">create new account</h4>
                      <p>Maecenas mollis dictum aliquam Velit sapien</p>
                      <form class="create-account-form">
                        <div class="form-group">
                          <input type="text" placeholder="User Name" />
                        </div>
                        <div class="form-group">
                          <input type="text" placeholder="Email" />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="password"
                            placeholder="Password"
                          />
                          <a href="#0" class="show-pass show-pass-one"
                            ><i class="fas fa-eye"></i
                          ></a>
                        </div>
                        <div class="form-group">
                          <div
                            class="checkbox-wrapper d-flex flex-wrap align-items-center "
                          >
                            <div class="checkbox-item">
                              <input id="c1" type="radio" name="ticket-type" />
                              <label for="c1"
                                >I Wish To Receieve All News & Update?</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="form-group text-center">
                          <input type="submit" value="Create arion Account" />
                        </div>
                      </form>
                      <ul class="sign-up-option justify-content-center">
                        <li>
                          <a href="#0" class="google"
                            ><i class="fab fa-google"></i> google</a
                          >
                        </li>
                        <li>
                          <a href="#0" class="facebook"
                            ><i class="fab fa-facebook-f"></i> Facebook</a
                          >
                        </li>
                        <li>
                          <a href="#0" class="twitter"
                            ><i class="fab fa-twitter"></i>Twitter</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 p-0">
                    <div class="change-catagory-area bg_img">
                      <div class="close"><i class="fas fa-times"></i></div>
                      <div class="register-thumb">
                        <img src="assets/images/register.png" alt="image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- register-section end -->

    <!-- login-section start -->
    <div class="header-login-form">
      <div class="header-register-form-area">
        <div class="account-section">
          <div class="container">
            <div class="account-wrapper">
              <div class="login-area account-area change-form">
                <div class="row m-0">
                  <div class="col-lg-6 p-0">
                    <div class="common-form-style bg-one create-account">
                      <div class="stop d-lg-none">
                        <i class="fas fa-times"></i>
                      </div>
                      <h4 class="title">login your account</h4>
                      <p>Maecenas mollis dictum aliquam Velit sapien</p>
                      <form class="create-account-form">
                        <div class="form-group">
                          <input type="text" placeholder="User Name" />
                        </div>
                        <div class="form-group">
                          <input
                            class="password"
                            type="password"
                            placeholder="Password"
                          />
                          <a href="#0" class="show-pass show-pass-one"
                            ><i class="fas fa-eye"></i
                          ></a>
                        </div>
                        <ul class="lost-pass">
                          <li>
                            <a href="#0">Forget Password?</a>
                          </li>
                          <li>
                            <div class="form-group form-group--style">
                              <input type="submit" value="Login" />
                            </div>
                          </li>
                        </ul>
                      </form>
                      <ul class="sign-up-option justify-content-center">
                        <li>
                          <a href="#0" class="google"
                            ><i class="fab fa-google"></i> google</a
                          >
                        </li>
                        <li>
                          <a href="#0" class="facebook"
                            ><i class="fab fa-facebook-f"></i> Facebook</a
                          >
                        </li>
                        <li>
                          <a href="#0" class="twitter"
                            ><i class="fab fa-twitter"></i>Twitter</a
                          >
                        </li>
                      </ul>
                      <div class="terms-area text-center mt-30">
                        <p class="terms-and-conditions">
                          <a href="#0">Tream & Condition & Privacy?</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 p-0">
                    <div class="change-catagory-area bg_img">
                      <div class="stop"><i class="fas fa-times"></i></div>
                      <div class="register-thumb">
                        <img src="assets/images/register.png" alt="image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- login-section end -->

    <form class="header-form">
      <div class="skip"><i class="fas fa-times"></i></div>
      <div class="header-form-area">
        <input type="text" placeholder="Search Here" />
        <button type="submit">
          <i class="flaticon-search-interface-symbol"></i>
        </button>
      </div>
    </form>
    <nuxt />

    <!-- footer-section start -->
    <footer class="footer-section pt-120 pb-120">
      <div class="container">
        <div class="row mb-30-none">
          <div class="col-lg-3 col-sm-6 mb-30">
            <div class="footer-widget widget-menu">
              <h3 class="widget-title">quick links</h3>
              <ul>
                <li>
                  <a href="#"
                    ><i class="fas fa-angle-double-right"></i>Popular
                    Airlines</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fas fa-angle-double-right"></i>popular flight
                    routes</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fas fa-angle-double-right"></i>Destination</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fas fa-angle-double-right"></i>Booking</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fas fa-angle-double-right"></i>Popular Hotel</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-30">
            <div class="footer-widget widget-menu">
              <h3 class="widget-title">company</h3>
              <ul>
                <li>
                  <a href="#"><i class="fas fa-angle-double-right"></i>About</a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fas fa-angle-double-right"></i>Booking</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fas fa-angle-double-right"></i>Air Line Fee</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fas fa-angle-double-right"></i>Careers</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fas fa-angle-double-right"></i>Partners</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-30">
            <div class="footer-widget widget-menu">
              <h3 class="widget-title">legal</h3>
              <ul>
                <li>
                  <a href="#"
                    ><i class="fas fa-angle-double-right"></i>privacy &
                    Police</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fas fa-angle-double-right"></i>Terms &
                    Conditions</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fas fa-angle-double-right"></i>Post Ticketing
                    Fees</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fas fa-angle-double-right"></i>Price match
                    Proise</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fas fa-angle-double-right"></i>Service
                    Condition</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mb-30">
            <div class="footer-widget widget-menu">
              <h3 class="widget-title">about us</h3>
              <p>
                Sociosqu, lectus velit risus ipsum proin, felis pellentesque
                nullam ipsum tincidunt ad. Pellentesque
              </p>
              <ul class="footer-social">
                <li>
                  <a href="#0"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#0" class="active"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#0"><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="#0"><i class="fab fa-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div
      class="privacy-area wow fadeIn"
      data-wow-duration="0.5"
      data-wow-delay="0.5s"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <p>Copyright © 2019 . All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
    <!-- footer-section end -->
  </div>
</template>

<script>
function main() {
  ;(function($) {
    'user strict'

    $(document).ready(function() {
      // preloader
      $('.preloader')
        .delay(500)
        .animate(
          {
            opacity: '0'
          },
          500,
          function() {
            $('.preloader').css('display', 'none')
          }
        )
      // nice-select
      $('select').niceSelect()
      background()
    })

    // Create Background Image
    function background() {
      const img = $('.bg_img')
      img.css('background-image', function() {
        const bg = 'url(' + $(this).data('background') + ')'
        return bg
      })
    }

    $('.my-paroller').paroller()

    const fixedTop = $('.header-section')
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 50) {
        fixedTop.addClass('animated fadeInDown header-fixed')
      } else {
        fixedTop.removeClass('animated fadeInDown header-fixed')
      }
    })

    // navbar-click
    $('.navbar li a').on('click', function() {
      const element = $(this).parent('li')
      if (element.hasClass('show')) {
        element.removeClass('show')
        element.find('li').removeClass('show')
      } else {
        element.addClass('show')
        element.siblings('li').removeClass('show')
        element
          .siblings('li')
          .find('li')
          .removeClass('show')
      }
    })

    $('.popup-youtube').magnificPopup({
      type: 'video'
    })
    $('.image-popup').magnificPopup({
      type: 'image'
    })

    // scroll-to-top
    const ScrollTop = $('.scrollToTop')
    $(window).on('scroll', function() {
      if ($(this).scrollTop() < 500) {
        ScrollTop.removeClass('active')
      } else {
        ScrollTop.addClass('active')
      }
    })

    // Search
    $(document).on('click', '.search-bar, .skip', function() {
      $('.header-form').toggleClass('active')
    })
    $(document).on('click', '.ellipsis-bar', function() {
      $('.header-top-area').toggleClass('active')
      $('.overlay').addClass('active')
    })

    // Register
    $(document).on('click', '.custom-btn, .close', function() {
      $('.header-register-form').toggleClass('active')
    })
    $(document).on('click', '.ellipsis-bar', function() {
      $('.header-top-area').toggleClass('active')
      $('.overlay').addClass('active')
    })

    // Login
    $(document).on('click', '.custom-btn--style, .stop', function() {
      $('.header-login-form').toggleClass('active')
    })
    $(document).on('click', '.ellipsis-bar', function() {
      $('.header-top-area').toggleClass('active')
      $('.overlay').addClass('active')
    })

    // menu bar
    $('.header-bar').on('click', function() {
      $(this).toggleClass('active')
      $('.header-btn-group').toggleClass('active wow')
    })

    $('.datepicker-here').datepicker()

    // Overlay On Click Functions
    $(document).on('click', '.overlay', function() {
      $(this).removeClass('active')
      $('.header-bar').removeClass('active')
      $('.menu').removeClass('active')
      $('.header-top-area').removeClass('active')
    })

    $('.faq-wrapper .faq-title').on('click', function(e) {
      const element = $(this).parent('.faq-item')
      if (element.hasClass('open')) {
        element.removeClass('open')
        element.find('.faq-content').removeClass('open')
        element.find('.faq-content').slideUp(300, 'swing')
      } else {
        element.addClass('open')
        element.children('.faq-content').slideDown(300, 'swing')
        element
          .siblings('.faq-item')
          .children('.faq-content')
          .slideUp(300, 'swing')
        element.siblings('.faq-item').removeClass('open')
        element
          .siblings('.faq-item')
          .find('.faq-title')
          .removeClass('open')
        element
          .siblings('.taq-item')
          .find('.faq-content')
          .slideUp(300, 'swing')
      }
    })

    $('.faq-wrapper--style .faq-title').on('click', function(e) {
      const element = $(this).parent('.faq-item--style')
      if (element.hasClass('open')) {
        element.removeClass('open')
        element.find('.faq-content--style').removeClass('open')
        element.find('.faq-content--style').slideUp(300, 'swing')
      } else {
        element.addClass('open')
        element.children('.faq-content--style').slideDown(300, 'swing')
        element
          .siblings('.faq-item--style')
          .children('.faq-content--style')
          .slideUp(300, 'swing')
        element.siblings('.faq-item--style').removeClass('open')
        element
          .siblings('.faq-item--style')
          .find('.faq-title')
          .removeClass('open')
        element
          .siblings('.taq-item--style')
          .find('.faq-content--style')
          .slideUp(300, 'swing')
      }
    })

    $('.counter-number').counterUp({
      delay: 10,
      time: 4000,
      offset: 70,
      beginAt: 10,
      formatter(n) {
        return n.replace(/,/g, '.')
      }
    })

    // init Isotope
    const $grid = $('.grid').isotope({
      // options
      itemSelector: '.grid-item',
      // percentPosition: true,
      masonry: {
        columnWidth: '.grid-item'
      }
    })
    $('.grid').isotope({})
    // filter items on button click
    $('.filter-btn-group').on('click', 'button', function() {
      const filterValue = $(this).attr('data-filter')
      $grid.isotope({ filter: filterValue })
    })
    $('.filter-btn-group').on('click', 'button', function() {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
    })

    // slider
    // eslint-disable-next-line no-unused-vars,no-new,no-undef
    new Swiper('.client-slider', {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        speeds: 1000,
        delay: 2000
      },
      breakpoints: {
        991: {
          slidesPerView: 2
        },
        767: {
          slidesPerView: 1
        },
        575: {
          slidesPerView: 1
        }
      }
    })
    // slider
    // eslint-disable-next-line no-undef,no-new
    new Swiper('.client-slider--style', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        speeds: 1000,
        delay: 2000
      },
      breakpoints: {
        991: {
          slidesPerView: 1
        },
        767: {
          slidesPerView: 1
        },
        575: {
          slidesPerView: 1
        }
      }
    })

    // eslint-disable-next-line no-undef,no-new
    new Swiper('.brand-wrapper', {
      slidesPerView: 6,
      loop: true,
      autoplay: {
        speeds: 1000,
        delay: 2000
      },
      breakpoints: {
        991: {
          slidesPerView: 2
        },
        767: {
          slidesPerView: 2
        },
        575: {
          slidesPerView: 1
        }
      }
    })

    $(window).on('load', function() {
      // filter functions
      const $grid = $('.grid')
      const filterFns = {}
      $grid.isotope({
        itemSelector: '.grid-item',
        masonry: {
          columnWidth: 0
        }
      })
      // bind filter button click
      $('.filter-btn-group').on('click', 'button', function() {
        let filterValue = $(this).attr('data-filter')
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue
        $grid.isotope({
          filter: filterValue
        })
      })
      // change is-checked class on buttons
      $('.filter-btn-group').each(function(i, buttonGroup) {
        const $buttonGroup = $(buttonGroup)
        $buttonGroup.on('click', 'button', function() {
          $buttonGroup.find('.active').removeClass('active')
          $(this).addClass('active')
        })
      })
    })

    $(window).on('load', function() {
      // filter functions
      const $grid = $('.offer-grid')
      const filterFns = {}
      $grid.isotope({
        itemSelector: '.offer-item',
        masonry: {
          columnWidth: 0
        }
      })
      // bind filter button click
      $('.filter-btn-group').on('click', 'button', function() {
        let filterValue = $(this).attr('data-filter')
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue
        $grid.isotope({
          filter: filterValue
        })
      })
      // change is-checked class on buttons
      $('.filter-btn-group').each(function(i, buttonGroup) {
        const $buttonGroup = $(buttonGroup)
        $buttonGroup.on('click', 'button', function() {
          $buttonGroup.find('.active').removeClass('active')
          $(this).addClass('active')
        })
      })
    })

    // privacy left side menu
    $('.privacy-sidebar li a').on('click', function(e) {
      const element = $(this).parent('li')
      if (element.hasClass('open')) {
        element.removeClass('open')
        element.find('li').removeClass('open')
        element.find('ul').slideUp(300, 'swing')
      } else {
        element.addClass('open')
        element.children('ul').slideDown(300, 'swing')
        element
          .siblings('li')
          .children('ul')
          .slideUp(300, 'swing')
        element.siblings('li').removeClass('open')
        element
          .siblings('li')
          .find('li')
          .removeClass('open')
        element
          .siblings('li')
          .find('ul')
          .slideUp(300, 'swing')
      }
    })

    // The Password Show
    $('.show-pass-one').on('click', function() {
      const x = $('.password')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    })

    $('#show-pass-two').on('click', function() {
      const x = document.getElementById('myInputTwo')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    })

    $('#show-pass-three').on('click', function() {
      const x = document.getElementById('myInputThree')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    })

    // Form Slider
    $('.account-control-button').on('click', function() {
      $('.account-area').toggleClass('change-form')
    })

    // progress bar
    $('.progressbar').each(function() {
      $(this)
        .find('.bar')
        .animate(
          {
            width: $(this).attr('data-perc')
          },
          8000
        )
      $(this)
        .find('.label')
        .animate(
          {
            left: $(this).attr('data-perc')
          },
          8000
        )
    })

    // faq Tab
    const tabWrapper = $('.faq-tab-wrapper')
    const tabMnu = tabWrapper.find('.tab-menu li')
    const tabContent = tabWrapper.find('.tab-cont > .tab-item')
    tabContent.not(':nth-child(1)').fadeOut(350)
    tabMnu.each(function(i) {
      $(this).attr('data-tab', 'tab' + i)
    })
    tabContent.each(function(i) {
      $(this).attr('data-tab', 'tab' + i)
    })
    tabMnu.on('click', function() {
      const tabData = $(this).data('tab')
      tabWrapper.find(tabContent).fadeOut(350)
      tabWrapper
        .find(tabContent)
        .filter('[data-tab=' + tabData + ']')
        .fadeIn(350)
    })
    $('.tab-menu > li').on('click', function() {
      const before = $('.tab-menu li.active')
      before.removeClass('active')
      $(this).addClass('active')
    })
    // eslint-disable-next-line no-undef
  })(jQuery)
}

export default {
  watch: {
    '$route.path'() {
      // main()
    }
  },
  mounted() {
    main()
  }
}
</script>

<style></style>
