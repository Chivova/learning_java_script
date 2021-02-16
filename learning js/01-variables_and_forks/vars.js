// Переменные

// const - это не константа, в обьявлении переменной через const есть 2 правила:

// 1 - переменная должна сразу быть инициализирована значением (присвоена )

const a = 7;

// 2 -  переменную нельзя перезаписать 

// const x = 7;
// x = 10;

// let - не обязательно долна быть инициализирована и можно перезаписать

let y;

let x = 7;
x = 100;

// 7 переопределиться на 100


// Логирование с методом console.log()
// console.log() - вывод результата в консоль

// () - скобки означают вызовов метода(функции).В сами скобки передаеться аргумент

// пример передачи индификатора переменной 

const totalPrice = 550

console.log(totalPrice);

// так же можно передать описание аргумента через запятую(,)

console.log('Цена ', totalPrice);



/*
 * * - Оператор typeof
 */

// Есле нужно в коде проверить тип хранящийся в переменной используют typeof
     
// const type = typeof 'Hello';
// console.log(type); выведет string

// const type = typeof 100;
// console.log(type); выведет number

// const type = typeof true;
// console.log(type); выведет boolean

/*
 * - Как window.alert() блокирует интерпретацию
 */

//  alert() - выводит в браузере модальное окно
