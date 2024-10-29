import Shape from './Shape.js';

export default class Square extends Shape {
    constructor(sideLength, color, radiusX, radiusY) {
        super(color);
        this.sideLength = sideLength;
        this.radiusX = radiusX;
        this.radiusY = radiusY;
    }

    render() {
        return `<rect x="0" y="0" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }

    describe() {
        console.log(`This is a square with a side length of ${this.sideLength}.`);
    }

    // area() {
    //     return this.sideLength * this.sideLength;
    // }

    // perimeter() {
    //     return 4 * this.sideLength;
    // }
}
