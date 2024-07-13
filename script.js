"use strict";

// Email Validation
const btnNewsletter = document.querySelector(".newsletter__input--button");
const inputEmail = document.querySelector(".newsletter__email-input");
const chekboxEmail = document.querySelector(".newsletter__checkbox--check");

btnNewsletter.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = inputEmail.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isCheckboxRequired = window.innerWidth > 768;

  if ((emailValue !== "" && chekboxEmail.checked) || !isCheckboxRequired) {
    if (emailRegex.test(emailValue)) {
      alert(
        `Zapisałeś się do newslettera - sprawdź skrzynkę na ${emailValue} i odbierz 5% rabatu!`
      );
    } else {
      alert("Podaj poprawny adres e-mail!");
    }
  } else {
    alert("Uzupełnij pole e-mail i zaakceptuj warunki!");
    inputEmail.value = "";
  }
});

// Fetch images
async function getImages() {
  const url = "https://picsum.photos/v2/list?page=12&limit=10";
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

// Set images to category images
const categoryPictures = Array.from(
  document.querySelectorAll(".category__photo picture source")
);

(async () => {
  const images = await getImages();

  for (let i = 0; i < images.length && i < categoryPictures.length; i++) {
    categoryPictures[i].srcset = images[i].download_url;
  }
})();
