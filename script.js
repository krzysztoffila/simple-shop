"use strict";
// Email Validation
const btnNewsletter = document.querySelector(".newsletter__button");
const inputEmail = document.querySelector(".newsletter_email-input");
const chekboxEmail = document.querySelector(".newsletter__checkbox--check");

btnNewsletter.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = inputEmail.value.trim();
  if (emailValue != "" && chekboxEmail.checked) {
    // DODAĆ REGEX MAILA
    alert(
      `Zapisałeś się do newslettera - sprawdź skrzynkę na ${emailValue} i odbierz 5% rabatu!`
    );
  } else {
    alert("Uzupełnij pole e-mail i zaakceptuj warunki!");
    inputEmail.value = "";
  }
});
