const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your user name?',
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
            message: 'What is your preferred method of communication?',
            name: 'commun',
        },
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

