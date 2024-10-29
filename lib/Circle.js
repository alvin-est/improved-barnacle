import Shape from './Shape.js';

export default class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }

    render() {
        return `<circle cx="0" cy="0" r="${this.radius}" fill="${this.color}" />`;
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
