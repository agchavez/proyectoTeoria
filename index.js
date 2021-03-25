/*
    ! Modulo Principal 
    * Se encarga de ejecutar el menu de opciones del Programa
*/

// Modulos requeridos
require('colors');

// Modulos de usuario
const { inquirerMenu, pause, leerInput } = require('./helpers/insquired');
const multiplicativo = require('./helpers/multiplicativo');
const aditivo = require('./helpers/aditivo');
const mixto = require('./helpers/mixto');


const main = async () => {
/*
    ! Metodo main
    * Metodo que se encarga de ejecutar la logica del menu 
*/
    let rep;
    
    do {
        //Imprimir el menu
        rep = await inquirerMenu();
        

        switch(rep){
            case 1:
                /*
                    ! Aditivo
                */
                var a = await leerInput(`Ingrese el valor de la variable ${'a'.green}: `);
                var c = await leerInput(`Ingrese el valor de la variable ${'c'.green}: `);
                var g = await leerInput(`Ingrese el valor de la variable ${'g'.green}: `);
                var xo = await leerInput(`Ingrese el valor de la variable ${'Xo'.green}: `);
                var ca = await leerInput(`Ingrese la cantidad de numeros que desea generar: `);
                const arr = aditivo(parseInt(xo),parseInt(a),parseInt(g),parseInt(c),parseInt(ca));
                break;

            case 2:
                /*
                    ! Multiplicativo
                 */
                var a = await leerInput(`Ingrese el valor de la variable ${'a'.green}: `);
                var g = await leerInput(`Ingrese el valor de la variable ${'g'.green}: `);
                var xo = await leerInput(`Ingrese el valor de la variable ${'Xo'.green}: `);
                var ca = await leerInput(`Ingrese la cantidad de numeros que desea generar: `);
                multiplicativo(parseInt(xo),parseInt(a),parseInt(g),parseInt(ca))
                break;

            case 3:
                /*
                    ! Mixto
                */
                var a = await leerInput(`Ingrese el valor de la variable ${'a'.green}: `);
                var c = await leerInput(`Ingrese el valor de la variable ${'c'.green}: `);
                var g = await leerInput(`Ingrese el valor de la variable ${'g'.green}: `);
                var xo = await leerInput(`Ingrese el valor de la variable ${'Xo'.green}: `);
                var ca = await leerInput(`Ingrese la cantidad de numeros que desea generar: `);
                mixto(parseInt(xo),parseInt(a),parseInt(g),parseInt(c),parseInt(ca))
                break;
            
        }

        if(rep !== 0) await pause();
        
    } while (rep !== 0);
    console.clear();
}

// Ejecucion del me
main();