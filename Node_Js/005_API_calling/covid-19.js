const axios=require("axios");
const fs=require("fs");
const covid=()=>{

const url="https://data.covid19india.org/v4/min/data.min.json";

axios.get(url).then(result=>{
   console.log(result.data.GJ.districts.Amreli);
  
    // for(var i=0;i<=result.data.length;i++){
    //        console.log(result.data[i]);
       //    }
    // console.log(result[0]);

    
}).catch(err=>{
        console.log(err);
})
}
module.exports={covid};