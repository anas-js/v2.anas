<template>
      <div v-if="loading" class="loading">
        <div class="lod">
      <span
        >
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          width="268"
          height="157.99"
          viewBox="0 0 268 157.99"
        >
          <g
            id="Group_9"
            data-name="Group 9"
            transform="translate(-940.956 -3525.008)"
          >
            <path
              id="Path_134"
              data-name="Path 134"
              d="M784.978,518c-75.14,0-134-13.617-134-31,0-10.422,20.856-19.721,57.22-25.511a1,1,0,0,1,.314,1.975c-34.254,5.455-55.534,14.474-55.534,23.536,0,15.72,60.448,29,132,29s132-13.28,132-29c0-9.1-21.416-18.141-55.89-23.593a1,1,0,0,1,.313-1.976c36.591,5.787,57.577,15.106,57.577,25.568C918.978,504.383,860.118,518,784.978,518Z"
              transform="translate(289.978 3120.998)"
              fill="#3f3d56"
            />
            <path
              id="Path_135"
              data-name="Path 135"
              d="M718.5,523.838a76.983,76.983,0,0,0,133.15-.336,1212,1212,0,0,1-133.15.336Z"
              transform="translate(289.978 3120.998)"
              fill="#3f3d56"
            />
            <path
              id="Path_136"
              data-name="Path 136"
              d="M859.02,502.123a77,77,0,1,0-147.857.8,572.235,572.235,0,0,0,147.857-.8Z"
              transform="translate(289.978 3120.998)"
              fill="#3f3d56"
            />
            <circle
              id="Ellipse_90"
              data-name="Ellipse 90"
              cx="9"
              cy="9"
              r="9"
              transform="translate(1081.957 3555.998)"
              fill="#6a82ff"
            />
            <circle
              id="Ellipse_91"
              data-name="Ellipse 91"
              cx="9"
              cy="9"
              r="9"
              transform="translate(1065.957 3654.998)"
              fill="#6a82ff"
            />
            <circle
              id="Ellipse_92"
              data-name="Ellipse 92"
              cx="15"
              cy="15"
              r="15"
              transform="translate(1030.957 3580.998)"
              fill="#6a82ff"
            />
          </g>
        </svg> -->
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 322 377">
  <g id="Group_5" data-name="Group 5" transform="translate(-323 -365)">
    <rect id="Rectangle_1" data-name="Rectangle 1" width="91" height="322" transform="translate(554 420)" fill="#6981ff"/>
    <rect id="Rectangle_8" data-name="Rectangle 8" width="322" height="91" transform="translate(323 420)" fill="#6981ff"/>
    <path id="Path1" data-name="Path 1" d="M0,0H283V91H0Z" fill="#3f3d56"/>
  </g>
</svg>



      </span>
    </div>
    </div>
</template>

<script>
 import $ from 'jquery/dist/jquery.min.js'
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
       this.loading = true
      },
      finish() {
            setTimeout(function () {
              $(".loading").addClass("load");
        setTimeout(function () {
          this.loading = false
        }, 500);
    }, 200);

      }
    }
  }
</script>
