require('colors');

const showMenu = async ()=>{

    console.log('==========================='.green);
    console.log('   Seleccione una opción   '.green);
    console.log('===========================\n'.green);

    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"7.".green} Salir\n`);

    const readline = require('readline').Interface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Seleccione la opción deseada: ', (option)=>{
        console.log({option})
        readline.close();
    });
}

const pauseOption = ()=>{
    const readline = require('readline').Interface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`\nPresione ${"ENTER".green} para continuar`, ()=>{
        readline.close();
    });
}

module.exports = {
    showMenu,
    pauseOption
}