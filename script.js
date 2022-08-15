const operation = document.getElementById("operation");
const historyText = document.getElementById("history-text");
const firstCalc = document.getElementById("first-eva");
const secondCalc = document.getElementById("second-eva");
const thirdCalc = document.getElementById("third-eva");
const calcArray = new Array();
const resultArray = new Array();
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
  $("#sign").click(function () {
    operation.value = -1 * basicCalculate(operation.value);
  });
  // ---> basic oparation function
  const basicCalculate = function (e) {
    var sign = []; // --> For signs in value
    var calculatedValue = e;
    var withoutSpace = calculatedValue.replace(/\s/g, ""); // --->clean all spaces
    //--> assigning the signs inside the operation to the sign array
    for (i = 0; i < withoutSpace.length - 1; i++) {
      if (withoutSpace[i] === "/") {
        sign.push(withoutSpace[i]);
      } else if (withoutSpace[i] === "*") {
        sign.push(withoutSpace[i]);
      } else if (withoutSpace[i] === "-") {
        sign.push(withoutSpace[i]);
      } else if (withoutSpace[i] === "+") {
        sign.push(withoutSpace[i]);
      } else if (withoutSpace[i] === "%") {
        sign.push(withoutSpace[i]);
      }
    }
    // --> assigning all numbers inside the operation to the array
    const numbers = withoutSpace
      .replaceAll("*", "$")
      .replaceAll("/", "$")
      .replaceAll("+", "$")
      .replaceAll("-", "$")
      .replaceAll("%", "$")
      .split("$");
    //
    const numIndex = sign.length;
    for (i = 0; i < numIndex; i++) {
      //---> Percentage Calculate
      if (sign.includes("%")) {
        var index = sign.indexOf("%"); // place of sign
        var firstNum = Number(numbers[index]); // previous number of sign
        var secondNum = Number(numbers[index + 1]); // next number of sign
        var result = parseInt(firstNum * 0.01 * secondNum); // calculate
        delete numbers[index]; // deleted place to put the result and firstNum is deleted in array
        numbers.splice(index + 1, 1); // secondNum is deleted
        numbers[index] = result; // assign the result to deleted place
        sign.splice(index, 1); // delete the sign from array for the operation to be correct.
      } else if (sign.includes("*")) {
        var index = sign.indexOf("*");
        var firstNum = Number(numbers[index]);
        var secondNum = Number(numbers[index + 1]);
        var result = firstNum * secondNum;
        delete numbers[index];
        numbers.splice(index + 1, 1);
        numbers[index] = result;
        sign.splice(index, 1);
      } else if (sign.includes("/")) {
        var index = sign.indexOf("/");
        var firstNum = Number(numbers[index]);
        var secondNum = Number(numbers[index + 1]);
        var result = parseInt(firstNum / secondNum);
        delete numbers[index];
        numbers.splice(index + 1, 1);
        numbers[index] = result;
        sign.splice(index, 1);
      } else if (sign.includes("+")) {
        var index = sign.indexOf("+");
        var firstNum = Number(numbers[index]);
        var secondNum = Number(numbers[index + 1]);
        var result = firstNum + secondNum;
        delete numbers[index];
        numbers.splice(index + 1, 1);
        numbers[index] = result;
        sign.splice(index, 1);
      } else if (sign.includes("-")) {
        var index = sign.indexOf("-");
        var firstNum = Number(numbers[index]);
        var secondNum = Number(numbers[index + 1]);
        var result = firstNum - secondNum;
        delete numbers[index];
        numbers.splice(index + 1, 1);
        numbers[index] = result;
        sign.splice(index, 1);
      }
    }
    return numbers[0];
  };
  //---> calculate fonc. for calculation
  const calculate = function (e) {
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
      var value = operation.value;
      historyText.value = operation.value;
      operation.value = basicCalculate(value);
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
  };
  // ---> Invert values of input to numbers and calculate
  $("#equal").click(() => calculate());
  // ---> Keyboard Calculation
  $("#operation").keypress(function (e) {
    e.keyCode === 13 && calculate();
  });
  // Checking number and special char in input
  $("#operation").keypress(function (e) {
    if (e.keyCode >= 65 || e.keyCode <= 90) {
      swal({
        title: "Hey Man!",
        text: "Don't write text",
        icon: "warning",
        button: "Oh,sorry!",
      });
    }
  });
  // ---> History of calculation
  $(".screen---modes__history-icon .history-icon").click(function () {
    $(".history-box").toggleClass("active");
    firstCalc.innerHTML = calcArray[0] + "  -->  " + resultArray[0];
    secondCalc.innerHTML = calcArray[1] + "  -->  " + resultArray[1];
    thirdCalc.innerHTML = calcArray[2] + "  -->  " + resultArray[2];
  });
});
