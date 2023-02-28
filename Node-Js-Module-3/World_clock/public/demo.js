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

const getTime=(ccode)=>{

  fetch( `https://timezone.abstractapi.com/v1/current_time/?api_key=1089efabd8e54844810c1883ba1b2b80&location=${ccode}`).then(result=>{
    return result.json();
  }).then(data=>{
    clock.innerHTML=data.datetime;
  }).catch(err=>{
    console.log(err);
  })
}