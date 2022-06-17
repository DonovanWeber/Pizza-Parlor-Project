# _Donovan's Online Pizza Parlor_

#### By Donovan Weber

#### what does it do 

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery
* Bootstrap 

## Description


## Setup/Installation Requirements

* Clone my        repository from Github
* Go to the first level of the directory
* Open     /index.html

## Known Bugs

No known bugs contact me at [donovanweber03@gmail.com](mailto:donovanweber03@gmail.com) if any bugs are found.

## Specs

Describe: function Pizza()

Test: "It should return a new object of the Pizza constructor with the size and toppings wanted"
Code: Pizza()
const myPizza = ("large", ["pepperoni", "pineapple"])
Expected Output: Pizza; {size: "large", toppings:["pepperoni", "pineapple"]} 

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