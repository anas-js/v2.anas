<template>
  <div>
    <LoadingApp />
    <UpdateVN />
    <Nuxt />
  </div>
</template>

<script>
import "@/assets/License.js"
import $ from 'jquery/dist/jquery.min.js'
export default {
  beforeMount() {
    if (localStorage.getItem("dark") === "true") {
      $("body").addClass("dark");
    }
  },
}
</script>
