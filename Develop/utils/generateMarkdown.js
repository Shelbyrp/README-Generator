var licenses = {
  "Apache License 2.0": "https://opensource.org/licenses/Apache-2.0",
  "GNU General Public License v3.0": "https://www.gnu.org/licenses/gpl-3.0.en.html",
  "MIT": "https://opensource.org/licenses/MIT",
  "Creative Commons Zero v1.0 Universal": "https://creativecommons.org/publicdomain/zero/1.0/",
  "None": "",
}

let licenseList = () => Object.keys(licenses);

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return encodeURI(`https://img.shields.io/badge/License-${license}-yellow.svg`);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return encodeURI(licenses[license]);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
  // [![License: ${project.license}](https://img.shields.io/badge/License-${project.license}-yellow.svg)](https://opensource.org/licenses/${project.license})
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(project) {
  return `
  # ${project.title}

  ${renderLicenseSection(project.license)}

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
  This project is licensed by the [${project.license}](${renderLicenseLink(project.license)}) license

  ## Contributing 
  ${project.contributing}

  ## Tests 
  ${project.tests}

  ## Questions
  If you have any questions or require further clarification then please contact me at:
  - https://github.com/${project.username}/
  - ${project.email}
`;
}

module.exports = {
  generateMarkdown: generateMarkdown, 
  licenseList: licenseList
};
