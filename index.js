// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    'What was your motivation?',
    'Why did you build this project?',
    'What problem does it solve?',
    'What did you learn?',
    'What makes your project stand out?',
    'What challenges did you face?',
    'What are your future plans?',
    'What is your title?',
    'Who are all the contributors?',
    'What is this app used for?',
    'What is your email address?',
    'What is the link to your GitHub profile?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'motivation',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'build',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'solved',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'learn',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'unique',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'challenges',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'future',
        },
        {
            type:'input',
            message: questions[7],
            name: 'title'
        } ,
        {
            type:'input',
            message: questions[8],
            name: 'contribution'
        },
        {
            type:'input',
            message: questions[9],
            name: 'usage'
        },
        {
            type:'input',
            message: questions[10],
            name: 'email'
        },
        {
            type:'input',
            message: questions[11],
            name: 'github'
        },
        {
            type:'checkbox',
            name: 'licenseChoice',
            message: 'Select any licenses you would like, or none.',
            choices: [
              { name: 'Apache License', value: "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)" },
              { name: 'Mozilla Public License', value: "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)" },
              { name: 'MIT Licenese', value: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"  },
              { name: 'None', value: ''},]
              
           }
    ])
    .then((answers) => {
        
        const { motivation, build, solved, learn, unique, challenges, future, title, contribution, usage, email, github, licenseChoice } = answers;
        
        const layout = `
# ${title} 

${licenseChoice} 

## Motivation
${motivation}

## Usage
${usage}

## Project Description
${build}

## Problem Solved
${solved}

## Lessons Learned
${learn}

## Unique Features
${unique}

## Challenges Faced
${challenges}

## Contributors
${contribution}

## Future Plans
${future}

## Contact
<a href="${email}" target="_blank">${email}</a> <a href="${github}" target="_blank">GitHub</a>
`;

        writeToFile('README.md', layout);
    })
    .catch((error) => console.error(error));
}

// Function call to initialize app
init();
