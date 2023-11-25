// 1. Create an array of pizzaToppings with at least four different toppings
let pizzaToppings = ["cheese", "bacon", "pineapple", "ham"];

// 2.Create a greetCustomer function that prints(console logs) a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings// (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
//  i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
//  use a for loop to complete the function
function greetCustomer() {
  let greeting = "Welcome to Sultans of Pizza! Our pizza toppings are:";
  for (let pizzaTopping of pizzaToppings) {
    greeting += `${" " + pizzaTopping + ","}`;
  }
  console.log(greeting);
}

// 3.Create a getPizzaOrder function that
//   has the parameters size, crust, and an indefinite amount of toppings as inputs
//   prints(means console.logs) the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//   outputs(means returns) a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...toppings) {
  console.log(
    "One " + size + ", " + crust,
    "crust pizza with " + toppings,
    "coming up!"
  );
  return [size, crust, toppings];
}

// 4.Create a preparePizza function that
//   has an array as its parameter with three items: a size, a crust, and a list of toppings
//   prints(means console.log) something like "...Cooking pizza..."
//   outputs(means return) a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza([size, crust, toppings]) {
  let pizzaOrder = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  console.log("Your pizza is cooking!");
  return pizzaOrder;
}

// 5.Create a servePizza function that
//  has a parameter of a pizza Object
//  logs(means console.log) a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//  outputs(means return) the same pizza Object that was passed in

function servePizza(pizzaOrder) {
  console.log(
    `Order up! Here's your ${pizzaOrder.size}, ${pizzaOrder.crust} crust pizza, with ${pizzaOrder.toppings}. Enjoy!`
  );
  return pizzaOrder;
}

// 6.Call each function and (starting with preparePizza) use the returned value from the previous function as its input
greetCustomer();

// eslint-disable-next-line prettier/prettier
getPizzaOrder("large", "thin", "ham", " bacon", " and pineapple");

preparePizza(getPizzaOrder("large", "thin", "ham", " bacon", " and pineapple"));

// eslint-disable-next-line prettier/prettier
servePizza(preparePizza(getPizzaOrder("large", "thin", "ham", " bacon", " and pineapple")));
