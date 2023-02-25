const yargs=require("yargs");
const file=require("./002");

yargs.command({
    command:"task",
    builder:{
        TaskName:{
            type:String
        },
        TaskNumber:{
            type:Number
        },
        TaskDate:{
            type:Number
        }
    },
    handler:function(argv){
        const TaskData={
            TaskName:argv.TaskName,
            TaskNumber:argv.TaskNumber,
            TaskDate:argv.TaskDate
        }
        file.taskmanager(TaskData)
    }
})

yargs.command({
    command:"view",
    handler:function(argv){
        file.viewfile();  
    }
})
yargs.argv