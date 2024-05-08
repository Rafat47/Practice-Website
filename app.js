function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

Circle.prototype.select = function () {
  console.log("this circle is selected");
};
Circle.prototype.test = "test";

let descriptor = Object.getOwnPropertyDescriptors(Circle);

console.log(descriptor);
