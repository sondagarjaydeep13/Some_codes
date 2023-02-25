const fs=require('fs');

const createfile=(data)=>{
    fs.writeFileSync(data)
}


module.exports={createfile}