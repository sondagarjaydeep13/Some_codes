// Here create file using module
const fs=require('fs');
const { argv } = require('process');
const { string } = require('yargs');
const yargs=require('yargs');
yargs.command({
    command:"create-file",
    builder:{
        files:{
            type:string
        }
    },
    handler:function(files){
       fs.writeFileSync('core_modules/first.pdf','this is my first pdf');
       console.log(argv.files);
    }
})
yargs.argv;