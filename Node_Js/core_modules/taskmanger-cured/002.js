const fs=require("fs");

const taskmanager=(TaskData)=>{
    fs.writeFileSync("TaskData.JSON",JSON.stringify(TaskData))
}
module.exports={taskmanager}