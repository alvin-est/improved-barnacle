// Import classes
import Square from './lib/Square.js';
import Triangle from './lib/Triangle.js';
import Circle from './lib/Circle.js';

function generateLogo(input) {
    const { color, shape, text } = input;

    let logo = "";

    switch(shape) {
        case "triangle":
            logo = new Triangle(color, text);
            break;
        case "circle":
            logo = new Circle(color, text);
            break;
        case "square":
            logo = new Square(color, text);
            break;
        default:
            break;
    }

    return logo;
}

export default generateLogo;