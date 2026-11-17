<template>
  <div class="col-xl-3 col-md-4 col-xs-12 tep-sect">
    <!-- <span :class="btnSale[0]">{{btnSale[1]}}</span> -->
    <div
      data-aos="fade-up"
      data-aos-once="true"
      :data-aos-duration="(length + 1) * 500"
    >

    <!-- <div v-if="temp.path === 'Linkplus'" class="timelate">
      <p>ينتهي العرض بعد</p>
      <div>

   <div>
        <span>00</span>
        <p>ث</p>
      </div>
      <span>:</span>
      <div>
        <span>00</span>
        <p>د</p>
      </div>
       <span>:</span>
      <div>
        <span>00</span>
        <p>س</p>
      </div>
      </div>
    </div> -->
      <div v-if="temp.new == true" class="anmition-free">
        <span class="anmition-span"></span>
      </div>
      <div class="back-tep-img">
        <nuxt-link
          v-if="$route.fullPath === '/tm/'"
          :to="temp.path"
          @click.native="goTop"
          ><img :src="require(`@/assets/image/${temp.src}`)" :alt="temp.title"
        /></nuxt-link>

        <nuxt-link v-else :to="`tm/${temp.path}`" @click.native="goTop"
          ><img :src="require(`@/assets/image/${temp.src}`)" :alt="temp.title"
        /></nuxt-link>
        <div class="tep-info-div">
          <!-- <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 215.661 23.582"
                    >
                        <g
                            id="Group_4"
                            data-name="Group 4"
                            transform="translate(-1445.036 -1068.402)"
                        >
                            <path
                                id="Path_35"
                                data-name="Path 35"
                                d="M0-3.685S50.4,10.38,107.2-1.966c18.746-4.074,35.271-9.176,51.344-9.458a186.292,186.292,0,0,1,56.773,7.738V9.41H0Z"
                                transform="translate(1445.375 1079.853)"
                                fill="#323e7d"
                            />
                            <path
                                id="Path_34"
                                data-name="Path 34"
                                d="M-2.047-4.765A370.419,370.419,0,0,0,34.9-.923C54.215.252,81.572,3.1,107.648-2.6c29.011-6.346,56.105-6.168,75.706-4.487A208.828,208.828,0,0,1,213.276-2.6V7.534H-2.047Z"
                                transform="translate(1447.422 1080.497)"
                                fill="#6a82ff"
                            />
                            <path
                                id="Path_33"
                                data-name="Path 33"
                                d="M0-.642S15.664,1.5,38.171,2.633s47.917,4.158,70.583-.769c26.358-5.729,53.642-3.721,72.8-2.507,21.78,1.38,33.765,3.275,33.765,3.275v5.35H0Z"
                                transform="translate(1445.375 1081.281)"
                                fill="#2d4ef8"
                            />
                            <path
                                id="Path_32"
                                data-name="Path 32"
                                d="M0-2.6S14.073.492,38.025,1.8C57.22,2.853,83.641,2.94,109.187-2.6c56.9-12.346,106.474,0,106.474,0V5.414H0Z"
                                transform="translate(1445.036 1086.571)"
                                fill="#fff"
                            />
                        </g>
                    </svg> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 216 22.348"
          >
            <g
              id="layered-waves-haikei_9_"
              data-name="layered-waves-haikei (9)"
              transform="translate(0 -2.652)"
            >
              <path
                id="Path_137"
                data-name="Path 137"
                d="M0,7H3.7a166.222,166.222,0,0,0,18.1-.8C29,5.3,36,3.7,43.2,3a86.915,86.915,0,0,1,21.6.8C72,5,79,7,86.2,6.7c7.1-.4,14.5-3,21.6-3.7,7.2-.7,14.2.7,21.4,1.3a158.1,158.1,0,0,0,21.8.4c7.3-.4,14.7-1,21.8-1a154.121,154.121,0,0,1,21.4,1.6c7.1,1,14.5,2.4,18.1,3L216,9V25H0Z"
                fill="#6a82ff"
              />
              <path
                id="Path_138"
                data-name="Path 138"
                d="M0,7l3.7-.2c3.6-.1,11-.5,18.1-.5A153.821,153.821,0,0,1,43.2,7.7c7.1,1,14.5,2.6,21.6,2.5C72,10,79,8,86.2,7.3c7.1-.6,14.5,0,21.6.5,7.2.5,14.2.9,21.4,1,7.1.2,14.5.2,21.8.7s14.7,1.5,21.8,2a102.133,102.133,0,0,0,21.4-.5,148.9,148.9,0,0,0,18.1-4L216,6V25H0Z"
                fill="#a6a9ff"
              />
              <path
                id="Path_139"
                data-name="Path 139"
                d="M0,12l3.7,1a122.458,122.458,0,0,0,18.1,3.8c7.2.9,14.2.5,21.4.2,7.1-.3,14.5-.7,21.6-.7,7.2,0,14.2.4,21.4-.1,7.1-.5,14.5-1.9,21.6-3a155.726,155.726,0,0,1,21.4-2.4A201.827,201.827,0,0,1,151,12c7.3.7,14.7,1.3,21.8,1.3,7.2,0,14.2-.6,21.4-1,7.1-.3,14.5-.3,18.1-.3H216V25H0Z"
                fill="#d5d3ff"
              />
              <path
                id="Path_140"
                data-name="Path 140"
                d="M0,21l3.7.2c3.6.1,11,.5,18.1.1a173.264,173.264,0,0,0,21.4-2.5c7.1-1.1,14.5-2.5,21.6-2.1C72,17,79,19,86.2,20a91.827,91.827,0,0,0,21.6.3c7.2-.6,14.2-2,21.4-2.5,7.1-.5,14.5-.1,21.8-.5,7.3-.3,14.7-1.3,21.8-2,7.2-.6,14.2-1,21.4-.1A122.458,122.458,0,0,1,212.3,19l3.7,1v5H0Z"
                fill="#fff"
              />
            </g>
          </svg>

          <nuxt-link
            v-if="$route.fullPath === '/tm/'"
            @click.native="goTop"
            ><h3>{{ temp.title }}</h3></nuxt-link
          >
          <nuxt-link v-else :to="`tm/${temp.path}`" @click.native="goTop"
            ><h3>{{ temp.title }}</h3></nuxt-link
          >
          <span v-if="temp.type ==='html'" class="span-html"> HTML <i class="ri-html5-fill"></i></span>
          <span v-if="temp.type ==='nuxtjs'" class="span-nuxtjs"> <img src="../assets/image/nuxtjs.svg" :alt="temp.type"></span>

          <p>{{ temp.des }}</p>

          <div class="tep-info-footer">
            <span :class="temp.btnSale.class"
              >{{ temp.btnSale.value }}
              <span v-if="temp.btnSale.lastValue != ''">{{
                temp.btnSale.lastValue
              }}</span>
            </span>
            <div class="group-lang">
              <span v-if="temp.groupLang.html == true" class="html"
                ><img src="../assets/image/html-5.svg"
              /></span>
              <span v-if="temp.groupLang.css == true" class="css"
                ><img src="../assets/image/css-3.svg"
              /></span>
              <span v-if="temp.groupLang.js == true" class="js"
                ><img src="../assets/image/js.png"
              /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['temp', 'length']
}
</script>
