const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown=require("./Utils/generateMarkdown")

inquirer // questions to build the readme file from
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username',
        },
                {
            type: 'input',
            message: 'What is the name or title of your project?',
            name: 'proj_name',
        },
        {
            type: 'input',
            message: 'Please describe your project (i.e. motivation, problems solved, etc.)',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Describe how your project is installed -',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Describe how to use your project -',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Where can users reach support for your project -',
            name: 'support',
        },
        {
            type: 'input',
            message: 'How can users contribute to this project?',
            name: 'contrib',
        },
        {
            type: 'input',
            message: 'Please enter any test instructions required - ',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Enter any licence info for your application -',
            name: 'license',
            choices: [
                "MIT",
                "Apache",
                "GNU",
                "none",
    ]},
        {
            type: 'input',
            message: 'Please indicate who to reach for any questions a user might have - ',
            name:'questions',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
        },
    ])
    .then((response) => {  // builds the readme file inside the utils folder
        console.log(response);
        const filename = `./Utils/README.md`

        fs.writeFile(filename, generateMarkdown (response), (err) => // executes genmrkdwn within fs.writefile
            err ? console.error(err) : console.log('Success!'))

    });

