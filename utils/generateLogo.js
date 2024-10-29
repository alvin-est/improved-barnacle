// Import dependencies
import fs from 'fs';
import path from 'path';

// Import classes
import Square from '../lib/Square.js';
import Triangle from '../lib/Triangle.js';
import Circle from '../lib/Circle.js';

function generateLogo(input) {
    const { color, shape, text, textColor, canvasSize, textSize } = input;

    let logo;

    switch(shape) {
        case "triangle":
            logo = new Triangle(color, text, textColor, canvasSize, textSize);
            break;
        case "circle":
            logo = new Circle(color, text, textColor, canvasSize, textSize);
            break;
        case "square":
            logo = new Square(color, text, textColor, canvasSize, textSize);
            break;
        default:
            break;
    }
    
    if (logo) {
        writeToFile(logo);
    } else {
        console.log("Failed to generate logo.");
    }
}

function writeToFile(logo) {
    const svgContent = logo.generateXML();
    console.log("SVG:", svgContent);

    const filePath = './output/logo.svg';

    // Writing to file
    directoryCheck(filePath);
    try {
        fs.writeFile(filePath, svgContent, (err) => {
            if (err) { console.log("Error writing to file", err); return; } 
            console.log(`Generated!`);
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