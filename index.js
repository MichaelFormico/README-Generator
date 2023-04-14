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
    ])
    .then((answers) => {
        
        const { motivation, build, solved, learn, unique, challenges, future } = answers;
        
        const layout = `
# My Project

## Motivation
${motivation}

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

## Future Plans
${future}
`;

        writeToFile('README.md', layout);
    })
    .catch((error) => console.error(error));
}

// Function call to initialize app
init();
