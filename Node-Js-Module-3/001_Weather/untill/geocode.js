const axios=require("axios");
const path=require("path");
const getGeocode=(city)=>{

const url=`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`

return new Promise((resolve,reject)=>{



axios.get(url).then(result=>{
    const data1=result.data;
    const data2=data1.results[1].geometry;
     
    const lat=data2.lat;
    const lng=data2.lng;
    
    return resolve(
        {lat,lng}
    )
    
}).catch(err=>{
   return reject(err)
})
})

}

module.exports={getGeocode}