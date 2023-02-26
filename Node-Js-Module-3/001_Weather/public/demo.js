var headers = new Headers();
headers.append("X-CSCAPI-KEY", "aHAwSE1FQUpHMExPYU95TmZJT2g2c29iTFpyN0NOVWc1eUk5emZKbw==");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};
const getCountry=()=>{
    fetch(`https://api.countrystatecity.in/v1/countries`,requestOptions)
    .then((resolve)=>{
        return resolve.json();
    }).then(result=>{
        var row="";
        for(var i=0;i<result.length;i++){
            console.log(result[i]);
        }
    }).catch(err=>{
        console.log(err);
    })
}
getCountry();