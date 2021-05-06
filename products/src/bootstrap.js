import faker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

document.querySelector("#dev-products").innerHTML = products;

// context #1
// we are running this file in development in isolation
// we are using our local index.html file
// which defnitely has an element with an id of 'dev-products'
// we want to immediately render our app into that element

// contet #2
// we are running this file in develpment or production
// through the container app
// no guarantee that an element with an id of 'dev-products'
// we do not want try to immediately render the app