/*functions to show and hide number of products column*/

function show() {

  document.getElementById("customTableHeading").classList.remove("hidden");
  document.getElementById("p").innerHTML = "Voucher amount: <input type='number' id='voucherInput' class='inputField3'> €/￡";

  for (var i = 0; i < document.querySelectorAll("input.inputField").length; i++) {
    document.querySelectorAll("input.inputField2")[i].classList.remove("hidden");
  }

    var resetValue = "";
    document.getElementById("voucherInput").value = "";

    for (var i = 0; i < document.querySelectorAll("input.inputField").length; i++) {
      document.querySelectorAll("output.outputField")[i].innerHTML = "";
      document.querySelectorAll("input.inputField")[i].value = resetValue;
    }
    for (var i = 0; i < document.querySelectorAll("input.inputField").length; i++) {
      document.querySelectorAll("input.inputField2")[i].value = 1;
    }

}

function hide() {

  document.getElementById("customTableHeading").classList.add("hidden");
  document.getElementById("p").innerHTML = "Voucher amount: <input type='number' id='voucherInput' class='inputField3'> %";

  for (var i = 0; i < document.querySelectorAll("input.inputField").length; i++) {
    document.querySelectorAll("input.inputField2")[i].classList.add("hidden");
  }

  var resetValue = "";
  document.getElementById("voucherInput").value = "";

  for (var i = 0; i < document.querySelectorAll("input.inputField").length; i++) {
    document.querySelectorAll("output.outputField")[i].innerHTML = "";
    document.querySelectorAll("input.inputField")[i].value = resetValue;
  }

  for (var i = 0; i < document.querySelectorAll("input.inputField").length; i++) {
    document.querySelectorAll("input.inputField2")[i].value = 1;
  }

}

/* this function is activated when cliked on the calculate button */
function calc() {
  //assigns var to the radio buttons
  var rd1 = document.getElementById("rd1");
  var rd2 = document.getElementById("rd2");
  //if percentage is on yes radio button then it does the following:

  if (rd1.checked == true) {
    //calculates percentage of each input and puts the result in html of output field, loops trough all the elements with inputField and outputField class
    for (var i = 0; i < document.querySelectorAll("input.inputField").length; i++) {
      var c = ((document.querySelectorAll("input.inputField")[i].value) / 100) * document.getElementById("voucherInput").value;
      if (c > 0) {
        document.querySelectorAll("output.outputField")[i].innerHTML = +c.toFixed(2);
        //gives an empty output field if input is 0
      } else if (c == 0) {
        document.querySelectorAll("output.outputField")[i].innerHTML = "";
      }
    }
    //if percentage is on no radio button then it does the following:
  } else if (rd2.checked == true) {

    //loops trough all the values in the inputField classes and pushed them in an array called numbersPurchasePrice
    var numbersPurchasePrice = [];
    for (var i = 0; i < document.querySelectorAll("input.inputField").length; i++) {
      numbersPurchasePrice.push(document.querySelectorAll("input.inputField")[i].value);
    }

    var numberOfProducts = [];
    for (var i = 0; i < document.querySelectorAll("input.inputField2").length; i++) {
      numberOfProducts.push(document.querySelectorAll("input.inputField2")[i].value);
    }

    var multipliedArray = [];

    function multiplyArrays() {

      for (var i = 0; i < document.querySelectorAll("input.inputField").length; i++) {
        var j = Number(numbersPurchasePrice[i]) * Number(numberOfProducts[i]);
        multipliedArray.push(j);
      }
    }

    multiplyArrays();

    //calculates the sum of all the values in the array numbersPurchasePrice
    var totalPP = 0;
    for (var i = 0; i < multipliedArray.length; i++) {
      totalPP += Number(multipliedArray[i])
    }
    //calculates percentage of each input and puts the result in html of output field, loops trough all the elements with inputField and outputField class, each output is based on the proportional distribution calculated with the sum
    for (var i = 0; i < document.querySelectorAll("input.inputField").length; i++) {
      var c = (document.getElementById("voucherInput").value / 100) * ((document.querySelectorAll("input.inputField")[i].value / totalPP) * 100);
      if (c > 0) {
        document.querySelectorAll("output.outputField")[i].innerHTML = +c.toFixed(2);
        //gives an empty output field if input is 0
      } else if (c == 0) {
        document.querySelectorAll("output.outputField")[i].innerHTML = "";
      }
    }
  }
}

/* this function is activated when cliked on the reset button */
function reset() {

  var resetValue = "";
  document.getElementById("voucherInput").value = "";

  for (var i = 0; i < document.querySelectorAll("input.inputField").length; i++) {
    document.querySelectorAll("output.outputField")[i].innerHTML = "";
    document.querySelectorAll("input.inputField")[i].value = resetValue;
  }

  for (var i = 0; i < document.querySelectorAll("input.inputField").length; i++) {
    document.querySelectorAll("input.inputField2")[i].value = 1;
  }

}
