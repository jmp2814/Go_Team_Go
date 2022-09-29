const Engineer = require("../lib/Engineer.js");

describe("Engineer sub-class", () => {
  describe("Functionality", () => {
    it("Should store the provided Name, Id, Github Username and Email Address in the Engineer object and return those values as well as it's Role when called with the corresponding methods", () => {
      const myName = "Hannah";
      const myId = 123;
      const myGithub = "HannahCodes";
      const myEmail = "Hannah@email.com";
      const myRole = "Engineer";

      const myEngineer = new Engineer(myName, myId, myGithub, myEmail);

      expect(myEngineer.getName()).toEqual(myName);
      expect(myEngineer.getId()).toEqual(myId);
      expect(myEngineer.getGithub()).toEqual(myGithub);
      expect(myEngineer.getEmail()).toEqual(myEmail);
      expect(myEngineer.getRole()).toEqual(myRole);
    });
  });
});
