
const yargs=require("yargs");

const files=require("./006")

yargs.command({
    command :"create",
    builder:{
        number:{
            type:Number
        },
        name:{
            type:String
        },
        email:{
            type:String
        }
    },
    handler:function(argv){
        const data={
            number:argv.number,
            name:argv.name,
            email:argv.email
        }
        files.createfile(data)
    }
})
yargs.argv; 