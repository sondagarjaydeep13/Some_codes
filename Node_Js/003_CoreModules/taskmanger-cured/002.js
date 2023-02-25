const fs=require("fs");

const taskmanager=(TaskData)=>{
    fs.writeFileSync("TaskData.JSON",JSON.stringify(TaskData))
}

const viewfile=()=>{
    const view=viewdata();
    console.log(view);
}

const viewdata=()=>{
  try{
    const data=fs.readFileSync("TaskData.json","utf-8")
    if(data){
        return JSON.parse(data);
    }else{
        return [1];
    }
  }catch(err){
    return[2];
  }
}
module.exports={taskmanager,viewfile}