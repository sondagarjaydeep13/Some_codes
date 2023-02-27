var headers = new Headers();
headers.append("X-CSCAPI-KEY", "UXF2OHQ2WjBMT1Y5Q05MQzVhNE1sT3VJSk02Y3BaNzlRNHRVMHRjZA==");

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
        row=row+ "<option value="+result[i].iso2+">"+result[i].name+"<option/>"
        }
        country.innerHTML=row;
    }).catch(err=>{
       console.log(err);
    })
}

var countrycode;
const getState=(ccode)=>{
    countrycode=ccode;
    fetch(`https://api.countrystatecity.in/v1/countries/${ccode}/states`, requestOptions).then((resolve)=>{
        return resolve.json();
    }).then(result=>{
         var row="";
         for(var i=0;i<result.length;i++){
         row= row+ "<option value="+result[i].iso2+ ">"+result[i].name+"<option/>"
         }
         state.innerHTML=row;
    }).catch(err=>{
        console.log(err);
    })
}
var citycodes;
const getCity=(scode)=>{
citycodes=scode;

fetch(`https://api.countrystatecity.in/v1/countries/${countrycode}/states/${scode}/cities`, requestOptions).then((resolve)=>{
    return resolve.json();
}).then(result=>{   
    var row="";

    for(var i=0;i<result.length;i++){
    row=row+"<option value="+result[i].name+">"+result[i].name+"</option>"
    // console.log(result[i]);
    }
   city1.innerHTML=row;
}).catch(err=>{
    console.log(err);
})
}

const getWeather=(cityname)=>{
    var location= cityname+","+citycodes+","+ countrycode;
    
    fetch(`/weather?location=${location}`).then(data=>{
        return data.json();
    }).then(result=>{
      
      console.log(location);
        wloc.innerHTML=location;
        wtemp.innerHTML=result.temp;
        wpressure.innerHTML=result.pressure;
        whumidity.innerHTML=result.humidity
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
}
getWeather();

