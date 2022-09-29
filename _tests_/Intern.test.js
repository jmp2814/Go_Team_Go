const Intern = require("../lib/Intern.js");

describe("Intern sub-class", () => {
  describe("Functionality", () => {
    it("Should store the provided Name, Id, School and Email Address in the Intern object and return those values as well as it's Role when called with the corresponding methods", () => {
      const myName = "Hank";
      const myId = 456;
      const mySchool = "Harvard";
      const myEmail = "Hank@email.com";
      const myRole = "Intern";

      const myIntern = new Intern(myName, myId, mySchool, myEmail);

      expect(myIntern.getName()).toEqual(myName);
      expect(myIntern.getId()).toEqual(myId);
      expect(myIntern.getSchool()).toEqual(mySchool);
      expect(myIntern.getEmail()).toEqual(myEmail);
      expect(myIntern.getRole()).toEqual(myRole);
    });
  });
});
