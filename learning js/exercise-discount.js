/*
 * Напиши скрит подсчёта суммы покупки со скидкой в зависимости от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */

let totalSpent = 50;
let payment = 50;
let discount = 0;

totalSpent = payment + totalSpent;
// современный метод
// totalSpent += payment;

// 'Бронзовый партнер, скидка 2%'
// 'Серебрянный партнер, скидка 5%'
// 'Золотой партнер, скидка 10%'
// 'У вас еще нет партнерской скидки'

if (totalSpent >= 100 && totalSpent < 1000) {
    console.log('бронзовый партнёр, скидка 2%');
    discount = 0.02;
   
} else if (totalSpent >= 1000 && totalSpent < 5000) {
    console.log('серебрянный партрёр, скидка 5%');
    discount = 0.05;
} else if (totalSpent >= 5000) {
    console.log('золотой партрёр, скидка 10%');
    discount = 0.1;
} else { 
    console.log('не партнёр, скидка 0%');
}

payment -= payment * discount;  // висчитать процент от суммы
// // payment = payment - payment * discount;


console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);
console.log(`Общая сумма потраченая в магазине ${totalSpent}`);


































// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log('Бронзовый партнер, скидка 2%');
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log('Серебрянный партнер, скидка 5%');
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log('Золотой партнер, скидка 10%');
//   discount = 0.1;
// } else {
//   console.log('Не партнёр, скидка 0%');
// }

// payment -= payment * discount;
// // payment = payment - payment * discount;

// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
// );

// totalSpent += payment;

// console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);
