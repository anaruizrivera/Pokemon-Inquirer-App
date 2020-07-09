var inquirer = require('inquirer');
// hola
inquirer

    .prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            message: 'what os your trainer name?',
            name: 'trainerName'
        },
        {
            type: 'password',
            message: 'password',
            name: 'trainerPassword'
        },
        {
            type: 'list',
            message: 'Choose your first Pokemon:',
            choices: ['Bulbasur', 'Squirtle', 'Charmander', 'Pikachu'],
            name: 'trainerChoice'
        },
        {
            type: 'confirm',
            message: 'Are you sure?',
            default: true,
            name: 'trainerConfirm'
        }
    ])


    .then(answers => {
        // Use user feedback for... whatever!!
        if (answers.trainerConfirm === true) {
            console.log(`Hello ${answers.trainerName}, your ${answers.trainerChoice} is ready for battle!`);
        } else {
            console.log(`Thas ok ${answers.trainerName} come back when you are sure.`);
        }
    })
    .catch(error => {
        console.log('you had an error');
    });

// let login = () => {
//     console.log('loading in');
// };
// login();