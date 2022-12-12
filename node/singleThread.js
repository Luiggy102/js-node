console.log('primer proceso');

let i = 0;

setInterval(() => {
    console.log(i);
    i++;

    //if (i === 5) {
        //console.log('forzamos error');
        //let a = 3 + z;
    //}
}, 1000); // cada segundo

// se ejecta igual 
console.log('segundo proceso');
