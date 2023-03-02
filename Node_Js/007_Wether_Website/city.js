const axios=require("axios");
const path=require("path");
const getWether=(city)=>{

return new Promise((resolve,reject)=>{
     
    const url=`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`;

    axios.get(url).then(result=>{

      console.log(result)
       const data= result.data.results[1].geometry;

       
       const lat=data.lat;
       const lng=data.lng;

     return resolve ({
        lat , lng
     }).catch(err=>{
        return reject(err);
     })
    })

})

}