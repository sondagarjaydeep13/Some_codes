const URL = "https://jsonplaceholder.typicode.com/users";

fetch(URL)
  .then((resolve) => {
    return resolve.json();
  })
  .then((data) => {
    var trdata = "";
    const mydata = data.map((value) => {
      trdata += ` <tr>
          <td>${value.id}</td>
          <td>${value.name}</td>
          <td>${value.username}</td>
          <td>${value.email}</td>
          <td>${value.address.street},
          ${value.address.city}
          </td>
          <td>${value.phone}</td>
        </tr>`;
    });
    document.getElementById("demo").innerHTML = trdata;
  });
