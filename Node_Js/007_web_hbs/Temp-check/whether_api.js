const axios=require("axios");

const city=process.argv[2];

const getcity=(city)=>{

    return new Promise((resolve,reject)=>{

   
const url=`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`

axios.get(url).then(result=>{
    const data=result.data;
    const lat=data.results[0].geometry.lat;
    const lng=data.results[0].geometry.lng;
//   console.log({
//      lat:`${lat}`,
//      lng:`${lng}`
//   })
return resolve({
    lat,lng
})
}).catch(err=>{
    // console.log(err);
    return reject(err);
})
})

}
