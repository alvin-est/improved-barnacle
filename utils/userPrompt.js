import inquirer from 'inquirer';

// Gather user input
async function userPrompt() {
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