// create Folder

const yargs=require('yargs');
const fs=require('fs');

yargs.command({
    command:'add',
    builder:{
        add:{
            type:fs.writeFileSync('indexfolder.txt','This is is first file')
        }
    },
    handler:function(argv){
        console.log("Folder is created");
    }
})
yargs.argv;