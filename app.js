var btnCheck = document.querySelector("#btn-check");
var bill = document.querySelector("#total-bill");
var cashGiven = document.querySelector("#cash-given");
var table = document.querySelector("#table");
const customer = document.querySelector(".customer");
var result = document.querySelector("#result-text");
const returnDiv = document.querySelector(".returnDiv");
const notes = [2000, 500, 100, 50, 20, 10, 5, 1];
let returnArray = [0, 0, 0, 0, 0, 0, 0];



function generateCash() {

    if (btnCheck.innerText === "Next") {
        //if Next, hide the rest of elements
        if (bill.value) {
          customer.classList.remove("hidden"); //after next is clicked, show the textfield
          btnCheck.innerHTML = "Check"; //change the name to Check
        } else {
          result.innerHTML = "Amount of bill cannot be less than 0";
        }


} else if (btnCheck.innerText === "Check") {
    if (bill.value && cashGiven.value) {
      //if the values are present
      const balance = cashGiven.value - bill.value; //difference of cash and bill
      if (balance === 0) {
        returnDiv.classList.add("hidden");
        result.innerText = "There's no money to return"; //customer gave the exact amount
      } else if (balance > 0) {
        //if balance exists
        let remainingAmount = balance;
        for (var i = 0; i < notes.length; i++) {
          returnArray[i] = Number.parseInt(remainingAmount / notes[i]); //generating the number of notes
          remainingAmount -= returnArray[i] * notes[i];
        }
        updateTable(returnArray);
        returnDiv.classList.remove("hidden");
        result.innerHTML=" ";
      } else {
        returnDiv.classList.add("hidden");
        result.innerText = `Cash given by customer is less ${
          bill.value - cashGiven.value
        }`;
      }
    } else {
      result.innerHTML = "Invalid characters entered.";
    }
  }
}

function updateTable(givenArr) {
  tbody = table.tBodies[0];
  for (var i = 0; i < givenArr.length; i++) {
    tbody.rows[i].cells[1].innerText = givenArr[i];
  }
}


btnCheck.addEventListener("click", generateCash);