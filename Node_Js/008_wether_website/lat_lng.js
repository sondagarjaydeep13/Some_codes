const axios=require("axios");



const getTemp=(lat,lon)=>{

    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=127d880d7784727f24c339fc6862b782`;

    return new Promise((resolve,reject)=>{
       
        axios.get(url).then(result=>{
            const data=result.data.main;
             
            const temp=data.temp;
            const pressure=data.pressure;
            const humidity=data.humidity;

            return resolve
            ({
                temp , pressure , humidity
            }).catch(err=>{
                return reject (err);
            })
          
        })

    })
}

getTemp(21.1917761,72.9544158);