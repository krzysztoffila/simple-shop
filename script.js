"use strict";

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

function getImages() {
  const url = "https://picsum.photos/v2/list?page=1&limit=8";
  return fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(`Response status: ${response.status}`);
      return response.json();
    })
    .catch((error) => {
      console.log(error.message);
      return [];
    });
}

const categoryPictures = Array.from(
  document.querySelectorAll(".category__photo picture img")
);
const categorySource = Array.from(
  document.querySelectorAll(".category__photo picture source")
);

getImages().then((images) => {
  for (let i = 0; i < images.length && i < categoryPictures.length; i++) {
    categoryPictures[i].src =
      categoryPictures[i].dataset.src =
      categorySource[i].srcset =
      categorySource[i].data =
        images[i].download_url;
  }
});

const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "-600px",
});
imgTargets.forEach((img) => imgObserver.observe(img));
