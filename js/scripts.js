//business logic -----
function Pizza(size, toppings, priceOfPizza) {
  this.size = size;
  this.toppings = toppings;
  this.priceOfPizza = 0;
}
// let myPizza = new Pizza("large", ["pepperoni", "pineapple"], 0);
// let my2Pizza = new Pizza("medium", ["onions"], 0);
// let my3Pizza = new Pizza("small" , ["pepperoni", "pineapple", "onions"], 0)
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
    console.log(this.priceOfPizza);
  } else if ((this.toppings[i]+'').indexOf("pineapple") > -1) {
    this.priceOfPizza += 3;
  } else {
    
  }

};
console.log(this.priceOfPizza);
};
//ui logic ------

$(document).ready(function() {
  $("form#pizza").submit(function(event){
    event.preventDefault();
    const selectedSize = $("#pizza-size").val();
     $("input:checkbox[name=toppings]:checked").each(function() {
      const selectedToppings = $(this).val(); 
      selectedToppings.priceOfToppings().val();
      selectedSize.priceOfSize().val();
      const totalPrice = selectedToppings.priceOfToppings() + selectedSize.priceOfSize();
      $("#output-price").html(totalPrice)
    });
    });
  });
