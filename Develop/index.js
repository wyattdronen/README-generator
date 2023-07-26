// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = require('./utils/questions');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log(`${fileName}.md has been generated.`)
    )};


// TODO: Create a function to initialize app
function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        writeToFile(response.fileName, response);
    })
    .catch(err => {
        console.log(err)
    });
}

// Function call to initialize app
init();
