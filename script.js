"use strict";
// Email Validation
const btnNewsletter = document.querySelector(".newsletter__input--button");
const inputEmail = document.querySelector(".newsletter_email-input");
const chekboxEmail = document.querySelector(".newsletter__checkbox--check");
const slider = document.querySelector(".slider");
const slide_1 = document.querySelector(".slide_1");

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

// Fetch images
async function getImages() {
  const url = "https://picsum.photos/v2/list?page=2&limit=10";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

(async () => {
  const images = await getImages();
  const firstImage = images[0];
  document.querySelector(
    ".slider"
  ).style.backgroundImage = `url(${firstImage.download_url})`;
})();
