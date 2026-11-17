<template>
  <div class="NavApp">
    <nav>
      <div class="container">
        <div
          class="header-div"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="2000"
        >
          <nuxt-link class="logo-header" to="/" @click.native="goTop">
            <img
              class="NavLogo"
              src="../assets/image/Logo-scroll.svg"
              alt="logo"
            />
          </nuxt-link>
          <div class="dark-mode-button dark-button-desktop">
            <div>
              <div class="dark-switch-button">
                <div>
                  <i class="ri-moon-fill"></i> <span>الوضع المظلم</span>
                </div>

                <div><i class="ri-sun-fill"></i> <span>الوضع الفاتح</span></div>
              </div>
            </div>
          </div>
          <ul class="link-navbar">
            <li
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1500"
            >
              <nuxt-link
                v-if="$route.name != 'index'"
                to="/tm"
                @click.native="goTop"
                >قوالب</nuxt-link
              >
              <a v-else href="#templates" data-link="false">قوالب</a>
            </li>
            <li
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="2500"
            >
              <nuxt-link
                v-if="$route.name != 'index'"
                to="/des"
                @click.native="goTop"
                >تصاميم</nuxt-link
              >
              <a v-else href="#designs" data-link="false">تصاميم</a>
            </li>
            <li
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="3000"
            >
              <nuxt-link
                v-if="$route.name != 'index'"
                to="/art"
                @click.native="goTop"
                >مقالات</nuxt-link
              >
              <a v-else href="#articles" data-link="false">مقالات</a>
            </li>
          </ul>
          <div class="list-mobile">
            <!-- <i class="ri-list-check-2"></i> -->
            <i class="ri-align-left"></i>
          </div>
        </div>
      </div>
    </nav>
    <div class="background-nav"></div>
    <div class="nav-mobile">
      <div class="back-nav-mobile"></div>
      <div>
        <div class="close-navbar-mobile"><i class="ri-close-line"></i></div>
        <ul class="link-navbar-mobile link-navbar">
          <li>
            <nuxt-link
              v-if="$route.name != 'index'"
              to="/tm"
              @click.native="goTop"
              >قوالب</nuxt-link
            >
            <a v-else href="#templates" data-link="false">قوالب</a>
          </li>
          <li>
            <nuxt-link
              v-if="$route.name != 'index'"
              to="/des"
              @click.native="goTop"
              >تصاميم</nuxt-link
            >
            <a v-else href="#designs" data-link="false">تصاميم</a>
          </li>
          <li>
            <nuxt-link
              v-if="$route.name != 'index'"
              to="/art"
              @click.native="goTop"
              >مقالات</nuxt-link
            >
            <a v-else href="#articles" data-link="false">مقالات</a>
          </li>
        </ul>

                        <div class="dark-mode-button dark-button-mobile">
            <div>
              <div class="dark-switch-button">
                <div>
                  <i class="ri-moon-fill"></i> <span>الوضع المظلم</span>
                </div>

                <div><i class="ri-sun-fill"></i> <span>الوضع الفاتح</span></div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="go-top">
      <i class="ri-arrow-up-line"></i>
    </div>
    <a href="https://robo.nons.me/" target="_blank">
    <!-- <div class="bot-masseg">
      <img src="@/assets/image/roboBot.svg"> <p>روبو</p>
    </div> -->
   </a>
  </div>
</template>

<script>
import $ from 'jquery/dist/jquery.min.js'
export default {
  name: 'NavApp',
  // data() {
  //     return {
  //         pageName: "f",
  //     };
  // },
  mounted() {
    let statusButtonList = true
    let statusButtonClose = false;
    $('.list-mobile').on('click', function () {

if(statusButtonList === true) {
        $('.nav-mobile').addClass('active-mobile')
      $('.back-nav-mobile').removeClass('animate-nav-back')
      $('.back-nav-mobile').addClass('animate-nav')
      setTimeout(function () {
        $('.link-navbar-mobile, .close-navbar-mobile').addClass(
          'active-links-mobile'
        )

        const navLength = $(".link-navbar-mobile li").length;
        let myLingthNow = 0;
       const interalAddListMobile = setInterval(function() {
          $(".link-navbar-mobile li").eq(myLingthNow).addClass('active-links-mobile-li')

          if(myLingthNow === navLength-1) {
            clearInterval(interalAddListMobile)
          }
          myLingthNow++
        },200)
      }, 1000)
}

      statusButtonList = false;
      statusButtonClose = true;
    })
    $('.close-navbar-mobile, .link-navbar-mobile li,.dark-button-mobile').on('click', function () {
     if(statusButtonClose === true) {


           let navLength = $(".link-navbar-mobile li").length;
       // let myLingthNow = 0;
       const interalAddListMobile = setInterval(function() {
          $(".link-navbar-mobile li").eq(navLength-1).removeClass('active-links-mobile-li')

          if(navLength-1 === 0) {
            clearInterval(interalAddListMobile)
            statusButtonList = true
                         $('.link-navbar-mobile, .close-navbar-mobile').removeClass(
        'active-links-mobile'
      )
      $('.back-nav-mobile').addClass('animate-nav-back')
      $('.back-nav-mobile').removeClass('animate-nav')
      setTimeout(function () {
        $('.nav-mobile').removeClass('active-mobile')

      }, 1000)

          }

          navLength--
        },200)
         }

          statusButtonClose = false;
    })

    $('.go-top').on('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    // $('.link-navbar a').on('mouseenter', function () {
    //   $(this).removeClass('hover-navbar-back')
    //   $(this).addClass('hover-navbar')
    // })
    // $('.link-navbar a').on('mouseleave', function () {
    //   $(this).removeClass('hover-navbar')
    //   $(this).addClass('hover-navbar-back')
    //   // const myThis = $(this);
    //   // setTimeout(function () {
    //   //  myThis.removeClass('hover-navbar-back')
    //   // },1000)
    // })
  },
}
</script>
