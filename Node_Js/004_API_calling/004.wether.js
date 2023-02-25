const file=require("./003_weather");
const lat=process.argv[2];
const lon=process.argv[3];

file.getwether(lat,lon,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log({
        cityname:`${dt1}`,
        lon:`${dt2}`,
        lat:`${dt3}`,
        temp:`${dt4}`
    })
});