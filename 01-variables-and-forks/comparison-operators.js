/*
 * Операторы сравнения
 */

// > - больше
// < - меньше
// >= - больше либо равно
// <= - меньше либо равно
// > < - всегда возвращают  true or false

const x = 10 < 5;
// где 10 - операнд, > - оператор, 5 - операнд
console.log(x);

/*
 * Приведение (преобразование) типов к числу
 */
// оператор > <  всегда приводит операнд слева и справа к числу

const y = '10' > 7;
console.log(y);
// результат будет true, так как строка стала числом

const a = true > 7;
console.log(a);
// результат будет false, так как true это 1


/*
 * Операторы равенства (== и ===) и неравества (!= и !==)
 * ✅ «ВСЕГДА ИСПОЛЬЗУЕМ СТРОГОЕ РАВЕНСТВО (===) и НЕРАВЕНСТВО (!==)»
 */
// Если использовать просто равенство(равно) == и неравенство !==(неравно) получаеться что
// числа равны строкам и типу boolean и другим типам, получиться каша
const b = 1 == '1';
console.log(b);
// результат будет true, хотя сравниваеться число с строкой
const c = 1 == true;
console.log(c);
// результат будет true, хотя сравниваеться число с типом boolean

// Это не правильно, поэтому всегда нужно сравнивать через строгое равенство

const d = 1 === '1';
console.log(d);
// результат будет false, так как число с строкой невозможно сравнить
const w = 1 === true;
console.log(w);
// результат будет false, так как число невозможно сравнить с типом boolean

// !!!!!!!!!!!!!!!каждое значение всегда равно самому себе !!!!!!!!!!!!!!!!!
