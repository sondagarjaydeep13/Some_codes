const axios=require("axios");

const getGeocode=(city)=>{

const url=`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`

axios.get(url).then(result=>{
    const data=result.data.results;
    console.log(data)
})

}
getGeocode("surat");