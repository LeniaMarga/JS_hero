function Food(name, value) {
  this.name = name;
  this.value = value;
}


Food.prototype.prettyPrint = function() {
  return "Name: " + this.name + ", Value: " + this.value
}


module.exports = Food;
