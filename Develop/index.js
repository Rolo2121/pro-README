// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

console.log('Welcome to the README generator!')

 
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('Please enter your project name!');
                        return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'discription',
            message: 'Please discribe your project! (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('Please enter a description of your project!');
                    }
                }
        
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Please enter Installation Instructions (Required) :', 
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('Please enter installation instructions');
                    }
            }
             
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information (Required) :',
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('Please enter a description of the usage of this project');
                    }
            }
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please enter any contributors (Required) :', 
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('If no contributors type: "none"');
                    }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter how you want to test your project',
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('Please enter how to test your project!');
                }
            }
        }
    ])
}

promptUser()
   
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
