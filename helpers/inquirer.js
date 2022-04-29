require('colors');
const inquirer = require('inquirer');

const questions = [{
    type:'list',
    name:'option',
    message:'¿Qué desea hacer?',
    choices:[{
        value:'1',
        name: '1. Crear tarea'
    },
    {
        value:'2',
        name: '2. Listar tareas'
    },
    {
        value:'3',
        name: '3. Listar tareas completas'
    },
    {
        value:'4',
        name: '4. Listar tareas pendientes'
    },
    {
        value:'5',
        name: '5. Completar tarea(s)'
    },
    {
        value:'6',
        name: '6. Borrar tarea'
    },
    {
        value:'0',
        name: '0. Salir'
    }]
}]

const inquirerOptions = async ()=>{

    console.log('==========================='.green);
    console.log('   Seleccione una opción   '.green);
    console.log('===========================\n'.green);

    const {option} = await inquirer.prompt(questions);

    return option;

}
const pauseOption = async()=>{

    const question = [
        {
            type:'input',
            name: 'enter',
            message:`Presione ${"ENTER".green} para continuar`
        }
    ];

    await inquirer.prompt(question);

}

const readInput = async (message)=>{
    const question = [{
        type:'input',
        name:'option',
        message,
        validate(value){
            if(value.length === 0){
                return 'Por favor ingrese un valor';
            }
            return true;
        }
    }]
    const {option} = await inquirer.prompt(question);
    return option;
}

module.exports = {
    inquirerOptions,
    pauseOption,
    readInput
}