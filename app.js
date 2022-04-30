const { inquirerOptions, readInput } = require("./helpers/inquirer");
const { pauseOption } = require("./helpers/inquirer");
const { saveDB, readDB } = require("./helpers/dbinteractions");
const Tasks = require("./models/tasks");

console.clear();

const main = async () =>{

    let option = "";
    
    const tasks = new Tasks();

    const tasksDB = readDB();


    if(tasksDB){
        tasks.loadTask(tasksDB);
    }
    
    do {
        
        option = await inquirerOptions();
        
        if(option !== "0") {

            switch (option) {
                case "1":
                      const description = await readInput('Descripción:');
                      tasks.createTask(description);
                    break;
                case "2":
                        console.log(tasks.listArray);
                    break;
            
            }

            console.log('\n');
            await pauseOption();
        }
        
        console.clear();

        saveDB(tasks.listArray);
        
    } while (option !== "0");

}

main();