const Task = require('./task');
require('colors');

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
    loadTasks(data = []){
        data.forEach( task =>{
            this._list[task.id] = task;
        } )
    }
    listedTasks(){
        this.listArray.forEach((task, index) =>{
            const number = `${index + 1}.`.green;
            const {description, date } = task;
            const status = (date)? "Completado".green : "Pendiente".red;
            console.log(`${number} ${description} :: ${status}`);
        })
    }
    completedTasks(){
        const completedTasks = this.listArray.filter( task =>{
            return task.date !== null;
        });
        completedTasks.forEach((task, index) => {
            const number = `${index + 1}.`.green;
            const {description, date} = task; 
            console.log(`${number} ${description} :: ${"completado".green} en: ${date}`);
            })
    }
    pendingTasks(){
        const pendingTasks = this.listArray.filter( task =>{
            return task.date == null;
        });
        pendingTasks.forEach((task, index) => {
            const number = `${index + 1}.`.green;
            const {description, date} = task;
            const pendingState = (date)? 'desconocido' : 'pendiente'.red;
            console.log(`${number} ${description} :: ${pendingState}`);
            })
        }
    }

module.exports = Tasks;