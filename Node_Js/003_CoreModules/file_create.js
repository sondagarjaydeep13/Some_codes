const { string } = require('yargs');
const yargs=require('yargs');
const file=require("./file_create_export");

yargs.command({
    command:"addfile",
    builder:{
        addfile:{
            type:string
        }
    },
    handler:function(argv){
        const data={
            addfile:argv.addfile,
        
        }
        file.createfile(data);
    }
     
})
yargs.argv;