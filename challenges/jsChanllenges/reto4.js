// recibir un array y retornar si el primer elemento es string

let arrayDemo = [2, 'programming', false];
let arrayDemo2 = ['programming', 2, false];

console.log(typeof(arrayDemo[0]));

function solution(secretArray) {
    return typeof(secretArray[0]) === 'string' ? true : false
}

console.log(solution(arrayDemo));
console.log(solution(arrayDemo2));
