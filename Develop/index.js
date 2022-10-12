// TODO: Include packages needed for this application

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
    name: 'test',
},{
    type: 'input',
    message: "Provide information about contributing",
    name: 'contributing',
},{
    type: 'list',
    message: "'apache 2.0',bsd 3-clause', 'GNU GPL v2',tion",
    name: 'license',
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

