const Employee = require("./Employee.js");

// Create Intern
class Intern extends Employee {
  constructor(name, id, school, email) {
    super(name, id, email);

    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
