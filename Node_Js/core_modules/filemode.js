
// Here create the file using sync
const fs=require('fs');
// fs.writeFileSync('core_modules/note.txt','This is new files');

// now read the file 

const read=fs.readFileSync('core_modules/note.txt','utf-8');
console.log(read);

// second methode for read file

const read_second=fs.readFileSync('core_modules/note.txt');
console.log("Here convert into string");
console.log(read_second.toString());
