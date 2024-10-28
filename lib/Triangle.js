import Shape from './Shape.js';

export default class Triangle extends Shape {
    constructor(sideA, sideB, sideC, color) {
        super(color);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    describe() {
        console.log(`This is a triangle with sides of length ${this.sideA}, ${this.sideB}, and ${this.sideC}.`);
    }

    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    getArea() {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
}
