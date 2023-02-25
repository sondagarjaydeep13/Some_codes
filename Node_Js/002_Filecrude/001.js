const { number, argv } = require('yargs');
const yargs=require('yargs');
yargs.command({
    command:"input_a",
    builder:{
        number:{
            type:number
        }
    },
    handler:function(n){
           console.log(argv.number);
    }  
})
yargs.argv;