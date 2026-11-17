"use strict";

$("#list-nav").on("click", function () {
    $("#list-mobile-div").toggleClass("list-mobile-show");
    $(this).toggleClass("Span-onclick");

    if ($(this).html() === "☰") {
        $(this).html("×");
    } else {
        $(this).html("☰");
    }

})

$(".Language-But").on("click", function () {
    $(".Language").addClass("Language-onclick");
})


$("#cancel").on("click", function () {
    $(".Language").removeClass("Language-onclick");
})

$(window).on("load", function () {
    $("#lod").addClass("onload");
})