const fs = require("fs");
const filepath = "./task.json";

const loadTask = () => {
    try {
        const dataBuffer = fs.readFileSync(filepath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        
        return [];
    }
};


const removeTask=(index)=>{
    const tasks = loadTask();
if(index < 1 || tasks.length < index){
console.log("Envalid  task") 

}
const removedtask=tasks.splice(index-1,1)
saveTask(tasks);
listTasks()
console.log("Removed task:", removedtask[0].task);

}
const saveTask = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filepath, dataJSON);
};

const addTask = (task) => {
    const tasks = loadTask();
    tasks.push({ task });
    saveTask(tasks);
    console.log("task added", task);
};

const listTasks =()=> {
    const tasks = loadTask();
    if (tasks.length === 0) {
        console.log("No tasks found!");
        return;
    }
    tasks.forEach((task, index) => {
        console.log(`(${index + 1}) ${task.task}`);
    });  
  
};

const command=process.argv[2]
const argument=process.argv[3]

if(command ==="add"){
    addTask(argument)
}
else if(command==="list"){
    listTasks()
}
else if(command ==="remove"){
removeTask(parseInt(argument))
}
else
{
console.log("command not found!")
}

