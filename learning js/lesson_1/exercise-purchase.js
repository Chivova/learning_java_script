/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 * 
 */

let balance = 2000;
const payment = 2000;

// Мое решение:)
// console.log(confirm(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`));

// if (balance >= payment) {
//     balance = balance - payment;
//     console.log(confirm(`«На счету осталось ${balance} кредитов`));
// } else if (balance === true) {
//     console.log(confirm('«Все хорошо, снимаем деньги... Спасибо за покупку!»'));
// } else { 
//     console.log(confirm('«На счету недостаточно средств для проведения операции!»'));
// }

// console.log(confirm('«Операция завершена»'));

// Как решается:
console.log(
  `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`,
);

if (payment <= balance) {  // не надо дополнительных условый вроде else if, так как уже в условии можно поставить <=,
  //   и если баланс меньше то перейти сразу  else
  balance -= payment; // -----> упрощенный вариант
  console.log('Все хорошо, снимаем деньги... Спасибо за покупку!');
  console.log(`На счету осталось ${balance} кредитов`);
} else {
  console.log('На счету недостаточно средств для проведения операции!');
}

console.log('Операция завершена');