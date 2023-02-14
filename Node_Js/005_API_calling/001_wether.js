const axios=require("axios");

const url="https://api.openweathermap.org/data/2.5/weather?lat=21.1702&lon=72.8311&appid=dee1453ce9972e4b53e8058399a68e05"

axios.get(url).then(result=>{
   console.log(result.data.main.temp-273);
   console.log(result.data.name);
}).catch(err=>{
   console.log(err);
})