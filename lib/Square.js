import Shape from './Shape.js';

export default class Square extends Shape {
    constructor(color, text, canvasSize, textSize) {
        super(color);
        this.text = text;
        this.canvasSize = canvasSize;
        this.textSize = textSize;
    }

    render() {
        // In pixels
        switch(this.canvasSize) {
            case "small":
                this.canvasSize = 200;
                break;
            case "medium":
                this.canvasSize = 400;
                break;
            case "large":
                this.canvasSize = 600;
                break;
            default:
                this.canvasSize = 200;
        }

        // In percentage
        switch(this.textSize) {
            case "small":
                this.textSize = 100;
                break;
            case "medium":
                this.textSize = 200;
                break;
            case "large":
                this.textSize = 300;
                break;
            default:
                this.textSize = 100;
        }

        return `
        <svg width="${this.canvasSize}" height="${this.canvasSize}" xmlns="http://www.w3.org/2000/svg">
            <rect width="${this.canvasSize}" height="${this.canvasSize}" style="fill:${this.color};stroke-width:3;stroke:black;" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black" font-size="${this.textSize}%">${this.text}</text>
        </svg>
        `;
    }

    describe() {
        console.log(`This is a ${this.color} square.`);
    }

    /*
    // area() {
    //     return this.sideLength * this.sideLength;
    // }

    // perimeter() {
    //     return 4 * this.sideLength;
    // }
    */
}
