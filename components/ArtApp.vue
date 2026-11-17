<template>
    <div class="col-xl-12 col-md-12 col-sm-12 col-xs-12 article-sect">
        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="4000">
            <div v-if="art.new == true" class="anmition-free">
                <span class="anmition-span"></span>
            </div>
            <nuxt-link v-if="this.$route.fullPath === '/art/'" :to="art.path" @click.native="goTop">
                <div class="back-artcle">
                    <img
                        :src="require(`@/assets/image/${art.src}`)"
                        :alt="art.title"
                    />
                </div>
                <h3>{{ art.title }}</h3>
                <span class="artcle-span">مقالة</span>
            </nuxt-link>
                        <nuxt-link v-else :to="`art/${art.path}`" @click.native="goTop">
                <div class="back-artcle">
                    <img
                        :src="require(`@/assets/image/${art.src}`)"
                        :alt="art.title"
                    />
                </div>
                <h3>{{ art.title }}</h3>
                <span class="artcle-span">مقالة</span>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ["art"],
};
</script>
