// TODO: Create a function that returns a license badge based on which license is passed in
const fs =require('fs');


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if(!license) {
    return '';
  } else {
    return '[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})'

}
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {
 
//}

// TODO: Create a function that returns the license section of README
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === 'CC--0') {
    return `https://creativecommons.org/licenses/by-nd/4.0` 
  }
}

// If there is no license, return an empty string
//function renderLicenseSection(license) {}
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}



  ${renderLicenseBadge(data.licenses)}


 

# Tables of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)

## description
${data.description}


# Installation
${data.installation}

# Usage
${data.usages}


${renderLicenseSection(data.licenses)}

# Contributing
${data.contribute}

# Tests
${data.tests}

# Questions
![Profile Avatar](${data.pfp})

If you have any questions, please e-mail me at 
Github: https://github.com/
${data.email}.

# Credits
${data.name}


`;
}

module.exports = generateMarkdown;
