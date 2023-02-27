// api stuctured
var headers = new Headers();
headers.append(
  "X-CSCAPI-KEY",
  "UXF2OHQ2WjBMT1Y5Q05MQzVhNE1sT3VJSk02Y3BaNzlRNHRVMHRjZA=="
);

var requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};

// create function for getcity

const getcontries=()=>{
    fetch("https://api.countrystatecity.in/v1/countries", requestOptions).then(
        (resolve)=>{
       return resolve.json();
        }).then(result=>{
            console.log(result);



        }).catch(err=>{
            console.log(err);
        })
       
    
}
getcontries();