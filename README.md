# Konfiguracja

```
npm install
sass --watch style.scss style.css

```

# Lista uwag dotyczących projektu

## Ogólne uwagi

- W niektórych przypadkach atrybuty tekstu oraz odstępy się nie zgadzają.

## Konfiguracja

- Problem z konfiguracją SASS - chciałem umieścić `map.css` oraz `.css` w osobnym folderze.

## Slider

- Problem z nadaniem klas flexbox na SLIDER - rozwiązanie za pomocą `.slick-slide`.
- Problemy ze stylizacją strzałek - są niewidoczne na białym tle.

## Nagłówek

- Problem z pobraniem ikonki lupy oraz listy menu (trzy paski).
- Czy miało być rozwijane menu?

## Newsletter

- Walidacja checkboxa - Na mniejszej rozdzielczości znika, więc zastosowałem sprawdzenie szerokości ekranu.
  - Na mniejszej rozdzielczości nie jest wymagane zaznaczenie checkboxa.

## Zadania

- [CATEGORIES] Zamiast `<img>` można zastosowałem `<picture><source media>`. Zazwyczaj używam samego img. -[Dokumentacja](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)

- [CATEGORIES] Nigdy nie robiłem lazy loading - problem z długim ładowaniem obrazków na szybkim łączu internetowym.

  - [Link do kursu na Udemy](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648999)

- [NEWSLETTER] Checkbox border - `border: none` nie działa na wszystkich przeglądarkach.
  - [Rozwiązanie na Stack Overflow](https://stackoverflow.com/questions/3544690/how-do-i-remove-checkbox-border)
