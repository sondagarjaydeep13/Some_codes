// using command to create index.txt file

const yargs=require("yargs");
const fs=require("fs");
const path=require("path");
// yargs.command({
//     command:"add",
//     builder:{
//         name:{
//             type:String
//         },
//         number:{
//             type:Number
//         }
//     },
//     handler:function(argv){
//          fs.writeFileSync("index.txt","First file")
//     }
// })
// yargs.argv

// view file

yargs.command({
    command:"view",
    handler:function(argv){

       const data= fs.readFileSync("index.txt","utf-8");
       console.log(data);
    }
    
})
yargs.argv
