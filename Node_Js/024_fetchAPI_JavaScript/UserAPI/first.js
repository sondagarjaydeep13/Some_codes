const URL = "https://jsonplaceholder.typicode.com/users";

fetch(URL)
  .then((resolve) => resolve.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].id);
    }
  });
