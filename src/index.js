import 'babel-polyfill';

console.log(Array.from('aaa'));

const sum = (a, b) => a + b;
let x = sum(1, 2);
let y = sum(2, 2);

console.log(x);
