require('colors');
const inquirer = require('inquirer');

const questions = [{
    type:'list',
    name:'option',
    message:'¿Qué desea hacer?',
    choices:['opt1', 'opt2', 'opt3']
}]

const inquirerOptions = async ()=>{

    console.log('==========================='.green);
    console.log('   Seleccione una opción   '.green);
    console.log('===========================\n'.green);

    const options = await inquirer.prompt(questions);

    return options;

}

module.exports = {
    inquirerOptions
}