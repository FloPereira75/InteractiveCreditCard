let cardName = document.getElementById("card-name");
let cardNumber = document.getElementById("card-number");
let cardMonth = document.getElementById("card-month");
let cardYear = document.getElementById("card-year");
let cardCvc = document.getElementById("card-cvc");
const inputCardName = document.getElementById("input-card-name");
const inputCardNumber = document.getElementById("input-card-number");
const inputCardMonth = document.getElementById("input-card-month");
const inputCardYear = document.getElementById("input-card-year");
const inputCardCvc = document.getElementById("input-card-cvc");
const formDiv = document.getElementById("form");
const resultDiv = document.getElementById("result");
const subBtn = document.getElementById("sub-btn");
const blankError = document.querySelectorAll(".blank-error");
const formatError = document.querySelectorAll(".format-error");

function setCardName(e) {
  cardName.innerText = format(e.target.value);
}

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value);
}

function setCardMonth(e) {
  cardMonth.innerText = format(e.target.value);
}

function setCardYear(e) {
  cardYear.innerText = format(e.target.value);
}

function setCardCvc(e) {
  cardCvc.innerText = format(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  if (!inputCardName.value) {
    blankError.style.display = "block";
  } else if (!inputCardNumber.value || inputCardNumber.value.length < 16) {
    blankError.style.display = "block";
  } else if (!inputCardMonth.value) {
    blankError.style.display = "block";
  } else if (!inputCardYear.value) {
    blankError.style.display = "block";
  } else if (!inputCardCvc.value) {
    blankError.style.display = "block";
  } else if (
    inputCardName.value &&
    inputCardNumber.value &&
    inputCardMonth.value &&
    inputCardYear.value &&
    inputCardCvc.value &&
    inputCardNumber.value.length == 16
  ) {
    formDiv.style.display = "none";
    resultDiv.style.display = "flex";
  }
}

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

inputCardName.addEventListener("input", setCardName);
inputCardNumber.addEventListener("input", setCardNumber);
inputCardMonth.addEventListener("input", setCardMonth);
inputCardYear.addEventListener("input", setCardYear);
inputCardCvc.addEventListener("input", setCardCvc);
formDiv.addEventListener("submit", handleSubmit);
