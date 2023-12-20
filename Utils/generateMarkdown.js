// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![Static Badge](https://img.shields.io/badge/License-MIT-brightgreen)`
  }
  else if (license === "Apache") {
    return `![Static Badge](https://img.shields.io/badge/License-Apache-brightgreen)`
  }
  else if (license === "GNU") {
    return `![Static Badge](https://img.shields.io/badge/License-GNU-brightgreen)`
  }
  else if (license === "none") {
    return ("None")
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.proj_name}
  ${renderLicenseBadge(data.license)}

## Description
${data.description} 

## Table Of Contents
- [Installation} (#Installation)
- [Usage] (#Usage)
- [Support] (#Support)
- [License] (#License)
- [Tests] (#Tests)
- [Questions] (#Questions)

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

GitHub
${data.github}

LinkedIn
${data.linkedin}`;
}

module.exports = generateMarkdown;
