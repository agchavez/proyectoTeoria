/*
    ! Modulo multiplicativo
    * Logica para el metodo multiplicativvo
*/ 

// Modulos externos
require('colors');
var Table = require('cli-table');

const multiplicativo = (xo, a, g, cantidad) => {
    /*
        ! Metodo multiplicativo  
    */ 

    // Limpiar la consola
    console.clear();

    // Mostrar mensaje al usuario
    console.log("\n============================".green);
    console.log("Metodo congruencial multiplicativo");
    console.log("==============================\n".green);

    // Cracion de la tabla que se muestra en consola con los resultados
    var table = new Table({
        head: ['n'.green,'Xi'.green, 'a*Xi'.green, '(aXi)%m'.green,'ri'.green]
            , colWidths: [5,30, 30, 20,30]
    });
    const m = Math.pow(2,g);
    const list = [];
    let xi = xo;
    let axic = (xi*a);
    let modm = axic%m;
    let ri = modm/(m-1);
    list.push([0,xi,axic,modm, ri]);
    table.push([0,xi,axic,modm, ri]);

    for (let i = 0; i < cantidad; i++) {
        var repite = false;
         xi = list[i][3];
         axic = (xi*a);
         modm = axic%m;
         ri = modm/(m-1);

         //Comprobar si un numero se repite
         for (let j = 0; j < list.length; j++) {
             if(ri == list[j][4]){
                 table[j][4] = `${list[j][4]}`.red
                 repite = true
             }
         }
         list.push([i+1,xi,axic,modm, ri]);

         if(repite){
            table.push([i+1,xi,axic,modm, `${ri}`.red]);
         }else{
            table.push([i+1,xi,axic,modm, ri]);
         }
         
    }
    
    console.log(table.toString());
}

module.exports = multiplicativo;