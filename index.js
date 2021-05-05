const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

const questions = [
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
      choices: generateMarkdown.licenseList(),
    },
    {
      type: "input",
      name: "contributing",
      message: "How can others contribute?",
    },
    {
        type: "input",
        name: "credits",
        message: "Who would you like to credit?",
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
  ]

function writeToFile(filename, markdown) {
  fs.writeFile(filename, markdown, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

function init() {
    inquirer.prompt(questions)
    .then((project) => {
        const markdown = generateMarkdown.generateMarkdown(project);
        writeToFile(filename, markdown);
      });
}

const filename = "README.md";
init();
