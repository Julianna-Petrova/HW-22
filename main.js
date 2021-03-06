'use strict';

function getDigit(str) {
  return str.match(/\s\d+\s/gi).map((s) => parseInt(s, 10));
}

const result = getDigit('привет 12 ываыва34 98 3423ыавыа');
console.log(result);


function checkIP(str) {
  const regExp = /(^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))$/ig;
  return regExp.test(str);
}

const result1 = checkIP('127.0т155.10');
const result2 = checkIP('127.0.155.10');

console.log(result1);
console.log(result2);
// ^ - начало строки
// [] - означают диапазон
// 25[0-5] -числа от 250-255
// | - или
// 2[0-4][0-9] - числа от 200-249
// [01]?[0-9] числа от 01 (1 может и не быть, т.к стоит ? и дальше любое число (0-9) может быть 02, 03...) до 19
// \. - экранируем точку
// {3} - квантификатор, говорит что наша скобочная группа должна повториться 3 раза
// (25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]? - повтор той же скобочной группы, только без точки
// $ - конец строки
