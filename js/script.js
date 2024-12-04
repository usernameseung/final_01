var answer_array = [];

$(document).ready(function () {
  // pic_02 클릭 이벤트
  $("#pic_02").on("click", function () {
    // page-1 숨기기
    $(".page-1").css("display", "none");
    // page-2 보이기
    $(".page-2").css("display", "flex");
  });

  $(".door").on("click", function () {
    $(".container").toggleClass("open");
  });

  $("#pic_03").on("click", function () {
    // page-1 숨기기
    $(".page-2").css("display", "none");
    // page-2 보이기
    $(".page-3").css("display", "flex");
  });
});
