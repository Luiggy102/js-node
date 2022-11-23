//En este desafío vas a recibir un parámetro secreto en la función solution. Debes retornar true si el número secreto es mayor a 5 y false si es menor o igual.

function moreThanFive(number) {
    if (number > 5) {
        return true
    } else { return false }
}

console.log(moreThanFive(5));

// opcion 2
function solution(secreto) { return !(secreto <= 5); }

console.log(solution(9));

console.log(solution(1));
console.log('19');
console.log(solution(19));
