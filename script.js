const operation = document.getElementById("operation");
var historyText = document.getElementById("history-text");
var firstCalc = document.getElementById("first-eva");
var secondCalc = document.getElementById("second-eva");
var thirdCalc = document.getElementById("third-eva");
var calcArray = new Array();
var resultArray = new Array();
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
  // ---> Percentage Calculate
  $("#perc").click(function () {});
  // ---> Invert values of input to numbers and calculate
  $("#equal").click(function () {
    if (
      operation.value === "0" ||
      operation.value === " " ||
      operation.value === null
    ) {
      swal({
        title: "Stop!",
        text: "Please,enter the values for evalution",
        icon: "error",
        button: "I got it ;))",
      });
    } else {
      historyText.value = operation.value;
      operation.value = eval(operation.value);
      if (calcArray.length <= 2 && resultArray.length <= 2) {
        calcArray.push(historyText.value);
        resultArray.push(operation.value);
      } else {
        calcArray.shift();
        calcArray.push(historyText.value);
        resultArray.shift();
        resultArray.push(operation.value);
      }
    }
  });
  // ---> History of calculation
  $(".screen---modes__history-icon .history-icon").click(function () {
    $(".history-box").toggleClass("active");
    firstCalc.innerHTML = calcArray[0] + "  -->  " + resultArray[0];
    secondCalc.innerHTML = calcArray[1] + "  -->  " + resultArray[1];
    thirdCalc.innerHTML = calcArray[2] + "  -->  " + resultArray[2];
  });
  // ---> Keyboard Calculation
});
