// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Brief description of your project',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'What is the usage info?',
      },
      {
        type: 'input',
        name: 'Contributions',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Are there any test instructions?',
      },
      {
        type: 'input',
        name: 'Github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license do you require?',
        choices: ['MIT', 'APACHE', 'GPL', 'ISC'],
      },
    ])
    .then((data) => {
        const answers = generateMarkdown(data);

        fs.writeFile('read me.md', answers, (err) =>
        err ? console.log(err) : console.log('Successfully created read me.md!')
      );

    })
  };
 
   
// TODO: Create a function to initialize app
function init() {
    promptUser();

}
// Function call to initialize app
init();