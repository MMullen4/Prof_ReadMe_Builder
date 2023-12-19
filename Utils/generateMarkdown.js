// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// // function renderLicenseBadge(license) {
// //   if (license === "MIT") {
// //     return `![Static Badge](https://img.shields.io/badge/License-MIT-brightgreen)`
// //     // if (license === "Apache") {
//     //   return `![Static Badge](https://img.shields.io/badge/License-Apache-brightgreen)`
//     //   if (license === "GNU") {
//     //     return `![Static Badge](https://img.shields.io/badge/License-GNU-brightgreen)`
//     //   }
//     //   // else return ("None")}
//     }
//   }

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) { }

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) { }

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.proj_name}
  ${renderLicenseBadge(data.license)}

## Description
${data.description} 

## Table Of Contents
${data.tableOC}

## Installation
${data.installation}

## Usage
${data.usage}

## Support
${data.support}

## License
${data.license}

## Contributing
${data.contrib}

## Tests
${data.test}

## Questions
${data.questions}

`;
  }

  module.exports = generateMarkdown
;
