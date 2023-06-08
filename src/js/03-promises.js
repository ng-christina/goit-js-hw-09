
import Notiflix from 'notiflix';
const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const {delay, step,amount} = event.currentTarget;
  let currentDelay = Number(delay.value);
  for (let i = 0; i < amount.value; i+= 1) {
    createPromise(i, currentDelay)
          .then(({ position, delay }) => {
           console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
          })
          .catch(({ position, delay }) => {
            console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          });
        //додаємо до поточної затримки крок збільшення затримки
        currentDelay += Number(step.value);
      }
    e.target.reset();
}

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      //setTimeout для першої затримки delay
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }





//   const form = document.querySelector('.form');
// form.addEventListener('submit', onFormSubmit);
// // Функція, яка на момент сабміту форми
// // викликає функцію createPromise(position, delay) стільки разів, скільки ввели в поле amount.
// // Під час кожного виклику передаємо їй номер промісу(position), що створюється,
// // і затримку, враховуючи першу затримку(delay), введену користувачем, і крок(step).
// function onFormSubmit(e) {
//   e.preventDefault();
//   //відслідковуємо подію, тому можемо отримати доступ до інпутів через їх name
//   const {
//     elements: { amount, delay, step },
//   } = e.currentTarget;
//   //поточна затримка, буде різною на кожній ітерації
//   //приводимо до числа
//   let currentDelay = Number(delay.value);
//   //створюємо цикл для створення кожного окремого проміса
//   for (let i = 1; i <= amount.value; i += 1) {
//     createPromise(i, currentDelay)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(
//           `:white_check_mark: Fulfilled promise ${position} in ${delay}ms`
//         );
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(
//           `:x: Rejected promise ${position} in ${delay}ms`
//         );
//       });
//     //додаємо до поточної затримки крок збільшення затримки
//     currentDelay += Number(step.value);
//   }
//   //чистимо форму
//   e.target.reset();
// }
// // Функція createPromise поверталє один проміс, який виконується або відхиляється через delay часу.
// // Значенням промісу є об'єкт з властивостями position і delay зі значеннями однойменних параметрів.
// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     //setTimeout для першої затримки delay
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }