

// API
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "UXF2OHQ2WjBMT1Y5Q05MQzVhNE1sT3VJSk02Y3BaNzlRNHRVMHRjZA==");

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

// fetch data

const getCountries=()=>{
    fetch(`https://api.countrystatecity.in/v1/countries`,requestOptions)
    .then((resolve)=>{
        return resolve.json();
    }).then((result)=>{
        var row="";
        for(var i=0;i<result.length;i++){
          row=row+"<option value="+result[i].iso2 +">"+result[i].name +"</option>"
        //   console.log(result[i]);
        }
        country.innerHTML=row;
    }).catch((err)=>{
        console.log(err);
    })

    
}

var  countrycode;
const getStates=(ccode)=>{
  countrycode=ccode
  fetch(`https://api.countrystatecity.in/v1/countries/${ccode}/states`, requestOptions)
  .then((response)=>{
    return response.json()
  }).then((result)=>{
    var row="";
    for(var i=0;i<result.length;i++){
      row=row+"<option vaue="+result[i].iso2+">"+ result[i].name+"</option>"
    // console.log(result[i].name);

    }
      state.innerHTML=row;
  }).catch(err=>{
    console.log(err);
  })
}
var statescode;

const getCity=(scode)=>{
  statescode=scode;
  fetch(`https://api.countrystatecity.in/v1/countries/${countrycode}/states/${scode}/cities`, requestOptions).then((response)=>{
    return response.json()
  }).then((result)=>{
    var row="";
    for(var i=0;i<result.length;i++){
         row=row+"<option value="+result[i].name+ ">"+result[i].name+ "</option>"
    }
    city1.innerHTML=row;
  }).catch(err=>{
    console.log(err);
  })
}
