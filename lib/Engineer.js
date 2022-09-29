const Employee = require("./Employee.js");

// Create Engineer
class Engineer extends Employee {
  constructor(name, id, github, email) {
    super(name, id, email);

    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
