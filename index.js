const inquirer = require("inquirer");
const Triangle = require("./lib/shapes.js");
const Square = require("./lib/shapes.js");
const Circle = require("./lib/shapes.js");
const fs = require("fs");


const generateSVG = ({
    text, textColour, shapeColour,
}) => 
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="${this.polyPoints}" fill="${shapeColour}"/>

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text>

</svg>`;

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