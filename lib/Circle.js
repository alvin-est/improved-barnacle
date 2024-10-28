import Shape from './Shape.js';

export default class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }

    describe() {
        console.log(`This is a circle with a radius of ${this.radius}.`);
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    circumference() {
        return 2 * Math.PI * this.radius;
    }
}
