// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge = ''
  if (license === 'MPL 2.0') {
    licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    return licenseBadge
  }
  if (license === 'GNU v3') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    return licenseBadge
  }
  if (license === 'Apache') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    return licenseBadge
  }
    return licenseBadge
}
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseSection = ''
  if (license === 'MPL 2.0') {
    licenseSection 
    
    return licenseSection
  }
  if (license === 'GNU v3') {
    licenseSection 
    return licenseSection
  }
  if (license === 'Apache') {
    licenseSection 
  }
    return licenseSection

}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenseBadge = renderLicenseBadge (data.license)
  return `# ${data.title} ${licenseBadge}

## Decription
${data.discription}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributions](#Contributions)
* [Tests](#Tests)
* [Contact](#Contact)

## Installation
${data.installation}

## Usage
${data.usage}

## License

## Contributions
${data.contributions}

## Tests
${data.tests}

## Contact
Find me on GitHub: [${data.github}](https://github.com/${data.github})
<br />
Email me with any questions: ${data.emailContact}
<br />
<br />

_This README was generated automatically with :revolving_hearts: by [README-generator](https://github.com/Rolo2121/pro-README)

`;

}

module.exports = generateMarkdown;
