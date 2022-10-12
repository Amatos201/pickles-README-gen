// TODO: Create a function that returns a license badge based on which license is passed in



// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {
 
//}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.description}






# Tables of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)


# Installation
${data.installation}

# Usage
${data.usages}

# License
${data.licenses}

# Contributing
${data.contribute}

# Tests
${data.tests}

# Questions
![Profile Avatar](${data.pfp})

If you have any questions, please e-mail me at ${data.email}.

# Credits
Github: [${data.username}](${data.url})

copyright ${data.name}. All Rights Reserved.
`;
}
module.exports = generateMarkdown;
