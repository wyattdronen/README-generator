
const licenseArray = [ "Apache license 2.0", "Artistic license 2.0", "MIT",]
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(license) {
  if (license===licenseArray[0]){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"

  } 
  else if (license===licenseArray[1]){
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"

  } 
  else if (license===licenseArray[2]){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } 
  else {
    return ""
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function licenseLink(license) {
  if (license===licenseArray[0]){
    return `[${licenseArray[0]}](https://opensource.org/licenses/Apache-2.0)`

  }
   else if (license===licenseArray[1]){
    return `[${licenseArray[1]}](https://opensource.org/licenses/Artistic-2.0)`

  } 
  else if (license===licenseArray[2]){
    return `[${licenseArray[2]}](https://opensource.org/licenses/MIT)`

  } 
  else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function licenseSection(license) {
  if (license===licenseArray[0]){
    return `${licenseArray[0]} here:`
  } 
  else if (license===licenseArray[1]){
    return `${licenseArray[1]} here:`
  } 
  else if (license===licenseArray[2]){
    return `${licenseArray[2]} here:`
  } 
  else {
    return ""
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${licenseBadge(data.license)}
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Usage](#usage)
  * [How to Contribute](#contribution)
  * [Acknowledgements](#acknowledge)
  * [Status](#status)
  ## License
  ${licenseSection(data.license)}
  ${licenseLink(data.license)}
  ## Description
  ${data.description}
  ## Usage
  ${data.usage}
  ## How to Contribute
  [Contributor Covenant](https://www.contributor-covenant.org/)  
  ${data.contribution}
  ## Acknowledgments
  ${data.acknowledge}
  ## Status
  ${data.status}
 
  [${data.username}](https://github.com/${data.username})  
  ${data.email}`;
}

module.exports = generateMarkdown;


  