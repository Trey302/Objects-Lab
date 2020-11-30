const car = {
    make : "ford",
    model : "mustang",
    color : "black",
    type : "sedan",
    tires : "firestone",
    mode : "sport",
    gasoline : "super"
   }

// Prompt 1: Print the object above to the console.
//    console.log(car)

// Prompt 2: Write a function that takes an object as an argument and prints it to the console.
// function object() {
// for (let i = 0; i > car.length; i++) {
//     console.log(car)
// }
// }

// Delete the gasoline property from the object. Also print the object before or after deleting the property.
// delete car.gasoline;
// console.log(car);

// Write a function that returns the object keys as an array.
// const propertyKeys = Object.keys(car);
// console.log(propertyKeys);

// Write a function that returns the object's values as an array.
const propertyValues = Object.values(car);

console.log(propertyValues);