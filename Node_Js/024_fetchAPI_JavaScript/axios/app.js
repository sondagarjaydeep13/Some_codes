const URL = "/https/fakestoreapi.com/products";

fetch(URL)
  .then((resolve) => resolve.json())
  .then((json) => console.log(json));
