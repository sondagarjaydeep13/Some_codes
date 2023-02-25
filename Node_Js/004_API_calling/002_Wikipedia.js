const axios=require("axios");

const link="https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Tiger_King/daily/20210901/20210930";

axios.get(link).then(result=>{
    // for(var i=0;i<=result.data.length;i++){
    //    const data1=result[i];
    //    console.log(data1);
    // }
    console.log(result.data);
}).catch(err=>{
    console.log(err);
})