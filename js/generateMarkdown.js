
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
${data.description}

## Installation
${data.Installation}

## Usage Info
${data.Usage}
## Contributing guidelines
${data.Contributions}
## Test Instructions
${data.Tests}
## Questions
    Contact Info:
    email:${data.Email}
    [link to Github!](http://github.com/${data.Github})

## License 
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)


 [link to screen recording!](https://drive.google.com/file/d/1siGBsFGuUpfLRf_ASobjg0DF1nhZJLBD/view)`

}

module.exports = generateMarkdown;