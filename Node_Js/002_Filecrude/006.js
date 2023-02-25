const fs=require('fs');

const createfile=(data)=>{
    fs.writeFileSync("file.JSON",JSON.stringify(data))
}

module.exports={createfile}