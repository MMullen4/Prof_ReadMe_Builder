const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username',
        },
        {
            type: 'checkbox',
            message: 'What languages do you know?',
            name: 'stack',
            choices: [
                "HTML",
                "CSS",
                "phone",
                "text"
            ]
        },
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'proj_name',
        },
        {
            type: 'input',
            message: 'Please describe your project -',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please include visuals of your project -',
            name: 'visuals',
        }
        {
            type: 'input',
            message: 'Describe how your project is installed -',
            name: 'installation',
        }
        {
            type: 'input',
            message: 'Describe how to use your project -',
            name: 'usage',
        }
        {
            type: 'input',
            message: 'Where can users reach support for your project -',
            name: 'support',
        }
        {
            type: 'input',
            message: 'Where can users send contributions?',
            name: 'contrib',
        }
        {
            type: 'input',
            message: 'Please enter the author and any acknowledgments -',
            name: 'author',
        }
        {
            type: 'input',
            message: 'Enter any licence info for your application -',
            name:'licence',
        }
        {
            type: 'input',
            message: 'what is the current status of your application?',
            name:'status',
        }

    ])
    .then((response) => {
        console.log(data);
        const filename = `${data.name.toLowerCase()}.txt`

        fs.writeFile(filename, JSON.stringify(data), (err) =>
            err ? console.error(err) : console.log('Success!'))

        response.confirm === response.password
            ? console.log('Success!')
            : console.log('You forgot your password already?!')
    });

