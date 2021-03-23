const inquirer = require('inquirer');
require('colors');
const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: 'Seleccione una opcion',
        choices: [
            {
                value: 1,
                name: `${ '1.'.green } Metodo congruencial aditivo`
            },
            {
                value: 2,
                name: `${ '2.'.green } Metodo congruencial multiplicativo`
            },
            {
                value: 3,
                name: `${ '3.'.green } Metodo congruencial mixto`
            },
            {
                value: 0,
                name: `${ '0.'.green } Salir`
            },
            
        ]
    }
];


const inquirerMenu = async ()=>{
    console.clear();
    console.log("=====================".green);
    console.log("Menu principal");
    console.log("=====================\n".green);
    const {option} = await inquirer.prompt(menuOpts);
    return option;
}

const pause = async ()=>{
    const question = [
        {
            type: 'input',
            name: `pause`,
            message: `Presione ${'ENTER'.green} para continuar...`}]

     await inquirer.prompt(question);
}

const leerInput = async(menssage) =>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: menssage,
            validate(value){
                
                if(value.length === 0){
                    return 'Porfavor ingrese un valor';
                }else if(Number.isInteger(value/1) == false || value < 0 ){
                    
                    return 'Valor ingresado no es valido'
                }
                
                return true;
            }
        }
    ];
    

    
    const{desc} = await inquirer.prompt(question);
    return desc;

}

module.exports = {
    inquirerMenu,
    pause,
    leerInput
}