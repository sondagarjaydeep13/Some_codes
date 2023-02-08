

const yargs=require("yargs");

// yargs.command({
//     command:"add",
//     builder:{
//         name:{
//             type:string
//         }
//     },
//     handler:function(value){
//         console.log(argv.name);
//     }

// })
yargs.command({
    command:"remove",
    builder:{
        a:{
            type:number
        }
    },
    handler:function(a){
        console.log(argv.a);
    }
})
yargs.argv