// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: "What is your project title?",
    name: 'title',
},{
    type: 'input',
    message: "Enter your project description",
    name: 'description',
},{
    type: 'input',
    message: "Enter your command to install necessary dependencies",
    name: 'installation',
},{
    type: 'input',
    message: "Provide an example of usage",
    name: 'usage',
},{
    type: 'input',
    message: "Provide information about running tests",
    name: 'tests',
},{
    type: 'input',
    message: "Provide information about contributing",
    name: 'contributing',
},{
    type: 'list',
    message: "'What kind of license should your project have?",
    name: 'license',
    choices: [
        "MIT",
        "APACHE",
        "GPL",
        "BSD",
        "NONE"
    ]
},
{
    type: 'input',
    message: "What is your email address?",
    name: 'email',
},{
    type: 'input',
    message: "What is your github username?",
    name: 'github',
},
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('success')
    });
}

// Function call to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'README.md';
        writeToFile(fileName, data)
    });
}

init()

