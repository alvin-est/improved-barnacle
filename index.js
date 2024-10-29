/*

This application should:
 - Prompt the user to select a colour and shape
    - Prompt for additional styling for the desired shape
 - Provide text for the logo
 - Save the generated SVG to ./output/logo.svg

*/

// Import dependencies
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const path = require('path');

// Import classes
const Square = require('./lib/Square');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');

// Declare variables
let color = shape = text = '';


// Initialise the application
async function init() {
    console.log("Welcome to the Logo Generator!");

    const response = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'start',
            message: 'Would you like to create a logo?'
        }
    ]);

    const { start } = response;

    if(!start) 
        return console.log("Goodbye!");
    else
        prompt();
}

init();


// Gather user input
async function prompt() {
    // Prompt the user to select a colour and shape - as well as provide text for the logo
    const response = await inquirer.prompt([
        {
            type: 'list',
            name: 'color',
            message: 'Select a color:',
            choices: ['red', 'green', 'blue', 'yellow', 'purple', 'orange']
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['triangle', 'circle', 'square']
        },
        {
            type: 'input',
            name: 'text',
            message: 'Provide text for your logo:'
        }
    ]);

    console.log(response);
    return response;
}


