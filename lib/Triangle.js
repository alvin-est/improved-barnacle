import Shape from './Shape.js';

export default class Triangle extends Shape {
    constructor(color, text, textColor, canvasSize, textSize) {
        super(color);
        this.text = text;
        this.textColor = textColor;
        this.canvasSize = canvasSize;
        this.textSize = textSize;
    }

    generateXML() {
        // Define canvas size in pixels
        switch(this.canvasSize) {
            case "small":
                this.canvasSize = 200;
                break;
            case "medium":
                this.canvasSize = 300;
                break;
            case "large":
                this.canvasSize = 400;
                break;
            default:
                this.canvasSize = 200;
        }

        // Define text size in percentage
        switch(this.textSize) {
            case "small":
                this.textSize = 100; 
                break;
            case "medium":
                this.textSize = 150; 
                break;
            case "large":
                this.textSize = 200; 
                break;
            default:
                this.textSize = 100;
        }

        // For a triangle, the text should be centered in the canvas
        const halfSize = this.canvasSize / 2; // for positioning

        return `
        <svg width="${this.canvasSize}" height="${this.canvasSize}" xmlns="http://www.w3.org/2000/svg">
            <polygon points="${halfSize} 0, ${this.canvasSize} ${this.canvasSize}, 0 ${this.canvasSize}" style="fill:${this.color}; stroke-width: 1; stroke: black;" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="${this.textSize}%">${this.text}</text>
        </svg>
        `;
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }

    describe() {
        console.log(`This is a ${this.color} triangle.`);
    }
    
    /*
    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    getArea() {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
    */
}
