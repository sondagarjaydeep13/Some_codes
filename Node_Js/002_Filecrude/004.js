const fs=require('fs');

const createfile=(data)=>{
    const data1=JSON.stringify(data);
    fs.writeFileSync(data1)
}

module.exports={createfile};