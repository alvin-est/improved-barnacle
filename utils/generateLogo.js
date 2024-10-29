// Import dependencies
import fs, { write } from 'fs';
import path from 'path';

// Import classes
import Square from '../lib/Square.js';
import Triangle from '../lib/Triangle.js';
import Circle from '../lib/Circle.js';

function generateLogo(input) {
    const { color, shape, text, canvasSize, textSize } = input;

    let logo;

    switch(shape) {
        case "triangle":
            logo = new Triangle(color, text);
            break;
        case "circle":
            logo = new Circle(color, text);
            break;
        case "square":
            logo = new Square(color, text, canvasSize, textSize);
            break;
        default:
            break;
    }
    
    // console.log("Logo:", logo);
    // return logo;
    if (logo) {
        writeToFile(logo);
    } else {
        console.log("Failed to generate logo.");
    }
}

function writeToFile(logo) {
    const svgContent = logo.render();
    console.log("SVG:", svgContent);

    const filePath = './output/logo.svg';

    // Writing to file
    directoryCheck(filePath);
    try {
        fs.writeFile(filePath, svgContent, (err) => {
            if (err) { console.log("Error writing to file", err); return; } 
            console.log(`Logo saved to ${filePath}`);
        });
    }    
    catch (err) {
        console.error("Error writing file:", err);
    }
}

function directoryCheck(filePath) {
    // Check if directory exists, create if not
    const outputPath = path.dirname(filePath);

    fs.access(outputPath, fs.constants.F_OK, (err) => {
        if(err) {
            // Directory does not exist - create it
            fs.mkdir(outputPath, { recursive: true }, (err) => {
                if (err) {
                    console.log("Error creating directory", err);
                    return;
                }
            });
        }
        else {
            // Directory exists
            return;
        }
    });
}

export default generateLogo;