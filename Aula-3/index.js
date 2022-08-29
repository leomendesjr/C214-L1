const Calculadora = require('./src/operacoes');

let soma = Calculadora.soma(3);
let sub = Calculadora.sub(2);
let mult = Calculadora.mult("multiplicação");
let div = Calculadora.div(2);
let pot = Calculadora.pot(3);

console.log(soma);
console.log(sub);
console.log(mult);
console.log(div);
console.log(pot);
