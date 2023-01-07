// ejecutar otros procesos en el sistema
const { exec, spawn } = require('child_process');

// acceder a comandos de terminal y ejecutar procesos alternos en node
// stdout = standard out 
// stderr = standard error
exec('node ~/Documents/edu/programming/js/ECMAScipt/scr/es6/4DefaultParams', (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log(stdout);
})

