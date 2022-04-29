const { inquirerOptions, readInput } = require("./helpers/inquirer");
const { pauseOption } = require("./helpers/inquirer");
const Tasks = require("./models/tasks");

console.clear();

const main = async () =>{
    
    const tasks = new Tasks();
    let option = "";
    
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
        
    } while (option !== "0");

}

main();