require('colors');
const aditivo = require('./helpers/aditivo');
const {inquirerMenu,
    pause,
    leerInput} = require('./helpers/insquired');
const main = async()=> {
    let rep;
    
    do {
        //Imprimir el menu
        rep = await inquirerMenu();
        

        switch(rep){
            case 1:
                //Crear tarea
                const a = await leerInput(`Ingrese el valor de la variable ${'a'.green}: `);
                const c = await leerInput(`Ingrese el valor de la variable ${'c'.green}: `);
                const g = await leerInput(`Ingrese el valor de la variable ${'g'.green}: `);
                const xo = await leerInput(`Ingrese el valor de la variable ${'Xo'.green}: `);
                const ca = await leerInput(`Ingrese la cantidad de numeros que desea generar: `);
                const arr = aditivo(parseInt(xo),parseInt(a),parseInt(g),parseInt(c),parseInt(ca));
                break;
            case 2:
                
                break;
            case 3:
                
                break;
            
        }
        if(rep !== 0) await pause();
        
    } while (rep !== 0);
    console.clear();

}

main();