import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// context #1
// we are running this file in development in isolation
// we are using our local index.html file
// which defnitely has an element with an id of 'dev-products'
// we want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // assuming our container doesnt have an element with id 'dev-products'
  if (el) {
    // we are probably runnin in isolation
    mount(el);
  }
}
// contet #2
// we are running this file in develpment or production
// through the container app
// no guarantee that an element with an id of 'dev-products'
// we do not want try to immediately render the app
export { mount };
