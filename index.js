$(".menu").click(function () {
    $("#navbar_list").slideDown("slow", function () {

    });

    $(".firstpage_pic_2").hide("slow", function () {
    });

    $(".menu").addClass("invisible")

    $(".close").addClass("visible")

    $(".first_page").addClass("background_change")


});


$(".close").click(function () {
    $("#navbar_list").slideUp("slow", function () {

    });

    $(".firstpage_pic_2").show("slow", function () {

    });

    $(".menu").removeClass("invisible")

    $(".close").removeClass("visible")

    $(".first_page").removeClass("background_change")

});