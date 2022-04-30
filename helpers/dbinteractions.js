const fs = require('fs');

const saveDB = (data)=>{
    fs.writeFileSync('./db/data.json', JSON.stringify(data));
}

const readDB = ()=>{
    if(!fs.existsSync('./db/data.json')){
        return null;
    }
    const data = JSON.parse(fs.readFileSync('./db/data.json', {encoding: 'utf-8'}));

    return data;
}

module.exports = {
    saveDB,
    readDB
}