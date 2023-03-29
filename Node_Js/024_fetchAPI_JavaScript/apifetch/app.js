const url = ":/https/fakestoreapi.com/products";

fetch(url)
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    var userdata = "";
    const mydata = data.map((eval) => {
      userdata += ` <tr>
      <td>${eval.id}</td>
      <td>${eval.title}</td>
      <td>${eval.price}</td>
      <td>${eval.description}</td>
      <td>${eval.category}</td>
      <td><img src="${eval.image}" height=50px width="50px" ></img></td>
    </tr>`;
    });
    document.getElementById("demo").innerHTML = userdata;
  });
