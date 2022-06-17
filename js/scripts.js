//business logic -----
function Pizza(size, toppings, priceOfPizza) {
  this.size = size;
  this.toppings = toppings;
  this.priceOfPizza = 0;
}
let myPizza = new Pizza("large", ["pepperoni"], 0)

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
// const myPizza = new Pizza("large", ["pepperoni", "pineapple"]);
// const mySecondPizza = new Pizza("small", ["green peppers"]);
// Pizza.prototype.
// Pizza.prototype.addToppings = function(toppings) {

// }





//ui logic ------