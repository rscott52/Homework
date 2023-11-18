let pizzaPlace = "Sultans of Pizza";
let numberOfToppings = 10;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

console.log(
  `The ${pizzaPlace} believes we can have ${numberOfToppings} toppings and still make a whole lot of pizza that is both quality and quantity!`
);

if (numberOfToppings >= 10) {
  console.log("A whole lot of pizza.");
} else {
  console.log("Quality, not quantity.");
}
