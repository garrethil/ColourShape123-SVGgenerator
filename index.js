const inquirer = require("inquirer");
const Triangle = require("./lib/shapes.js")
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "What 3 letter would you like in your svg?",
    },
    {
        type: "input",
        name: "textColour",
        message: "What colour would you like your text to be?(colour or hex#)",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape:",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shapeColour",
        message: "What colour would you like your shape to be?",
    },
]).then()