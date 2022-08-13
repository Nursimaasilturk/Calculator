$(document).ready(function () {
  $(".screen--modes__light-dark").click(function () {
    $(".screen--modes__light-dark").toggleClass("active");
    $(".calculator").toggleClass("dark");
  });
});
