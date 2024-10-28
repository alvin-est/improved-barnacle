import Shape from './Shape.js';

export default class Square extends Shape {
    constructor(sideLength, color) {
        super(color);
        this.sideLength = sideLength;
    }

    describe() {
        console.log(`This is a square with a side length of ${this.sideLength}.`);
    }

    area() {
        return this.sideLength * this.sideLength;
    }

    perimeter() {
        return 4 * this.sideLength;
    }
}
