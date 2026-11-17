<template>
  <div class="col-xl-12 col-md-12 col-xs-12">
    <div data-aos="fade-up" data-aos-once="true" data-aos-duration="3000">
      <div class="dse-chiled-dev">
        <div v-if="des.new == true" class="anmition-free">
          <span class="anmition-span"></span>
        </div>
        <nuxt-link
          v-if="this.$route.fullPath === '/des/'"
          :to="des.path"
          @click.native="goTop"
          ><div class="des-img-back">
            <img
              :src="require(`@/assets/image/${des.src}`)"
              :alt="des.title"
            /></div
        ></nuxt-link>
        <nuxt-link v-else :to="`des/${des.path}`" @click.native="goTop"
          ><div class="des-img-back">
            <img
              :src="require(`@/assets/image/${des.src}`)"
              :alt="des.title"
            /></div
        ></nuxt-link>

        <nuxt-link
          v-if="this.$route.fullPath === '/des/'"
          :to="des.path"
          @click.native="goTop"
          ><h3>{{ des.title }}</h3></nuxt-link
        >

        <nuxt-link v-else :to="`des/${des.path}`" @click.native="goTop"
          ><h3>{{ des.title }}</h3></nuxt-link
        >
        <span class="span-des">
          Adobe XD <img src="../assets/image/adobe-xd.png" alt="adobe-xd"
        /></span>
        <p>{{ des.des }}</p>
        <div class="des-info-footer">
          <span class="free">{{ des.btnSale.value }}</span>
          <span class="adobe-xd"
            >UI Design <img src="../assets/image/adobe-xd.png" alt="adobe-xd"
          /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['des'],
}
</script>
