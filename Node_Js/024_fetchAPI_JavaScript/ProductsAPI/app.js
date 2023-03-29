const url = "https://dummyjson.com/products";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var trdata = "";
    const udata = data.products.map((edata) => {
      trdata += `<tr>
    <td>${edata.id}</td>
    <td>${edata.title}</td>
    <td>${edata.description}</td>
    <td>${edata.price}</td>
    <td><img src="${edata.images[0]}" height=70px></img></td>
  </tr>`;
    });

    document.getElementById("mydata").innerHTML = trdata;
  });
