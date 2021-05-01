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

  ## ${project.description ? 'Description' : ''}
  ${project.description ? project.description : ''}

  ## ${project.toc ? 'Table of Contents' : ''}
  ${project.toc ? project.toc : ''}

  ## ${project.installation ? 'Installation' : ''}
  ${project.installation ? project.installation : ''}

  ## ${project.usage ? 'Usage' : ''}
  ${project.usage ? project.usage : ''}

  ## ${project.license ? 'License' : ''}
  ${project.license ? project.license : ''}

  ## ${project.contributing ? 'Contributing' : ''}
  ${project.contributing? project.contributing : ''}

  ## ${project.tests ? 'Tests' : ''}
  ${project.tests ? project.tests : ''}

  ## ${project.questions ? 'Questions' : ''}
  If you have any questions or require further clarification then please contact me at:
  - https://github.com/${project.githubUser}/
  - ${project.email ? project.email : ''}
`;
}


module.exports = generateMarkdown;
