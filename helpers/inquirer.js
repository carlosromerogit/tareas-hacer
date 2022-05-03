require('colors');
const inquirer = require('inquirer');

const questions = [{
    type:'list',
    name:'option',
    message:'¿Qué desea hacer?',
    choices:[{
        value:'1',
        name: `${"1.".green} Crear tarea`
    },
    {
        value:'2',
        name: `${"2.".green} Listar tareas`
    },
    {
        value:'3',
        name: `${"3.".green} Listar tareas completas`
    },
    {
        value:'4',
        name: `${"4.".green} Listar tareas pendientes`
    },
    {
        value:'5',
        name: `${"5.".green} Completar tarea(s)`
    },
    {
        value:'6',
        name: `${"6.".green} Borrar tarea`
    },
    {
        value:'0',
        name: `${"0.".green} Salir`
    }]
}]

const inquirerOptions = async ()=>{

    console.log('==========================='.green);
    console.log('   Seleccione una opción   '.white);
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

const deleteTask = async (tasks = [])=>{
    const choices = tasks.map((task, index) =>{
        const id = `${index + 1}.`.green;
        return {
            value: task.id,
            name: `${id} ${task.description}`
        }
    })

    const questions = [
        {
            type:'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ];
    const {id} = await inquirer.prompt(questions);
    return id;
}

const confirmDialog = async (message)=>{

    const question = {
        type:'confirm',
        name:'ok',
        message
    }

     const {ok} = await inquirer.prompt(question);
     return ok;
}

module.exports = {
    inquirerOptions,
    pauseOption,
    readInput,
    deleteTask,
    confirmDialog
}