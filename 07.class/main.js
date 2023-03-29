// let circle1 = {
//   radius: 5,
//   getArea() {
//     return Math.PI * this.radius * this.radius;
//   },
// };
// let circle2 = {
//   radius: 10,
//   getArea() {
//     return Math.PI * this.radius * this.radius;
//   },
// };

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

let c1 = new Circle(5);
console.log('c1.radius =>', c1.radius);
console.log('c1.getArea() =>', c1.getArea());