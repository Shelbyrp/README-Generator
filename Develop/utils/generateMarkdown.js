// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(project) {

  return `
  # ${project.title}

  [![License: ${project.license}](https://img.shields.io/badge/License-${project.license}-yellow.svg)](https://opensource.org/licenses/${project.license})

  ## Description
  ${project.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation 
  ${project.installation}

  ## Usage
  ${project.usage}

  ## License
  This project is licensed by the ${project.license} license

  ## Contributing 
  ${project.contributing}

  ## Tests 
  ${project.tests}

  ## Questions
  If you have any questions or require further clarification then please contact me at:
  - https://github.com/${project.githubUser}/
  - ${project.email}
`;
}


module.exports = generateMarkdown;
