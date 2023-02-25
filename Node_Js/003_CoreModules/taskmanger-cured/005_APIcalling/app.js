const axios=require('axios');
const link="https://restcountries.com/v3.1/all"

axios.get(link).then(result=>{

    console.log("...........Population........"); 
    for(var i=0;i<=result.data.length;i++)
    {
        const data1=result.data[i];
        
        console.log(data1.name.nativeName)
    }
}).catch(err=>{
   console.log(err);
})
