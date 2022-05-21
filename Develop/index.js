// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
                        // return false;
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
            type: 'checkbox',
            name: 'license',
            message: 'Chose a license (Required) :',
            choice: ['MPL 2.0', 'GNU', 'Apache', 'MIT', 'None of these licenses'],
            validate: your_license => {
                if (your_license) {
                    return true;
                } else {
                    console.log('Please enter a license for this project');
                    return false;
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
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username (Required) :', 
                validate: github_input => {
                    if (github_input) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub username!');
                        return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email for those who might have any questions about the project?',
                validate: email_input => {
                    if (email_input) {
                        return true;
                    } else {
                        console.log('Please enter your email');
                        return false;
                    }
                }
        }
    ])
}

promptUser()
   
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
    })

    console.log('Success! You can now preview your README file');
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput));
    })
}

// Function call to initialize app
init();
