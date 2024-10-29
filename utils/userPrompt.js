import inquirer from 'inquirer';

// Declare basic colours
const basicColors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'white', 'black'];

// Gather user input
async function userPrompt() {
    // Prompt the user to select a colour and shape - as well as provide text for the logo
    const response = await inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['triangle', 'circle', 'square']
        },
        {
            type: 'input',
            name: 'color',
            message: 'Specify your preferred background color:',
            validate: (input) => {
                // Check if input is a basic color or a valid hex color
                if (basicColors.includes(input.toLowerCase())) {
                    return true; // Valid basic color
                } 
                else if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(input)) {
                    return true; // Valid hex color
                }
    
                return `Please enter a valid color name or hex code. See https://htmlcolorcodes.com/ for reference. \neg. red, green, blue, white, #fff, #000, #800080, #ffa500
                `;
            }
        },
        {
            type: 'input',
            name: 'text',
            message: 'Provide text for your logo (max. 3 characters):',
            validate: (input) => {
                // Check if input is 3 characters or less
                if (input.length <= 3) {
                    return true;
                }
                else {
                    return "Please enter 3 characters or less.";
                }
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Specify the text colour (name or hexadecimal code):',
            validate: (input) => {
                // Check if input is a basic color or a valid hex color
                if (basicColors.includes(input.toLowerCase())) {
                    return true; // Valid basic color
                } 
                else if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(input)) {
                    return true; // Valid hex color
                }
    
                return 'Please enter a valid color name or hex code. See https://htmlcolorcodes.com/ for reference.';
            }
        },
        {
            type: 'list',
            name: 'canvasSize',
            message: 'How big should the canvas be?',
            choices: ['small', 'medium', 'large']
        },
        {
            type: 'list',
            name: 'textSize',
            message: 'How big should the text be?',
            choices: ['small', 'medium', 'large']
        },
    ]);

    console.log("User response:", response);
    return response;
}

export default userPrompt;