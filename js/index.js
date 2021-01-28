$(function () {
  if ($(window).width() < 576) {
    $("#navbar").removeClass("sticky-top");
    $("#navbar").addClass("fixed-bottom");
    $("#footer").addClass("display-non");
  }
})

$(window).on("resize", function () {
  if ($(window).width() < 576) {
    $("#navbar").removeClass("sticky-top")
    $("#navbar").addClass("fixed-bottom")
    $('#footer').addClass("display-non")
  } else {
    $("#navbar").addClass("sticky-top")
    $("#navbar").removeClass("fixed-bottom")
    $('#footer').removeClass("display-non")
  }
})