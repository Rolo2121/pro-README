// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { witeFile, copyFile } = require('./utils/generateMarkdown')

console.log('Welcome to the README generator!')

 
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
                validate: titleInput => {
                    if (titleInput) {
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
                validate: discriptionInput => {
                    if (discriptionInput) {
                        return true
                    } else {
                        console.log('Please enter a description of your project!');
                        return false;
                    }
                }
        
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter Installation Instructions (Required) :', 
                validate: installationInput => {
                    if (installationInput) {
                        return true
                    } else {
                        console.log('Please enter installation instructions');
                        return false;
                    }
            }
             
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information (Required) :',
                validate: usageInput => {
                    if (usageInput) {
                        return true
                    } else {
                        console.log('Please enter a description of the usage of this project');
                        return false;
                    }
            }
        },

        {
            type: 'list',
            name: 'license',
            message: 'Chose a license (Required) :',
            choices: ['MPL 2.0', 'GNU v3', 'Apache', 'MIT', 'None of these licenses'],
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
                validate: contributionsInput => {
                    if (contributionsInput) {
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
                validate: testsInput => {
                    if (testsInput) {
                        return true
                    } else {
                        console.log('Please enter how to test your project!');
                        return false;
                    }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username (Required) :', 
                validate: githubInput => {
                    if (githubInput) {
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
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter your email');
                        return false;
                    }
                }
        }
    ]);
};

   
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
    })

    console.log('Success! You can now preview your README file');
};

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(function(userInput) {
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
