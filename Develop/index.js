// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const questions = require('./questions.js');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {
        if (err) {
            return console.log(err);
        }; 
        console.log('README created!')
    });

}

// TODO: Create a function to initialize app
function init() {
    // Prompt user with questions
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Process answers
            console.log('Answers received:', answers);
            // Generate README content
            const readmeContent = generateMarkdown(answers); 
            // Write README file
            writeToFile('README.md', readmeContent); 
        })
        .catch((error) => {
            console.error('Error occurred:', error);
        });
}

// Function call to initialize app
init();
