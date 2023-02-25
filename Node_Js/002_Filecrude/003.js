const yargs=require('yargs');
const file=require('./004')
yargs.command({
    command:"add",
    builder:{
        name:{
            type:String
        },
        email:{
            type:String
        }
    },
    handler:function(argv){
        const data={
            name:argv.name,
            email:argv.name

        }
        file.createfile(data);

    }
})
yargs.argv