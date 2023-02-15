const axios=require("axios");
const lat=process.argv[2];
const lon=process.argv[3];
const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=127d880d7784727f24c339fc6862b782`;
axios.get(url).then(result=>{
       const data=result.data;
          const dt1=data.name;
          const dt2=data.coord.lon;
          const dt3=data.coord.lat;
          const dt4=data.main.temp;
    //    console.log(data);
    console.log({
        cityname:`${dt1}`,
        lon:`${dt2}`,
        lat:`${dt3}`,
        temp:`${dt4}`
    })
  
}).catch(err=>{
    console.log(err);
})