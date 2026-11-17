<template>
    <div class="FooterApp">
        <footer>
            <div class="footer-top">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1920 326"
                >
                    <g
                        id="layered-waves-haikei_7_"
                        data-name="layered-waves-haikei (7)"
                        transform="translate(0 -655.197)"
                    >
                        <path
                            id="Path_54"
                            data-name="Path 54"
                            d="M0,766.06l45.7-11.867c45.6-11.867,137-35.6,228.5-38.663s183.1,14.547,274.6,5.512c91.5-9.111,182.9-44.788,274.2-58.569s182.7-5.666,274,5.206,182.7,24.346,274.2,39.582c91.5,15.159,183.1,32,274.6,29.323S1828.7,711.7,1874.3,700.6l45.7-11.1V981.2H0Z"
                            transform="translate(0 0)"
                            fill="#fff"
                        />
                        <path
                            id="Path_55"
                            data-name="Path 55"
                            d="M0,828.655l45.7-9.187c45.6-9.187,137-27.562,228.5-33.687s183.1,0,274.6,8.651c91.5,8.728,182.9,19.906,274.2,8.345,91.3-11.637,182.7-46.09,274-52.062,91.3-6.048,182.7,16.461,274.2,18.834,91.5,2.45,183.1-15.159,274.6-26.26s182.9-15.7,228.5-17.992L1920,723V997.089H0Z"
                            transform="translate(0 -15.892)"
                            fill="#fcfcfc"
                        />
                        <path
                            id="Path_56"
                            data-name="Path 56"
                            d="M0,867.407l45.7,2.68c45.6,2.68,137,8.039,228.5,6.737,91.5-1.225,183.1-9.187,274.6-22.279C640.3,841.377,731.7,823,823,829.356c91.3,6.431,182.7,37.515,274,46.626,91.3,9.034,182.7-3.981,274.2-17.992,91.5-14.087,183.1-29.093,274.6-31.39s182.9,8.115,228.5,13.4L1920,845.2V1021.3H0Z"
                            transform="translate(0 -40.098)"
                            fill="#f9f9f9"
                        />
                        <path
                            id="Path_57"
                            data-name="Path 57"
                            d="M0,930.921l45.7-.153c45.6-.077,137-.383,228.5-5.742s183.1-15.772,274.6-25.265c91.5-9.417,182.9-17.839,274.2-13.781,91.3,4.134,182.7,20.672,274,31.314,91.3,10.565,182.7,15.159,274.2,20.289,91.5,5.053,183.1,10.719,274.6,9.8s182.9-8.269,228.5-12.02l45.7-3.675v103.358H0Z"
                            transform="translate(0 -53.848)"
                            fill="#f6f6f6"
                        />
                        <path
                            id="Path_58"
                            data-name="Path 58"
                            d="M0,1009.952l45.7-5.972c45.6-6.048,137-17.992,228.5-18.758s183.1,9.647,274.6,13.628,182.9,1.378,274.2-1c91.3-2.45,182.7-4.747,274-3.981s182.7,4.594,274.2,2.45c91.5-2.22,183.1-10.336,274.6-18.911s182.9-17.456,228.5-21.973L1920,951v99.53H0Z"
                            transform="translate(0 -69.333)"
                            fill="#f3f3f3"
                        />
                    </g>
                </svg>

                <!-- <lottie-player
                    src="https://assets6.lottiefiles.com/packages/lf20_1iNByG.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                ></lottie-player> -->
            </div>
            <div class="footer-text">
                <div class="container footer-chiled">
                    <div class="row">
                        <div class="col-xl-4 col-md-4 col-xs-12 footer-dev">
                            <div data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                                <h4>الروابط</h4>
                                <ul>
                                    <li>
                                        <nuxt-link
                                            to="/"
                                            @click.native="goTop"
                                            >الرئيسية</nuxt-link
                                        >
                                    </li>
                                    <li>
                                        <nuxt-link
                                            to="/tm"
                                            @click.native="goTop"
                                            >القوالب</nuxt-link
                                        >
                                    </li>
                                    <li>
                                        <nuxt-link
                                            to="/des"
                                            @click.native="goTop"
                                            >التصاميم</nuxt-link
                                        >
                                    </li>
                                    <li>
                                        <nuxt-link
                                            to="/art"
                                            @click.native="goTop"
                                            >المقالات</nuxt-link
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 col-xs-12 footer-dev">
                            <div data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                                <h4>صفحات مهمة</h4>
                                <ul>
                                    <li>
                                        <nuxt-link
                                            to="/page/site-credits"
                                            @click.native="goTop"
                                            >اعتمادات الموقع</nuxt-link
                                        >
                                    </li>
                                    <li>
                                        <nuxt-link
                                            to="/page/privacy-policy"
                                            @click.native="goTop"
                                            >سياسة الخصوصية</nuxt-link
                                        >
                                    </li>
                                    <li>
                                        <nuxt-link
                                            to="/page/updates"
                                            @click.native="goTop"
                                            >التحديثات</nuxt-link
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            class="
                                col-xl-4 col-md-4 col-sm-12 col-xs-12
                                footer-dev
                            "
                        >
                            <div data-aos="fade-up" data-aos-duration="3000" data-aos-once="true">
                                <h4>تابعني</h4>
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            target="_blank"
                                            >انستغرام</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            target="_blank"
                                            >تويتر</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            target="_blank"
                                            >يوتيوب</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row copy-children">
                        <div class="col-xl-12 col-md-12 col-xs-12">
                            <div class="div-copy">
                                <p>
                                    جميع الحقوق محفوظة &#169; {{new Date().getFullYear()}} NONE
                                    <nuxt-link
                                        to="/page/updates"
                                        @click.native="goTop"
                                        >2.1.2</nuxt-link
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>


