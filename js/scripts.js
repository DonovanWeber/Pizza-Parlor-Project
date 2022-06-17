function Pizza(size, toppings, priceOfPizza) {
  this.size = size;
  this.toppings = toppings;
  this.priceOfPizza = 0;
}

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

Pizza.prototype.priceOfToppings = function () {
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
console.log(this.priceOfPizza);
};

$(document).ready(function() {
  $("form#pizza").submit(function(event){
    event.preventDefault();
    const selectedSize = $("#pizza-size").val();
    console.log(selectedSize)
    let arrayOfToppings = []
    $("input:checkbox[name=toppings]:checked").each(function() {
     let selectedToppings = $(this).val(); 
     arrayOfToppings.push(selectedToppings)
     console.log(arrayOfToppings);
    });
    let myPizza = new Pizza(selectedSize, arrayOfToppings, 0);
    console.log(myPizza)
    myPizza.priceOfSize();
    myPizza.priceOfToppings();
    $("#output-price").html(myPizza.priceOfPizza);
    });
  });
