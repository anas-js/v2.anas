import $ from "jquery/dist/jquery.min.js";
import AOS from "aos/dist/aos.js";


window.onload = function () {
    // $(window).on()
    // jQuery(window).trigger('load');
    // Set Responsive
    // setInterval(function () {
    //             for (i=0;i<$(".span-eaderh").length; i++) {
    //             if ($(".span-eaderh").eq(i).css("top") == "0px") {
    //                 $(".span-eaderh").eq(i).remove()
    //         }
    //     }
    // },100)
    //   $("a").on('click', function(e){
    //     e.preventDefault();
    //     let pageURL=$(this).attr('href');
    //     if (window.location.pathname == "/"+$(this).attr('href')) {
    //       return 0;
    //     } else {
    //         history.pushState(null, '', pageURL);
    //
    //                 $("body").load(`${pageURL} #my-data`, function () {
    //                   setTimeout(function () {
    //                     $(".loading").addClass("load");
    //                    },500)
    //                 });
    //         history.pushState(null, '', pageURL);
    //         // window.history.pushState("object or string", "Title", `${pageURL}`);
    //                 $("#my-body").load(`${pageURL} #my-data`, function () {
    //                   setTimeout(function () {
    //                     $(".loading").addClass("load");
    //                    },500)
    //                 });
    //     }
    //  });

    setTimeout(function () {
        $(".anmition-span").addClass("border-a");
    }, 1000);
    setTimeout(function () {
        $(".anmition-span").addClass("myanmation");
        $(".anmition-span").removeClass("border-a");
    }, 1500);

    setTimeout(function () {
        $(".anmition-span").removeClass("myanmation");
    }, 2000);

    setInterval(function () {
        setTimeout(function () {
            $(".anmition-span").addClass("border-a");
        }, 1000);
        setTimeout(function () {
            $(".anmition-span").addClass("myanmation");
            $(".anmition-span").removeClass("border-a");
        }, 1500);

        setTimeout(function () {
            $(".anmition-span").removeClass("myanmation");
        }, 2000);
    }, 2000);
};
$(document).ready(function () {
    // Animation CSS NavBar Link
    // $("a[data-link='true']").on('click', function(e){
    //   e.preventDefault();
    //   var pageURL=$(this).attr('href');
    //    history.pushState(null, '', pageURL);
    //    $.ajax({
    //       type: "GET",
    //       url:  `${$(this).attr("data-page")}`,
    //       dataType: "html",
    //       beforeSend: function() {
    //         $(".loading").removeClass("load");
    //         $(".loading").removeClass("d-none");
    //       },
    //       success: function(data){
    //       // const ger = html => new DOMParser().parseFromString(html, "text/html");
    //       //  const page = ger(data);
    //       //  $('#my-body').html(page.getElementById("my-data"));
    //        var content = $($.parseHTML(data, document, true)).find('#my-data');
    //        $('#my-body').html(content);
    //       },
    //       complete : function () {
    //         setTimeout(function () {
    //           $(".loading").addClass("load");
    //           setTimeout(function () {
    //             $(".loading").addClass("d-none");
    //           },500);
    //         },100)
    //         $("html, body").animate({scrollTop:0},500)
    //         if ($("h1").text() == "NONE") {
    //           document.title = "none";
    //         } else {
    //           document.title = $("h1").text() + " | none";
    //         }
    //       }
    //   });
    // });
    // Mobile List Anmition

    console.log(
        "%cشتدور ماكو شي 😂",
        "color: #ff; font-family:serif; font-size: 20px; font-family: 'Tajawal';padding:20px"
    );
    console.log(
        "%c@dev_none https://instagram.com/dev_none",
        "color: #ff; font-family:serif; font-size: 20px;"
    );



    // On AOS Anmiton
    AOS.init();
    // Scroll Anmitons
    if (window.pageYOffset >= 30) {
        $("nav").addClass("nav-scroll");
        // $(".logo-header img").attr("src", require(`@/assets/image/Logo-scroll.svg`));
    } else {
        $("nav").removeClass("nav-scroll");
        // $(".logo-header img").attr("src", require(`@/assets/image/Logo.svg`));
    }
    window.onscroll = function () {
        if (window.pageYOffset >= 30) {
            $("nav").addClass("nav-scroll");
            // $(".logo-header img").attr(
            //     "src",
            //     require(`@/assets/image/Logo-scroll.svg`)
            // );
        } else {
            $("nav").removeClass("nav-scroll");
            // $(".logo-header img").attr("src", require(`@/assets/image/Logo.svg`));
        }
        if (window.pageYOffset >= 700) {
            $(".go-top").addClass("go-top-active");
        } else {
            $(".go-top").removeClass("go-top-active");
        }
    };
    if (window.pageYOffset >= 700) {
        $(".go-top").addClass("go-top-active");
    } else {
        $(".go-top").removeClass("go-top-active");
    }

    // $("a[data-link='false']").on("click", function (e) {
    //     e.preventDefault();
    //     $("html, body").animate(
    //         {
    //             scrollTop: $(`${$(this).attr("href")}`).offset().top - 100,
    //         },
    //         500
    //     );

    //     console.log($(`${$(this).attr("href")}`).offset().top);
    // });


    // Animation Text Header
    // const crateSpanHeader = setInterval(function () {
    //     const textSpanHeader = "!@#$%^&*()_{}[]+=/:;,.";
    //         const randomNumberSpan = Math.floor(
    //             Math.random() * textSpanHeader.length
    //         );
    //         const textCut = textSpanHeader.substring(
    //             randomNumberSpan,
    //             randomNumberSpan + 1
    //         );
    //         const randomNumberLeft = Math.floor(Math.random() * 100);
    //         const randomNumberTop = Math.floor(Math.random() * 100);
    //     $(".header-top").append(
    //         `<span class="span-eaderh" style="left:${randomNumberLeft}%;top:${randomNumberTop}%">${textCut}</span>`
    //     );
    //     if ($(".span-eaderh").length >= 10) {
    //         clearInterval(crateSpanHeader);
    //     }
    // }, 10);

    // let mywindo = window.location.href;
    // console.log(mywindo);
    // console.log(window.location.href);
    // // if ()

    //     $.ajax({
    //         type: "GET",
    //         url: "../json.json",
    //         dataType: "json",
    //         success: function (data) {
    //             $("#temp-num").attr("data-count", data.template.length);
    //             $("#des-num").attr("data-count", data.designs.length);
    //             $("#art-num").attr("data-count", data.articles.length);

    //             let mynumse = 0;
    //             for (let itemp = 0; itemp < data.template.length; itemp++) {
    //                 if (data.template[itemp].free == true) {
    //                     mynumse++;
    //                     $("#free-num").attr("data-count", mynumse);
    //                 }
    //                 $(".sect-1-ciled").append(`
    //       <div class="col-xl-3  col-md-4  col-xs-12  tep-sect">
    //       <div data-aos="zoom-out" data-aos-once="true" data-aos-duration="1500">
    //       ${data.template[itemp].new}
    //          <div class="back-tep-img">
    //             <a href="${data.template[itemp].href}" data-link="true" data-page="${data.template[itemp].dataPage}"><img src="${data.template[itemp].src}" alt="login"></a>
    //              <div class="tep-info-div">
    //                  <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"  viewBox="0 0 215.661 23.582">
    //                      <g id="Group_4" data-name="Group 4" transform="translate(-1445.036 -1068.402)">
    //                        <path id="Path_35" data-name="Path 35" d="M0-3.685S50.4,10.38,107.2-1.966c18.746-4.074,35.271-9.176,51.344-9.458a186.292,186.292,0,0,1,56.773,7.738V9.41H0Z" transform="translate(1445.375 1079.853)" fill="#323e7d"/>
    //                        <path id="Path_34" data-name="Path 34" d="M-2.047-4.765A370.419,370.419,0,0,0,34.9-.923C54.215.252,81.572,3.1,107.648-2.6c29.011-6.346,56.105-6.168,75.706-4.487A208.828,208.828,0,0,1,213.276-2.6V7.534H-2.047Z" transform="translate(1447.422 1080.497)" fill="#6a82ff"/>
    //                        <path id="Path_33" data-name="Path 33" d="M0-.642S15.664,1.5,38.171,2.633s47.917,4.158,70.583-.769c26.358-5.729,53.642-3.721,72.8-2.507,21.78,1.38,33.765,3.275,33.765,3.275v5.35H0Z" transform="translate(1445.375 1081.281)" fill="#2d4ef8"/>
    //                        <path id="Path_32" data-name="Path 32" d="M0-2.6S14.073.492,38.025,1.8C57.22,2.853,83.641,2.94,109.187-2.6c56.9-12.346,106.474,0,106.474,0V5.414H0Z" transform="translate(1445.036 1086.571)" fill="#fff"/>
    //                      </g>
    //                    </svg>
    //                    <a href="${data.template[itemp].href}" data-link="true" data-page="${data.template[itemp].dataPage}"><h3>${data.template[itemp].title}</h3></a>
    //                  <span class="span-tep"> HTML <i class="fa fa-html5" aria-hidden="true"></i></span>
    //                  <p>${data.template[itemp].des}
    //                  </p>

    //                  <div class="tep-info-footer">
    //                      ${data.template[itemp].btnSale}

    //                      <div class="group-lang">
    //                          ${data.template[itemp].groupLang.html}
    //                          ${data.template[itemp].groupLang.css}
    //                          ${data.template[itemp].groupLang.js}
    //                      </div>
    //                  </div>
    //              </div>
    //          </div>
    //      </div>
    //   </div>
    //       `);
    //             }
    //             for (let ides = 0; ides < data.designs.length; ides++) {
    //                 if (data.designs[ides].free == true) {
    //                     mynumse++;
    //                     $("#free-num").attr("data-count", mynumse);
    //                 }
    //                 $(".sect-2-ciled").append(`
    //       <div class="col-xl-12  col-md-12  col-xs-12">
    //       <div class="dse-chiled-dev"  data-aos="zoom-out" data-aos-once="true" data-aos-duration="1500">
    //           <a href="${data.designs[ides].href}" data-link="true" data-page="${data.designs[ides].dataPage}"><div class="des-img-back"><img src="${data.designs[ides].src}" alt=""></div></a>
    //           <a href="designs/personal-page.html" data-link="true" data-page="personal-page.html"><h3>${data.designs[ides].title}</h3></a>
    //           <span class="span-des"> Adobe XD <img src="images/adobe-xd.png" alt="adobe-xd"></span>
    //           <p>${data.designs[ides].des}</p>
    //           <div class="des-info-footer">
    //               <span class="free">${data.designs[ides].btnSale.text}</span>
    //               <span class="adobe-xd">UI Design <img src="images/adobe-xd.png" alt="adobe-xd"></span>
    //           </div>
    //       </div>
    //   </div>
    //       `);
    //             }
    //             for (let iart = 0; iart < data.articles.length; iart++) {
    //                 $(".sect-3-ciled").append(`
    //       <div class="col-xl-12 col-md-12  col-sm-12  col-xs-12 article-sect">
    //       <div data-aos="zoom-out" data-aos-once="true" data-aos-duration="1500">
    //           <a href="${data.articles[iart].href}" data-link="true" data-page="${data.articles[iart].dataPage}">
    //               <div class="back-artcle"><img src="${data.articles[iart].src}"></div>
    //               <h3>${data.articles[iart].title}</h3>
    //               <span class="artcle-span">مقالة</span>
    //           </a>
    //       </div>
    //   </div>

    //       `);
    //             }
    //             $("a[data-link='true']").on("click", function (e) {
    //                 e.preventDefault();
    //                 var pageURL = $(this).attr("href");
    //                 history.pushState(null, "", pageURL);
    //                 $.ajax({
    //                     type: "GET",
    //                     url: `${$(this).attr("data-page")}`,
    //                     dataType: "html",
    //                     beforeSend: function () {
    //                         $(".loading").removeClass("load");
    //                         $(".loading").removeClass("d-none");
    //                     },
    //                     success: function (data) {
    //                         // const ger = html => new DOMParser().parseFromString(html, "text/html");
    //                         //  const page = ger(data);
    //                         //  $('#my-body').html(page.getElementById("my-data"));
    //                         var content = $($.parseHTML(data, document, true)).find(
    //                             "#my-data"
    //                         );
    //                         $("#my-body").html(content);
    //                     },
    //                     complete: function () {
    //                         setTimeout(function () {
    //                             $(".loading").addClass("load");
    //                             setTimeout(function () {
    //                                 $(".loading").addClass("d-none");
    //                             }, 500);
    //                         }, 100);
    //                         $("html, body").animate(
    //                             {
    //                                 scrollTop: 0,
    //                             },
    //                             500
    //                         );
    //                         if ($("h1>span").hasClass("h1-main")) {
    //                             document.title = "none";
    //                         } else {
    //                             document.title =
    //                                 $("h1>span, h1").text() + " | none";
    //                         }
    //                     },
    //                 });
    //             });
    //         },
    //     });

    // $("a[data-link='false']").on('click', function (e) {
    //   e.preventDefault()
    //   window.scrollTo({
    //     top: $(`${this.getAttribute('href')}`).offset().top - 100,

    //     behavior: 'smooth',
    //   })
    // })

});

// $("#apsge").on("click", function () {
//     alert("fg");
// });

window.onbeforeunload = function () {
  window.scrollTo(0,0);
};



