<template>
    <div class="div-update">
        <div>
            <h3 class="virgin">v2.1.2</h3>
            <h3 class="update-text">تم التحديث</h3>
            <span class="date">2022/01/29</span>
            <div class="changes-update">
                <h3>التغييرات :</h3>
                <ul>
                    <li>إضافة بوت للموقع "روبو".</li>
                </ul>
            </div>
            <div class="back-ground-updates"></div>
            <a class="update-a-but">هل أنت مستعد؟</a>
            <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_wXxy5o.json"
                background="transparent"
                speed="1"
                loop
                autoplay
            ></lottie-player>
        </div>
    </div>
</template>

<script>
import $ from "jquery/dist/jquery.min.js";

export default {
  mounted () {
        localStorage.removeItem("update-2.1.1");
    if (localStorage.getItem("update-2.1.2") === "false") {
        $(".div-update").remove();
    } else {
      $(".div-update").addClass("div-update-viwo");
    $(".update-a-but").on("click", function () {
      localStorage.setItem("update-2.1.2", "false");

      window.location.reload()
        setTimeout(function () {
            $(".div-update").remove();
        }, 500);

    });
  }
  }

}
</script>
