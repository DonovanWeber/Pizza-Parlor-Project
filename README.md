# _Donovan's Online Pizza Parlor_

#### By Donovan Weber

#### Donovan's Online Pizza Parlor let's order you order a pizza and provides the price for each combination.

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery
* Bootstrap 

## Description
It is a web application that allows you to pick the size and toppings for a pizza you would like to order and evaluates the price based on 
the items you chose.


## Setup/Installation Requirements

* Clone my Pizza-Parlor-Project repository from Github
* Go to the first level of the directory
* Open pizza-parlor-project/index.html

## Known Bugs

No known bugs contact me at [donovanweber03@gmail.com](mailto:donovanweber03@gmail.com) if any bugs are found.

## Specs

Describe: function Pizza()

Test: "It should return a new object of the Pizza constructor with the size and toppings wanted"
Code: Pizza()
const myPizza = ("large", ["pepperoni", "pineapple"])
Expected Output: Pizza; {size: "large", toppings:["pepperoni", "pineapple"]} 

Test: " The Pizza constructor will now have a property of priceOfPizza that will be the final price of the pizza after evaluating the price of the size and price of toppings"
Code: Pizza(size, toppings, priceOfPizza) {
  this.size = size;
  this.toppings = toppings;
  this.priceOfPizza = 0;
}
Expected Output: 0 

Describe: Pizza.prototype.priceOfSize()

Test: "It should return a the price of the size inside of the new property of the price of the pizza"
Code: Pizza.prototype.priceOfSize 
const myPizza = ("large", ["pepperoni"], 0)
myPizza.priceOfSize();
Expected Output: 12

Describe: Pizza.prototype.priceOfToppings()
 
Test:"It should add 3 to the priceOfPizza every time a topping is selected "
Code:let myPizza = new Pizza("large", ["pepperoni", "pineapple"], 0);
let my2Pizza = new Pizza("medium", ["onions"], 0);
let my3Pizza = new Pizza("small" , ["pepperoni", "pineapple", "onions"], 0)
Expected Output: MyPizza.priceOfToppings() = 6
                 My2Pizza.priceOfToppings() = 3
                 My3Pizza.priceOfToppings() = 9

## License

[MIT](https://choosealicense.com/licenses/mit/)