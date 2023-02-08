const yargs=require('yargs');
const fs=require('fs');

// deleting folder

yargs.command({
    command:"remove",
    builder:{
        remove:{
            type:fs.rmdirSync("firstfolder")
        }
    },
    handler:function(argv){
        console.log("Folder deleted");
    }
})
yargs.argv;