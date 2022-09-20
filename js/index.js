// import axios from "axios";

// TASK 1-------------------------

// const url = "https://catfact.ninja/fact";
// const form = document.forms[0];
// const submitButton = document.querySelector(".search-button");
// const renderBoxEl = document.querySelector(".render-search");

// const search = form.elements.text;

// form.addEventListener("input", onInputForm);
// submitButton.addEventListener("click", onSubmitForm);

// function onInputForm(evt) {
//   console.log(evt.target.value);
//   return evt.target.value;
// }

// let number = 0;

// function onSubmitForm(e) {
//   e.preventDefault();
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((render) => {
//       number += 1;
//       console.log(render);
//       const renderInfo = `<p>${number}. ${render.fact}</p>`;
//       renderBoxEl.insertAdjacentHTML("afterbegin", renderInfo);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// function render(value) {}

// task 2--------------------

// const URL = `https://api.agify.io`;
// const form = document.querySelector(".user-form");
// const searchButton = document.querySelector(".search-button");
// const renderBoxEl = document.querySelector(".render-search");

// const searchEl = form.elements.text;
// console.log(searchEl);

// form.addEventListener("submit", onSubmitButton);

// console.log(searchEl);
// function onSubmitButton(event) {
//   event.preventDefault();
//   const inputName = searchEl.value.trim();
//   if (inputName === "") {
//     alert("put teh name");
//     return;
//   }

//   fetch(`${URL}?name=${inputName}`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((render) => {
//       const renderEl = `<p>имя ${inputName}, age:${render.age}</p>`;
//       renderBoxEl.insertAdjacentHTML("beforeend", renderEl);
//     })
//     .catch((e) => {
//       console.error(e);
//     });
// }

// ----------- copy object

// const refs = {
//   url: "https://api.agify.io",
//   form: `document.querySelector(".user-form")`,
//   searchButton: `document.querySelector(".search-button")`,
//   renderBoxEl: `document.querySelector(".render-search")`,
// };

// // 1.
// const copyObj1 = JSON.parse(JSON.stringify(refs));

// // 2
// const copyObj2 = { ...refs };

// // 3
// const copyObj3 = Object.assign({}, refs);

// // 4 for....in
// // refs.assign;
// console.log(copyObj3);

// =================================== 1 ==========================================
// // Реалізуйте функціонал отримання даних з API по кліку на кнопку "BUTTON" і виведення їх
// // на сторінку при кожному кліку по кнопці. Кожен факт має мати свій порядковий номер.
// // https://catfact.ninja/
// =================================== 2 ==========================================
// // Реалізуйте функціонал пошуку даних по юзеру з API при сабміті форми і виведення їх на сторінку
// // https://agify.io/
// =================================== 3 ==========================================
// // Реалізуйте функціонал створення зображень при клікові на кнопку BUTTON
// // https://dog.ceo/dog-api/
// =================================== 4 ==========================================
// // Отримати дані рандомного юзера і вивести їх на сторінку
// // https://randomuser.me/api/
// =================================== 5 ==========================================
// // Отримати дані з API і вивести їх на сторінку
// // https://pokeapi.co/api/v2/pokemon
// // 1. Вивести список покемонів (20шт) на сторінку
// // 2. Створити розмітку картки покемона
// // 3. При клікові по картці покемона - відкривати модалку з даними по покемону на якого ми клікнули
