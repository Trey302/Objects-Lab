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
function newCar(make, model, color, type, tires, mode, gasoline) {
       this.make = make;
       this.model = model;
       this.color = color;
       this.type = type;
       this.tires = tires;
       this.mode = mode;
       this.gasoline = gasoline;
   }
   
   let carNew = new newCar("Kia","k5","blue","Sedan","Pirelli P-Zero","Sport","Regular Gasoline");
   
   // console.log(carNew)
// Delete the gasoline property from the object. Also print the object before or after deleting the property.
// delete car.gasoline;
// console.log(car);

// Write a function that returns the object keys as an array.
// const propertyKeys = Object.keys(car);
// console.log(propertyKeys);

// Write a function that returns the object's values as an array.
// const propertyValues = Object.values(car);

// console.log(propertyValues);

// Add two more properties to the object tints: 33% and carplay: true. Print to the console to make sure properties were added.
// car.tint = "33%"
// car.carplay = "true"
// console.log(car)

// Add a method called startEngine with the following:

// When method is called, it prints "VROOM VROOM" to the console.
// Contains a variable engineOn with a boolean value set to true
carNew.startEngine = function(){
       console.log("VROOM VROOM!")
       engineOn = true;
   }
   console.log(carNew)
//        Add a method called turnOffEngine with the following:

// When method is called, it prints "car turned off" to the console.
// Contains a variable engineOn with a boolean value set to false.
carNew.turnOffEngine = function(){
       console.log("car turned off");
       engineOn = false;
   }
   console.log(carNew)
// Write a loop that iterates through the above object's properties. Hint: You will need to turn the object into an array using 1 of 3 object methods in order to loop through it.
for (let i = 0; i <= carNew.length; i++) {
       const value = Object.value(carNew)
   }

   console.log(value)

// Choose one of the following: duck, eagle, or penguin.
// Add an array to the object called favoriteFood, listing the 3-5 favorite foods of the bird.
// Provide the object with 4 key:value pairs, one of which being a boolean value named canFly.
// This object should contain 3 methods named chirpSound, birdDiet, and fly.
// The fly method must contain a conditional based on if the bird you chose can fly or not.
// If the bird can fly, the method when called will output I live in the sky, if not then the method will output I'd like to stay on the ground.

let penguin = {
       favoriteFood: 'Fish, ' + ',Shrimp ' + ',Snow ' + 'Krill ',
       color: 'White, Black',
       height: 'Short',
       location: 'Antarctica',
       canFly: false,
       chirpSound: function(){
           console.log("gakker")
       },
       birdDiet: function(){
           console.log('Fish, ' + ',Shrimp ' + ',Snow ' + 'Krill ')
       },
       fly: function(){
           if (canFly = false){
           console.log("I'd like to stay on the ground.")
           } else if (canFly = true){
               console.log("I live in the sky")
           }
       }
   }

   // Prompt 11: Create another object called house that contains the following:
// A total of 10 key value pairs.
// 2 of the values should be booleans.
// Should contain 1 array.
// Should contain 3 methods.
// 1 method should contain a conditional.
// At least 1 of the values should be an object that has 3 key value pairs.

let house = {
       color = 'black',
       family = ['Dad', 'Mom', 'Son', 'Daughter', 'Dog'],
       backyard = 'Big',
       pool = 'Yes',
       roof = 'black',
       garden = 'Yes',
       happyFamily = true,
       badKids = false,
       happy: function(){
           if (this.happyFamily = false){
               console.log('This family is not happy.')
           } else if (happyFamily = true) {
               console.log("This family is happy.")
           }
       },
       kids: function(){
           if (this.badKids = true){
               console.log("'They have some bad kids.")
           } else if (badKids = false) {
               console.log('They have some good kids.')
           }
       },
       house: function(){
           if (badDog == false){
               console.log('Are dog is so well behaved.')
           } else if (badDog = true){
               console.log('What! Happened to our dog.')
           }
       },
       badDog = false,
       breed = 'Golden Retriever'
   }



