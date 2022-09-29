const Manager = require("../lib/Manager.js");

describe("Manager sub-class", () => {
  describe("Functionality", () => {
    it("Should store the provided Name, Id, Office Number and Email Address in the Manager object and return those values as well as it's Role when called with the corresponding methods", () => {
      const myName = "Herman";
      const myId = 789;
      const myOffice = 1000;
      const myEmail = "Herman@email.com";
      const myRole = "Manager";

      const myManager = new Manager(myName, myId, myOffice, myEmail);

      expect(myManager.getName()).toEqual(myName);
      expect(myManager.getId()).toEqual(myId);
      expect(myManager.officeNumber).toEqual(myOffice);
      expect(myManager.getEmail()).toEqual(myEmail);
      expect(myManager.getRole()).toEqual(myRole);
    });
  });
});
