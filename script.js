const operation = document.getElementById("operation");
$(document).ready(function () {
  // ---> Dark-Light Mode
  $(".screen--modes__light-dark").click(function () {
    $(".screen--modes__light-dark").toggleClass("active");
    $(".calculator").toggleClass("dark");
  });
  // --->Display number on input tag when push the buttons
  $("#one").click(function () {
    operation.value += 1;
  });
  $("#two").click(function () {
    operation.value += 2;
  });
  $("#three").click(function () {
    operation.value += 3;
  });
  $("#four").click(function () {
    operation.value += 4;
  });
  $("#five").click(function () {
    operation.value += 5;
  });
  $("#six").click(function () {
    operation.value += 6;
  });
  $("#seven").click(function () {
    operation.value += 7;
  });
  $("#eight").click(function () {
    operation.value += 8;
  });
  $("#nine").click(function () {
    operation.value += 9;
  });
  $("#zero").click(function () {
    operation.value += 0;
  });
  $("#dot").click(function () {
    operation.value += ".";
  });
  $("#double-zero").click(function () {
    operation.value += "00";
  });
  $("#add").click(function () {
    operation.value += " + ";
  });
  $("#divide").click(function () {
    operation.value += " / ";
  });
  $("#subs").click(function () {
    operation.value += " - ";
  });
  $("#multiple").click(function () {
    operation.value += " * ";
  });
  $("#perc").click(function () {
    operation.value += " % ";
  });
  // ---> Clean the numbers
  $("#ac").click(function () {
    operation.value = null;
  });
  // ---> Change the sign of number
  $("#sign").click(function () {});
  // ---> Invert values of input to numbers
  $("#equal").click(function () {
    if (operation.value === null || 0) {
      alert("Please,enter the number for evaluation!");
    } else {
      operation.value = eval(operation.value);
    }
  });
});
