//business logic -----
function Pizza(size, toppings, priceOfPizza) {
  this.size = size;
  this.toppings = toppings;
  this.priceOfPizza = 0;
}
let myPizza = new Pizza("large", ["pepperoni", "pineapple"], 0)
let my2Pizza = new Pizza("medium".["onion"], 0)
Pizza.prototype.priceOfSize = function (size) {
  if (this.size === "large" || this.size === "Large") {
      return this.priceOfPizza += 12;
    } else if (this.size === "medium" || this.size === "Medium" ) {
      return this.priceOfPizza += 10;
    } else if (this.size === "small" || this.size === "Small") {
      return this.priceOfPizza += 8;
    } else {
      return this.priceOfPizza;
    }
};

Pizza.prototype.priceOfToppings = function (toppings) {
  for(i = 0; i <= this.toppings.length; i++) {
    this.toppings[i]
  if ((this.toppings[i]+'').indexOf("pepperoni") > -1) {
    this.priceOfPizza += 3;
  } else if ((this.toppings[i]+'').indexOf("onions") > -1) {
    this.priceOfPizza += 3;
  } else if ((this.toppings[i]+'').indexOf("pineapple") > -1) {
    this.priceOfPizza += 3;
  } else {
    
  }

};
return this.priceOfPizza;

};
// this.toppings.forEach(function(topping) {
// if (topping === "pepperoni") {
//   this.priceOfPizza += 3;
// } if (topping === "onions") {
//   this.priceOfPizza += 3;
// } if (topping === "pineapple") {
//   this.priceOfPizza += 3;
// } else {
//   return this.priceOfPizza += 0;
// }
// });
// if (this.toppings.includes("pepperoni")) {
// return this.priceOfPizza += 3;
//   } if (this.toppings.includes("pineapple")) {
//     return this.priceOfPizza += 3;
//   } if (this.toppings.includes("onions")) {
//     return this.priceOfPizza += 3;
//   } else {
//     return this.priceOfPizza
//   }
// const myPizza = new Pizza("large", ["pepperoni", "pineapple"]);
// const mySecondPizza = new Pizza("small", ["green peppers"]);
// Pizza.prototype.
// Pizza.prototype.addToppings = function(toppings) {

// }





//ui logic ------