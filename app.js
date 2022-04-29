const { inquirerOptions } = require("./helpers/inquirer");
const { pauseOption } = require("./helpers/menu");

console.clear();

const main = async () =>{
    
    let option = "";
    
    do {
        
        option = await inquirerOptions();
        
        if(option !== "0") {
            await pauseOption();
        }
        
        console.clear();
        
    } while (option !== "0");

}

main();