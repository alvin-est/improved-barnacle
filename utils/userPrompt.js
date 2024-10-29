import inquirer from 'inquirer';

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

export default prompt;