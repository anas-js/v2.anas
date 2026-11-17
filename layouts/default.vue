<template>
  <div>
    <LoadingApp />
    <UpdateVN />
    <NavApp />
    <Nuxt />
    <FooterApp />
  </div>
</template>

<script>
// import globale from "~/mixins.js/golmix.js";
import '@/assets/License.js'
import $ from 'jquery/dist/jquery.min.js'
import Vue from 'vue'

Vue.mixin({
  updated() {
    $('.link-navbar a').on('mouseenter', function () {
      $(this).removeClass('hover-navbar-back')
      $(this).addClass('hover-navbar')
    })
    $('.link-navbar a').on('mouseleave', function () {
      $(this).removeClass('hover-navbar')
      $(this).addClass('hover-navbar-back')
    })
  },
  methods: {
    goTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      // Animation Text Header
      // const crateSpanHeader = setInterval(function () {
      //   const textSpanHeader = '!@#$%^&*()_{}[]+=/:;,.'
      //   const randomNumberSpan = Math.floor(
      //     Math.random() * textSpanHeader.length
      //   )

      //   const textCut = textSpanHeader.substring(
      //     randomNumberSpan,
      //     randomNumberSpan + 1
      //   )
      //   const randomNumberLeft = Math.floor(Math.random() * 100)
      //   const randomNumberTop = Math.floor(Math.random() * 100)
      //   $('.header-top').append(
      //     `<span class="span-eaderh" style="left:${randomNumberLeft}%;top:${randomNumberTop}%">${textCut}</span>`
      //   )
      //   if ($('.span-eaderh').length >= 10) {
      //     clearInterval(crateSpanHeader)
      //   }
      // }, 10)
    },
  },
})

// import "@/assets/js/script.js"
// const mixins = {
//   methods: {
//     goTop() {
//       window.scrollTo({ top: 0, behavior: 'smooth' })
//       // Animation Text Header
//       const crateSpanHeader = setInterval(function () {
//         const textSpanHeader = '!@#$%^&*()_{}[]+=/:;,.'
//         const randomNumberSpan = Math.floor(
//           Math.random() * textSpanHeader.length
//         )
//         const textCut = textSpanHeader.substring(
//           randomNumberSpan,
//           randomNumberSpan + 1
//         )
//         const randomNumberLeft = Math.floor(Math.random() * 100)
//         const randomNumberTop = Math.floor(Math.random() * 100)
//         $('.header-top').append(
//           `<span class="span-eaderh" style="left:${randomNumberLeft}%;top:${randomNumberTop}%">${textCut}</span>`
//         )
//         if ($('.span-eaderh').length >= 10) {
//           clearInterval(crateSpanHeader)
//         }
//       }, 10)
//     },
//   },
//   updated() {
//     $('.link-navbar a').on('mouseenter', function () {
//       $(this).removeClass('hover-navbar-back')
//       $(this).addClass('hover-navbar')
//     })
//     $('.link-navbar a').on('mouseleave', function () {
//       $(this).removeClass('hover-navbar')
//       $(this).addClass('hover-navbar-back')
//     })
//   },
// }

export default {
  watch: {
    $route(to, from) {
      this.onbuy()
      // console.log(to)
    },
  },
  beforeMount() {
    this.onbuy()
    if (localStorage.getItem('dark') === 'true') {
      $('body').addClass('dark')
    }
  },
  mounted() {
    let statusButoon = true
    $('.dark-mode-button').on('click', function () {
      console.log(statusButoon)
      if (statusButoon === true) {
        if ($('body').hasClass('dark') === true) {
          localStorage.setItem('dark', 'false')
        } else {
          localStorage.setItem('dark', 'true')
        }

        $('.dark-switch-button').toggleClass('switch-mode')
        $('body').toggleClass('dark')

        if (
          $('.img-back-main').attr('src').includes('backgroun-header') === true
        ) {
          $('.img-back-main').attr(
            'src',
            require('../assets/image/dark-header.svg')
          )
        } else {
          $('.img-back-main').attr(
            'src',
            require('../assets/image/backgroun-header.svg')
          )
        }

        if ($('.NavLogo').attr('src').includes('logo-dark') === true) {
          $('.NavLogo').attr('src', require('../assets/image/Logo-scroll.svg'))
        } else {
          $('.NavLogo').attr('src', require('../assets/image/logo-dark.svg'))
        }

        if ($('.headee-div-img img').length !== 0) {
          if (
            $('.headee-div-img img')
              .attr('src')
              .includes('image-header-main') === true &&
            $('.headee-div-img img').length !== 0
          ) {
            $('.headee-div-img img').attr(
              'src',
              require('../assets/image/dark-main-img.svg')
            )
          } else {
            $('.headee-div-img img').attr(
              'src',
              require('../assets/image/image-header-main.svg')
            )
          }
        }

        setTimeout(function () {
          $('.dark-button-desktop .dark-switch-button').append(
            $('.dark-button-desktop .dark-switch-button>div').eq(0)
          )

          $('.dark-button-mobile .dark-switch-button').append(
            $('.dark-button-mobile  .dark-switch-button>div').eq(0)
          )
          $('.dark-switch-button').removeClass('switch-mode')
          statusButoon = true
        }, 1000)
      }

      statusButoon = false
    })

    if (localStorage.getItem('dark') === 'true') {
      $('.dark-button-desktop .dark-switch-button').append(
        $('.dark-button-desktop .dark-switch-button>div').eq(0)
      )

      $('.dark-button-mobile .dark-switch-button').append(
        $('.dark-button-mobile  .dark-switch-button>div').eq(0)
      )

      // $(".dark-button-mobile").append($(".dark-switch-button>div").eq(0));
      if (
        $('.img-back-main').attr('src').includes('backgroun-header') === true
      ) {
        $('.img-back-main').attr(
          'src',
          require('../assets/image/dark-header.svg')
        )
      } else {
        $('.img-back-main').attr(
          'src',
          require('../assets/image/backgroun-header.svg')
        )
      }

      if ($('.NavLogo').attr('src').includes('logo-dark') === true) {
        $('.NavLogo').attr('src', require('../assets/image/Logo-scroll.svg'))
      } else {
        $('.NavLogo').attr('src', require('../assets/image/logo-dark.svg'))
      }

      if ($('.headee-div-img img').length !== 0) {
        if (
          $('.headee-div-img img').attr('src').includes('image-header-main') ===
            true &&
          $('.headee-div-img img').length !== 0
        ) {
          $('.headee-div-img img').attr(
            'src',
            require('../assets/image/dark-main-img.svg')
          )
        } else {
          $('.headee-div-img img').attr(
            'src',
            require('../assets/image/image-header-main.svg')
          )
        }
      }
    }
  },
  //   data() {
  //     return {
  //       removeText : "",
  //       addText : "",
  //     }
  //   },
  //   watch:{
  //     $route (to, from){
  //      if (this.$route.name !== "index") {
  //        clearInterval(this.removeText)
  //        clearInterval(this.addText)
  //      } else {
  //            setTimeout(() => {
  //     }, 2000);

  //      }
  //     }
  //   },
  //   mounted() {
  //         if (this.$route.name === "index") {
  //        const mySelector = document.querySelector(".nriter-writ");
  //           let arrayNumber = 0;
  //          const arrayText = ["صمم","طور"]
  //            const writingSpeed = 200;
  //            const timewit = 2500;
  //         const mySpan1 = document.createElement("span");
  //            const mySpan1Text = document.createTextNode("|");
  //         mySpan1.appendChild(mySpan1Text);
  //        mySelector.appendChild(mySpan1);

  // ;

  //           this.removeText = setInterval(function removeTextFunction() {

  //             // Cut the last letter of the word and print the word after editing
  //             mySelector.childNodes[0].textContent = mySelector.childNodes[0].textContent.substr(
  //                     0,
  //                    mySelector.childNodes[0]
  //                         .textContent.length - 1
  //                 );
  //            mySelector.querySelector("span").style.animation = "initial";
  //             // Check if the entire word has been deleted
  //             if (
  //                mySelector.childNodes[0]
  //                     .textContent.length === 0
  //             ) {

  //                 clearInterval(this.removeText);

  //                  let numberLength = 1;

  //                 const arrayNowText = arrayText[arrayNumber];

  //                 this.addText = setInterval(function () {
  //                     // Show the word gradually from the first letter to the whole word
  //                     mySelector.childNodes[0].textContent = arrayNowText.substr(
  //                         0,
  //                         numberLength
  //                     );
  //                     numberLength++;
  //                     mySelector.querySelector("span").style.animation = "initial";
  //                     // Check if the whole word is displayed
  //                     if (
  //                         arrayNowText.length ===
  //                         mySelector.childNodes[0].textContent.length
  //                     ) {
  //                         // Stop letter writing
  //                         clearInterval(this.addText);
  //                         arrayNumber++;
  //                         // Repeat display of words
  //                         if (arrayNumber === arrayText.length) {
  //                             arrayNumber = 0;
  //                         }
  //                         mySelector.querySelector("span").removeAttribute("style");
  //                         setTimeout(function () {
  //                             this.removeText = setInterval(
  //                                 removeTextFunction,
  //                                 writingSpeed
  //                             );
  //                         }, timewit);
  //                     }
  //                 }.bind(this), writingSpeed);
  //             }
  //         }.bind(this), writingSpeed);

  //         }
  //   },
  //    create() {
  //      console.log('g')
  //    },
  // beforeMount() {

  // },
  //   updated() {
  //   //  this.onbuy()
  //    console.log(this.$route)
  // },
  methods: {
    onbuy() {
      //       const myState = this.$route.fullPath.includes('/tm')
      //       setTimeout(function () {
      //         if (myState === true) {
      //           $('.buy').on('click', function (e) {
      //             e.preventDefault()
      //             const myAAttr = $(this).attr('href')
      //             const myconfer = confirm(
      //               `تنبيه!! \nالشروط :\nيشترط على كل شخص حمل اي قالب او اي عمل بأنه لا يستخدمه استخدام ينافي الشريعة الإسلامية, ولا اتحمل ذنب اي شخص. \n \n 1- لا تحذف الحقوق من القالب او العمل - ما احلل \n 2- لا تبيع او توزع المشروع.
      //     \n
      //     اختياري :
      //     منشني او انشر لي :) ما سويته في ليلة وضحاها.
      //     `
      //             )
      //             if (myconfer === true) {
      //               window.open(myAAttr)
      //             }
      //           })
      //         }
      // if (localStorage.getItem("dark") === "true") {
      //       $('.img-back-main').attr(
      //         'src',
      //         require('../assets/image/dark-header.svg')
      //       )
      //           if($(".headee-div-img img").length !== 0) {
      //        $(".headee-div-img img").attr("src", require("../assets/image/dark-main-img.svg"))
      //     }
      // }
      //       }, 100)
    },
  },
}
</script>
