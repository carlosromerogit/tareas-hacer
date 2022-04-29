const Task = require('./task');

class Tasks {
    constructor(){
        this._list = {};
    }
    get listArray(){
        const listArray = [];
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            listArray.push(task);
        })
        return listArray;
    }
    createTask(description){
        const task = new Task(description);
        this._list[task.id] = task;
    }
}

module.exports = Tasks;