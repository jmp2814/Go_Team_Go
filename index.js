// dependencies
const fs = require("fs/promises");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const genHTML = require("./src/generateHTML.js");

let myTeam = [];

// update manager
function updateManager(answer) {
  let myManager = new Manager(
    answer.mName,
    answer.mID,
    answer.mOffice,
    answer.mEmail
  );
  myTeam.push(myManager);
}

// manager info questions
const introQuestions = [
  { type: "input", message: "What is your name?", name: "mName" },
  { type: "input", message: "What is your Employee ID#?", name: "mID" },
  { type: "input", message: "What is your email address?", name: "mEmail" },
  { type: "input", message: "What is your Office Number?", name: "mOffice" },
];

// questions for adding team members
const addMoreQuestions = [
  {
    type: "list",
    message: "Which team member would you like to add?",
    name: "selection",
    choices: ["An Engineer", "An Intern", "None, I am finished"],
  },
];

// engineer info questions
const engineerQuestions = [
  {
    type: "input",
    message: "What is the name of the Engineer?",
    name: "eName",
  },
  { type: "input", message: "What is their Employee ID#?", name: "eID" },
  { type: "input", message: "What is their email address?", name: "eEmail" },
  { type: "input", message: "What is their GitHub Username?", name: "eGithub" },
];

// intern info questions
const internQuestions = [
  {
    type: "input",
    message: "What is the name of the Intern?",
    name: "iName",
  },
  { type: "input", message: "What is their Employee ID#?", name: "iID" },
  { type: "input", message: "What is their email address?", name: "iEmail" },
  { type: "input", message: "What is their School?", name: "iSchool" },
];

// ask manager who they want to add
function addMoreTeammembers() {
  inquirer.prompt(addMoreQuestions).then((answers) => {
    switch (answers.selection) {
      case "An Engineer":
        getAndStoreEngineers();
        break;
      case "An Intern":
        getAndStoreInterns();
        break;
      case "None, I am finished":
        writeToFile("dist/output.html", genHTML(myTeam));
        break;
      default:
        console.log("Something went wrong!");
    }
  });
}

// Ask Engineer Questions and Store Engineers
function getAndStoreEngineers() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    let myEngineer = new Engineer(
      answers.eName,
      answers.eID,
      answers.eGithub,
      answers.eEmail
    );
    myTeam.push(myEngineer);
    addMoreTeammembers();
  });
}

// Ask Intern Questions and Store Interns
function getAndStoreInterns() {
  inquirer.prompt(internQuestions).then((answers) => {
    let myIntern = new Intern(
      answers.iName,
      answers.iID,
      answers.iSchool,
      answers.iEmail
    );
    myTeam.push(myIntern);
    addMoreTeammembers();
  });
}

// Write File to Dist folder
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data);
}

// Init Function
function Init() {
  inquirer.prompt(introQuestions).then((answers) => {
    updateManager(answers);
    addMoreTeammembers();
  });
}

// Init Call
Init();
