// TODO#1: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

// TODO#2: Create an array of questions for user input
const questions = inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of your project",
    },
    {
      type: "input",
      name: "installation",
      message: "Provide your installation notes",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide your usage notes",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Which license would you like to use?",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT",
        "Creative Commons Zero v1.0 Universal",
        "None",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message: "How can others contribute?",
    },
    {
      type: "input",
      name: "tests",
      message: "What type of tests would you like to include?",
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ])
  .then((project) => {
    const markdown = generateMarkdown(project);
    writeToFile(filename, markdown);
  });

// TODO#3: Create a function to write README file
function writeToFile(filename, markdown) {
  fs.writeFile(filename, markdown, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO#4: Create a function to initialize app
function init() {
}

// Function call to initialize app
let filename = "README.md";
init();
