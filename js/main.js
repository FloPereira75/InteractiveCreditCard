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

inputCardName.addEventListener("input", (e) => {
  console.log(e.target.value);
  cardName.textContent = e.target.value;
});

inputCardNumber.addEventListener("input", (e) => {
  cardNumber.textContent = e.target.value;
});

inputCardMonth.addEventListener("input", (e) => {
  cardMonth.textContent = e.target.value;
});

inputCardYear.addEventListener("input", (e) => {
  cardYear.textContent = e.target.value;
});

inputCardCvc.addEventListener("input", (e) => {
  cardCvc.textContent = e.target.value;
});

formDiv.addEventListener("submit", (e) => {
  console.log("OK OK");
  e.preventDefault();
  formDiv.style.display = "none";
  resultDiv.style.display = "flex";
});
