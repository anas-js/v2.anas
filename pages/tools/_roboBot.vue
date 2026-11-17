<template>
  <div>
    <div class="main-bot">
      <div class="body-bot">
        <div class="header-bot">
          <img src="@/assets/image/roboBot.svg" />
          <h1>روبو</h1>

          <nuxt-link to="/"><span class="close-bot">مغادرة <i class="ri-logout-box-line"></i></span></nuxt-link>
        </div>

        <div class="massegs-bot">
          <div>
          </div>
                    <div class="bot-anmiton">
            <p>جاري الكتابة...</p>
          </div>
        </div>
        <div class="footer-bot">
          <input type="text" placeholder="روبو مستعد...قل شيئاً" />
          <span class="send">ارسال</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery/dist/jquery.min.js'
export default {
  layout: 'clear',
      head: {
    title: 'روبو',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'روبو موجود هنا لمساعدتك هيا بنا...',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'روبو موجود هنا لمساعدتك هيا بنا...',
      },
      { hid: 'og:title', property: 'og:title', content: 'روبو | none' },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'روبو | none',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          'روبو موجود هنا لمساعدتك هيا بنا...',
      },
    ],
  },
  mounted() {



    const roboSetings = {
      reply:[{
        masseg : "السلام عليكم,,السلام,,سلام",
        replyMsg : "وعليكم السلام,,وعليكم السلام ورحمة الله وبركاته",
        search :true
      },
      {
        masseg : "بخير,,تمام,,الحمدلله,,طيب",
        replyMsg : "دوووم,,دوم ان شاء الله",
        search : true
      },
      {
        masseg : "يدوم غاليك,,تدوم صحتك,,تدوم",
        replyMsg : "تسلم,,جزاك الله خير,,الله يخليك",
        search : true
      },
      {
        masseg : "مساعدة",
        replyMsg : "اوامر روبو : </br> {hash}# تعلم{hash} </br> {hash}# أسئلة{hash} </br> {hash}# خدمات{hash} ",
        search :true
      },
      {
        masseg : "مرحبا,,اهلا,,اهلا و سهلا",
        replyMsg : "اهلا وسهلا بك,كيف اخدمك؟",
        search : true
      },
         {
        masseg : "# تعلم",
        replyMsg : "اختر : </br> {hash}# كيف اتعلم البرمجة؟{hash} </br> {hash}# تعلم تطوير الويب{hash}",
        search : false
      },
          {
        masseg : "كيف اتعلم البرمجة",
        replyMsg : "انت ايش ميولك؟ تطوير العاب, مواقع, تطبيقات, برامج الخ. دخلت عالم البرمجة عشان تسوي ايش؟ ايش راح تسوي بالبرمجة؟ </br></br>بعد ما تعرفت ايش ميولك  تبدأ تقرأ عن المسار وعن لغاته وأيش تحتاج عشان تتعلمه ولا تقولي صعبة أو سهلة دام عندك هدف لازم تحققه , وتبدأ تعلم المسار </br></br> وتبحث عن دورات تتعلمها. </br> لو حاب او عاجبك تتعلم {hash}# تعلم تطوير الويب{hash} اقدر افيدك.",
        search : true
      },
                     {
        masseg : "اتعلم",
        replyMsg : "اختر : </br> {hash}# كيف اتعلم البرمجة؟{hash} </br> {hash}# تعلم تطوير الويب{hash}",
        search : true
               },


        {
        masseg : "تعلم تطوير الويب",
        replyMsg : "عظيم!! توجد كورسات عربية و خطط كامله مرسومة و مجهزة. </br> عشان تبدأ فتطوير الويب تحتاج تعرف ان لتطوير الويب 3 اقسام : </br></br> {hash}# Front End Developer{hash} </br>مطور الواجهات الأمامية, هوالشخص المسؤول عن شكل الموقع أو الشيء الظاهر للمستخدم مثل النصوص و الصور و الأزرار وما إلى ذلك.  </br></br> {hash}# Back End Developer{hash} </br> مطور الخلفية هو الشخص المسؤول عن تطوير ما لا يراه المستخدم مثل عمليات تسجيل الدخول أو عمليات الشراء أو عمليات حفظ البيانات. </br></br> {hash}# Full Stack Developer{hash} </br>هو يجمع بين تطوير الواجهات و تطوير الخلفية.  </br></br> أقرأ هنا {link}https://elzero.org/important-videos-before-you-learn/{link}",
        search : true
      },
              {
        masseg : "Front End,,front end",
        replyMsg : "أختيار موفق 🔥🌟 </br> خطتك : </br> {link}https://elzero.org/tracks/front-end/{link} </br></br> راجع هذا المنشور للفائدة :</br> {link}https://www.instagram.com/p/CT-DNoOsMOu/{link}",
        search : true
      },
         {
        masseg : "Back End,,back end",
        replyMsg : "رائع!! 🎉🎉 </br> خطتك : </br> {link}https://elzero.org/learning-paths/web-developer/{link} </br></br> راجع هذا المنشور للفائدة :</br> {link}https://www.instagram.com/p/CT-DNoOsMOu/{link}",
        search : true
      },
      {
        masseg : "Full Stack,,full stack",
        replyMsg : "مذهل!! 🥳 </br> خطتك : </br> {link}https://elzero.org/tracks/full-stack-web-developer/{link} </br></br> راجع هذا المنشور للفائدة :</br> {link}https://www.instagram.com/p/CT-DNoOsMOu/{link}",
        search : true
      },
        {
        masseg : "أسئلة,,اسئلة",
        replyMsg : "{hash}# من هو روبو ؟{hash} </br> {hash}# هل أستطيع إنشاء 'روبو' خاص بي؟{hash} </br> {hash}# حول{hash}",
        search : true
      },
      {
        masseg : "من هو روبو,,اسمك",
        replyMsg : "انا روبو شخص لطيف احاول مساعدتك..وأحب أن ابث السعادة في قلوب الآخرين 🥺❤️.",
        search : true
      },
            {
        masseg : "هل أستطيع إنشاء 'روبو' خاص",
        replyMsg : "هل سوف أحصل على اخوه 😮..نعم!! بالفعل!!, لكن بالوقت الراهن لا أضن يالا الأسف 😞.",
        search : true
      },
      {
        masseg : "حول",
        replyMsg : `تمت برمجتي بواسطة <a href="https://www.instagram.com/dev_none/" target="_blank">@dev_none</a> 😊.`,
        search : true
      },
            {
        masseg : "خدمات",
        replyMsg : `يقدم <a href="https://www.instagram.com/dev_none/" target="_blank">@dev_none</a> خدمتين هما : </br>-تطوير واجهات المواقع </br>-تصميم واجهات المواقع </br></br>مهتم؟ ...قم بمراسلته الآن واخبره انك كنت تكلمني <a href="https://www.instagram.com/dev_none/" target="_blank">@dev_none</a>, ماذا تنتظر 😎.`,
        search : true
      },
            {
        masseg : "احبك",
        replyMsg : `ماذا ! ...انا لست زوجتك 🙂.`,
        search : true
      },
                  {
        masseg : "تحبني",
        replyMsg : `ومن انت؟ زوجتي؟`,
        search : true
      },


      {
        masseg : "اكرهك",
        replyMsg : `لماذا!!.. أنا آسف 🥺, لا اذكر بانني فعلت شياً خطئًا.`,
        search : true
      },
            {
        masseg : "ايه,,نعم",
        replyMsg : `ماذا بعد؟..,,اكمل؟,,وماذا تنتظرني ان افعل؟,,حسنا`,
        search : false
      },
                  {
        masseg : "عمرك",
        replyMsg : `انا؟ ..انا وهم لا يعبرني احد 😥.`,
        search : true
      },
       {
        masseg : "كلب,,حيوان,,غبي,,زق,,خرا,,مجنون,,تبن,,امك",
        replyMsg : `هل هذا الكلام يصدر منك؟,,😭😭,,وهل تتوقع مني الرد؟,,يالا قذرة الكلامات.`,
        search : true
      },
             {
        masseg : "لا اعرف,,ما اعرف",
        replyMsg : `وهل أنا اعرف؟`,
        search : true
      },
                  {
        masseg : "صباح الخير",
        replyMsg : `صباح النور .. اهلا وسهلا`,
        search : true
      },
       {
        masseg : "تبكي",
        replyMsg : `انا فرحان بك!! 🥺❤️.`,
        search : true
      },
      {
        masseg : "<,,>",
        replyMsg : `تبي تخترقني؟.`,
        search : true
      },
            {
        masseg : "مارتن",
        replyMsg : `انا اعرفه جيداً 🥺❤️`,
        search : true
      },
        {
        masseg : "لا",
        replyMsg : `لماذا لا؟,,لا ايضاً؟,,لا!!,,لماذا لا 🥺`,
        search : false
      },
            {
        masseg : "كيف الحال,,كيف حالك,,كيفك,,شلونك,,شخبارك",
        replyMsg : "الحمدالله بخير... كيف حالك انت؟,,تمام الحمدلله... كيف حالك انت؟,,في شخص يسأل عني 🥺 ببكي.. الحمدالله تمام كيفك انت؟",
        search : true
      },
      ],
      settings :{
        welcome : `مرحباً, انا مستعد لأستقبال اسئلتك و استفتسارتك,لعرض اوامر روبو {hash}# مساعدة{hash}`,
        error : "أنا آسف 😥, لم أعثر على اجابة...هل تحتاج الى {hash}# مساعدة{hash}؟"
      }
    };

let masseagValue;
let maseagSplit;
let replyMsg;
let masseagSelect;
let statusfound = false;
let lengthNumberI;
let myInputFilter;
// const myArrySerch = [];

  masseagSelect = roboSetings.settings.welcome + `</br></br> بواسطة <a href="https://www.instagram.com/dev_none/" target="_blank">@dev_none</a>`;
  linkChick()
// $('.massegs-bot div').eq(0).append(`
//               <div class="robo-masseg">
//            <p>${roboSetings.settings.welcome}</p>
//             <span class="float-clear"></span>
//          </div>

//                        <div class="robo-masseg">
//            <p>بواسطة <a href="https://www.instagram.com/dev_none/" target="_blank">@dev_none</a></p>
//             <span class="float-clear"></span>
//          </div>
//       `)

// hashtagClick()

   function goBottomMsg() {
     const massegsBot = document.querySelectorAll(".massegs-bot>div")[0];
      massegsBot.scrollTo(0,(massegsBot.scrollHeight - massegsBot.clientHeight));
   }

    const myInput = $(".footer-bot input");
    myInput.on("focus blur",function () {
      goBottomMsg()
    })
    $('.send').on('click', function () {
     myInputFilter = myInput.val().split(/[<>]+/).join(" ").trim();
      // console.log(myInput.val().trim())
        if(myInputFilter !== "") {




   $(".bot-anmiton").addClass("show-ele")



              $('.massegs-bot div').eq(0).append(`
              <div class="user-masseg">
           <p>${myInputFilter}</p>
            <span class="float-clear"></span>
         </div>
      `)
      // console.log(myInputFilter)
       goBottomMsg()

// new

masseagValue = "";
 maseagSplit = "";
replyMsg = "";
 masseagSelect = "";
 statusfound = false;



function notFound() {
masseagSelect = roboSetings.settings.error;
linkChick()
  // if (allok === true) {
  //   console.log("notfound")
  // }
// masseagsReply.lengthR.length === masseagsReply.allR.length &&
//                                      setTimeout(function() {
//             $(".bot-anmiton").removeClass("show-ele")
//                         $('.massegs-bot div').eq(0).append(`
//               <div class="robo-masseg">
//            <p>${masseagSelect}</p>
//             <span class="float-clear"></span>
//          </div>
//       `)

// // roboSetings.reply[i].replyMsg.split(",,")[randomReply]


//       goBottomMsg()
//           },500)
//   console.log(masseagsReply.lengthR.length)
// console.log(num)
  // myNot.push("masseagValue")
  // console.log(maseagSplit)
   // masseagsReply.lengthR.push(maseagSplit);
     // console.log(mySloop)

    // if (mySloop) {

    // }
  // if (masseagsReply.lengthR.length === masseagsReply.allR.length){

  //    console.log("false")

  // } else {
  //   console.log("true")
  // }

  // console.log(masseagsReply)
}


function selectMassegBot() {
   for(let i=0;i<roboSetings.reply.length;i++) {

     for(let s=0;s <roboSetings.reply[i].masseg.split(",,").length;s++) {

      masseagValue = roboSetings.reply[i];
     lengthNumberI = i;
      maseagSplit = roboSetings.reply[i].masseg.split(",,")[s];
      replyMsg = roboSetings.reply[i].replyMsg.split(",,");
searchReply()
  //           if (i === roboSetings.reply.length-1 && s === roboSetings.reply[i].masseg.split(",,").length-1) {
  //             chcikifFind()
  // }

     if (statusfound === false && i === roboSetings.reply.length-1 && s === roboSetings.reply[i].masseg.split(",,").length-1) {
       notFound()
     }
                 if (statusfound === true) {
            break
          }


     }

            if (statusfound === true) {
            break
          }
   }
}
selectMassegBot()


// last new

        }
 $(".footer-bot input").val("")




    })

  // const numerArry = [];
function searchReply() {
  // console.log(masseagValue)
  //  let statsM = false;


// console.log(`${myInput.val()}`.match(/([^ء-ي]رياض رياضة[^ء-ي])/g))

if(masseagValue.search === true) {



//  for(let ser=0;ser <maseagSplit.split(" ").length;ser++) {
//     if(myInput.val().trim().split(" ").includes(maseagSplit.split(" ")[ser]) === true) {

// myArrySerch.push(`${maseagSplit},,${lengthNumberI}`)

//     }


//   }






    if(myInput.val().trim().includes(maseagSplit) === true) {
      console.log(lengthNumberI)
     statusfound = true;
       selectReply()
    }

} else if (masseagValue.search === false) {
    if(myInput.val().trim() === maseagSplit) {
     statusfound = true;
      selectReply()

    }
}



}

// function chcikifFind() {
// function mode(array)
// {
//     if(array.length === 0)
//         return null;
//     const modeMap = {};
//     let maxEl = array[0]
//     let maxCount = 1;
//     for(let i = 0; i < array.length; i++)
//     {
//         const el = array[i];
//         if(modeMap[el] == null)
//             modeMap[el] = 1;
//         else
//             modeMap[el]++;
//         if(modeMap[el] > maxCount)
//         {
//             maxEl = el;
//             maxCount = modeMap[el];
//         }
//     }
//     return maxEl;
// }
// console.log(mode(myArrySerch))

//      replyMsg = roboSetings.reply[Number(mode(myArrySerch).split(",,")[1])].replyMsg.split(",,");
//      statusfound = true
// selectReply()
// }



// let lastRandom;
let lengthRandom = [];
let lastI;
function selectReply() {
  if (lastI !== lengthNumberI) {
     lengthRandom = []
     selectRandom()
  } else {
selectRandom()
  }
//   lastI = lengthNumberI;

//    let randomReply = Math.floor(Math.random() * replyMsg.length);
//    while(true) {
//     //  if (lastRandom === randomReply) {
//     //    randomReply = Math.floor(Math.random() * replyMsg.length);
//     //  }

//      if (lengthRandom.includes(randomReply) === true) {
//        randomReply = Math.floor(Math.random() * replyMsg.length);
//      }
//      else {
//         lengthRandom.push(randomReply)
//         if (lengthRandom.length === replyMsg.length) {
//           lengthRandom = []
//         }
//        // lastRandom = randomReply;
//         masseagSelect = replyMsg[randomReply]
//        linkChick()
//         break
//      }

//    };
// console.log(lengthRandom)
  //  console.log(lengthRandom)
}

function selectRandom() {
  lastI = lengthNumberI;
   let randomReply = Math.floor(Math.random() * replyMsg.length);
   while(true) {
    //  if (lastRandom === randomReply) {
    //    randomReply = Math.floor(Math.random() * replyMsg.length);
    //  }

     if (lengthRandom.includes(randomReply) === true) {
       randomReply = Math.floor(Math.random() * replyMsg.length);
     }
     else {
        lengthRandom.push(randomReply)
        if (lengthRandom.length === replyMsg.length) {
          lengthRandom = []
        }
       // lastRandom = randomReply;

        // if (lengthRandom.length >= 2) {
        //    lengthRandom = ["",""]
        //    masseagSelect = "يحج ما كفاية تكرر كلام؟";
        //    console.log(lengthRandom)
        // } else {

        // }
        // const lastMaseag = $(".user-masseg");
        // console.log(lastMaseag.eq(lastMaseag.length-1).text() === myInputFilter)
        // if (lastMaseag.eq(lastMaseag.length-2))
                  masseagSelect = replyMsg[randomReply]
                 linkChick()

        break
     }
   };
}


function linkChick() {
  if(masseagSelect.includes("{link}") === true) {
      const myLinks = masseagSelect.split("{link}");
    for(let link=0;link<myLinks.length;link++) {


        //  console.log(link)
        //  const lengthLink = ;
         if(myLinks[link].includes("http") === true) {
          myLinks[link] = `<a href="${myLinks[link]}" target="_blank">${myLinks[link]}</a>`;

         if (link === myLinks.length-2) {
          masseagSelect = myLinks.join("");
           hashCheck()
         }
         }


    }

  } else {
     hashCheck()
  }
}

function hashCheck() {
    if(masseagSelect.includes("{hash}") === true) {
      const myHash = masseagSelect.split("{hash}");
    for(let hash=0;hash<myHash.length;hash++) {


        //  console.log(link)
        //  const lengthLink = ;
         if(myHash[hash].includes("#") === true) {
          myHash[hash] = `<span class="hashtag">${myHash[hash]}</span>`;

         if (hash === myHash.length-2) {
          masseagSelect = myHash.join("");

           send()
         }
         }


    }

} else {
  send()
}
}

function send() {
                                       setTimeout(function() {
            $(".bot-anmiton").removeClass("show-ele")
                        $('.massegs-bot div').eq(0).append(`
              <div class="robo-masseg">
           <p>${masseagSelect}</p>
            <span class="float-clear"></span>
         </div>
      `)
      hashtagClick()
// roboSetings.reply[i].replyMsg.split(",,")[randomReply]


      goBottomMsg()
          },500)
}
// function hashtagClick() {
//        $(".hashtag").on("click", function () {
//       alert("g")
//     })
// }

function hashtagClick() {
         $(".hashtag").on("click", function () {
      $(".footer-bot input").val($(this).text())
    })
}


        myInput.on("keyup", function (event) {

          if (event.which === 13) {
          event.preventDefault()
        // Trigger the button element with a click
         document.querySelector('.send').click()

          }

        })

  },
}
</script>

<style>
a {
  color: #6981ff;
  font-weight: bold;
}

.hashtag {
      font-weight: bold;
    display: inline-block;
    text-decoration: underline;
    cursor: pointer;
}
</style>
