// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Your github username:",
        name: "username"
    },
    {
        type: "input",
        message: "Your email:",
        name: "email"
    },
    {
        type: "input",
        message: "Project name:",
        name: "title"
    },
    {
        type: "input",
        message: "Project description:",
        name: "description"
    },
    {
        type: "input",
        message: "Expected outcome:",
        name: "usage"
    },
    {
        type: "input",
        message: "Are you open to contributions and what are your requirements?",
        name: "contribution"
    },
    {
        type: "input",
        message: "Who should be acknowledged?",
        name: "acknowledge"
    },
    {
        type: "list",
        message: "What kind of license for the project?",
        name: "license",
        choices: [
            "MIT",
            "APACHE",
            "ART",
            "None"
        ]
    },
    {
        type: "list",
        message: "Project status:",
        name: "status",
        choices: [
            "COMPLETE",
            "INCOMPLETE"
        ]
    }
];

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
