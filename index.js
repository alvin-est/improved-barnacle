/*

This application should:
 - Prompt the user to select a colour and shape
    - Prompt for additional styling for the desired shape
 - Provide text for the logo
 - Save the generated SVG to ./output/logo.svg

*/

/* Using ES6 modules */
// Import dependencies
import inquirer from 'inquirer';

// Import functions
import generateLogo from './utils/generateLogo.js';
import userPrompt from './utils/userPrompt.js';

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

    if(!start) {
        return console.log("Goodbye!");
    }
    else {
        const userInput = await userPrompt();
        generateLogo(userInput);
    }
}

init();