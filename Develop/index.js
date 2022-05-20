// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { writeFile, copyFile } = require('./utils/generateMarkdown')

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
            message: 'How do you install your project? (Required)', 
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
        },
        { 
            type: 'list',
            name: 'license',
            message: 'What type of license did you use? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log('You must enter a license');
                }
        }  
        },
        ])
}

promptUser()
   
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(`./${fileName.toLowerCase().split(' ').join(' ')}.md`, data,(err) =>{
    if(err){
        console.log(err)
    }
    console.log('Your README has been generated!');
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promptUser)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
