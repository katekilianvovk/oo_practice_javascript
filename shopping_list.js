var ShoppingList = function(budget){
  this.contents = [];
  this.budget = budget;
};

ShoppingList.prototype.total = function() {
  return this.contents.map(function(elem) {
    return elem.price;
  }).reduce(function(accumVal, currVal) {
    return accumVal += currVal;
  }, 0);
};

ShoppingList.prototype.addItem = function(item) {
  var projectedPrice = this.total() + item.price;
  if (projectedPrice > this.budget) {
    return "sorry, you can't have that";
  } else {
    this.contents.push(item);
  }
};

ShoppingList.prototype.swap = function(oldThing, newThing) {
  // first find the index at which the old item is located inside the array
  var oldIndex = this.contents.indexOf(oldThing);
  this.contents[oldIndex] = newThing;
}



module.exports = ShoppingList;
