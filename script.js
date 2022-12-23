window.onload = ageValidation;
let age;
let city;
let sport;
let sportAdd;

function ageValidation() {
  age = prompt("Введіть ваш вік:");
  if (age === null) {
    alert("Шкода що не захотіли ввести вік.");
    return;
  } else if (isNaN(age)) {
    alert("Тут тільки цифри");
    return;
  } else {
    cityFunc();
  }
}
function cityFunc() {
  city = prompt("Введіть ваше місто");
  if (city === null) {
    alert("Шкода, що не захотіли ввести місто.");
    return;
  } else if (city == "Kyiv" || city == "London" || city == "Washington") {
    capFunc();
  } else {
    nonCapFunc();
  }
}
function capFunc() {
  alert("Вам " + age + " років та ви живете у столиці");
  sportFunc();
}
function nonCapFunc() {
  alert("Вам " + age + " років та ви живете у " + city);
  sportFunc();
}

function sportFunc() {
  sport = prompt("Який спорт тобі подобається?");
  if (sport === null) {
    alert("Шкода що не захотіли ввести спорт.");
    return;
  } else if (sport == "баскетбол") {
    sportAdd = confirm("Мрієш бути як Джордан?");
  } else if (sport == "футбол") {
    sportAdd = confirm("Мрієш бути як Марадонна?");
  } else if (sport == "плавання") {
    sportAdd = confirm("Мрієш бути як Фелпс?");
  }

  if (sportAdd) {
    alert(
      "Круто.Все вийде.Тим паче ти живеш у " + city + " тобі " + age + " років"
    );
  } else {
    alert("Ну ладно");
    return;
  }
}
