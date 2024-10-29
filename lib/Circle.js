import Shape from './Shape.js';

export default class Circle extends Shape {
    constructor(color, text, textColor, canvasSize, textSize) {
        super(color);
        this.text = text;
        this.textColor = textColor;
        this.canvasSize = canvasSize;
        this.textSize = textSize;
    }

    generateXML() {
        // Define the canvas size in pixels or percentage
        let canvasDimension;
        switch(this.canvasSize) {
            case "small":
                canvasDimension = '200px';
                break;
            case "medium":
                canvasDimension = '300px';
                break;
            case "large":
                canvasDimension = '400px';
                break;
            default:
                canvasDimension = '200px';
        }

        // Define text size as a percentage of the canvas size
        let textSizePercentage;
        switch(this.textSize) {
            case "small":
                textSizePercentage = '100%';
                break;
            case "medium":
                textSizePercentage = '150%';
                break;
            case "large":
                textSizePercentage = '200%';
                break;
            default:
                textSizePercentage = '100%';
        }

        return `
        <svg width="${canvasDimension}" height="${canvasDimension}" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" style="fill:${this.color};stroke-width:1;stroke:black;" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="${textSizePercentage}">${this.text}</text>
        </svg>
        `;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }

    describe() {
        console.log(`This is a ${this.color} circle.`);
    }
/*
    area() {
        return Math.PI * this.radius * this.radius;
    }

    circumference() {
        return 2 * Math.PI * this.radius;
    }
*/
}
