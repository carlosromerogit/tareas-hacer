const { inquirerOptions, readInput, deleteTask, confirmDialog, checkList } = require("./helpers/inquirer");
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
                case "5":
                     const ids = await checkList(tasks.listArray);
                     tasks.toggleCompleted(ids);
                    break;
                case "6":
                    const id = await deleteTask(tasks.listArray);
                    const ok = await confirmDialog("¿Estás seguro que desea borrar esta tarea?");
                    if(ok){
                        tasks.deleteTask(id);
                        console.log('\nTarea borrada correctamente');
                    }
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