// now create the file using async method

const fs=require('fs');
// fs.writeFile('core_modules/note1.txt','This is my note1 file',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File is created");
// })

// Now creating folder

// fs.mkdir('folder',(err,folder)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//      console.log("Folder is created");
// })

// create file into the folder name folder using async methode

fs.writeFile('folder/first.pdf','This is only for sample',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("first name file created");
})