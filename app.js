const { inquirerOptions, readInput, deleteTask } = require("./helpers/inquirer");
const { pauseOption } = require("./helpers/inquirer");
const { saveDB, readDB } = require("./helpers/dbinteractions");
const Tasks = require("./models/tasks");

console.clear();

const main = async () =>{

    let option = "";
    
    const tasks = new Tasks();

    const tasksDB = readDB();

    if(tasksDB){
        tasks.loadTasks(tasksDB);
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
                        console.log("\n");
                        tasks.listedTasks();
                    break;
                case "3":
                        console.log("\n");
                        tasks.completedTasks();
                    break;
                case "4":
                        console.log("\n");
                        tasks.pendingTasks();
                break;
                case "6":
                    const id = await deleteTask(tasks.listArray);
                    console.log({id});
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