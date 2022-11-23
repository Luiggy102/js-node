// piedra papel tijera

let piedra = false ;
let papel = true;
let tijera = true;

// verdadero > false = false
console.log(papel > piedra);
// false < verdadero = verdadero
console.log(piedra < tijera);


function piedraPapelTijera(jugador) {
    let maquina = piedra;
    // caso empate
    if (jugador === maquina) {
        console.log('empate');
        // caso victoria jugador, papel > piedra
    } else if (jugador === papel) {
        console.log('victoria jugador');
        // caso derrota jugador, tijera < piedra
    } else if (jugador === tijera) {
        console.log('victoria maquina');
    }
}

piedraPapelTijera(piedra)
piedraPapelTijera(papel)
piedraPapelTijera(tijera)

