const Employee = require("./Employee.js");

// Create Manager
class Manager extends Employee {
  constructor(name, id, officeNumber, email) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
