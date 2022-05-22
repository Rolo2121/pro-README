// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `# ${data.license}`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (value == null) {
    return "";
  } else {
    return value.toSring();
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Decription
<h1 align="center">${data.description}</h1>

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
${data.license}
![License](https://img.shields.io/badge/License-${data.license}-blue.svg);

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
