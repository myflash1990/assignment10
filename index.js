//Requirememts amd classes
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");
//Input questions for shape, three letter text and fill color.
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter 3 letters for your logo",
    validate: text => {
      if (text.length > 3) {
        return "You must enter only 3 letters";
      }
      return true;
    }
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter color :"
  },
  {
    type: "list",
    name: "shape",
    message: "What shape for the logo:",
    choices: ["Circle", "Square", "Triangle"]
  },
  {
    type: "input",
    name: "shapeColor",
    message: "What shape color?:"
  }
];

//Writes to file completed logo.svg
inquirer.prompt(questions).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;
  const logo = generateLogo(text, textColor, shape, shapeColor);
  fs.writeFile("./logo.svg", logo, err => {
    if (err) {
      console.log("Error in generating :", err);
    } else {
      console.log("Generated logo.svg!");
    }
  });
});
//Generate logo
