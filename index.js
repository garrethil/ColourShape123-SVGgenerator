const inquirer = require("inquirer");
const Triangle = require("./lib/shapes.js");
const Square = require("./lib/shapes.js");
const Circle = require("./lib/shapes.js");
const fs = require("fs");
let shape;

const generateSVG = ({
    text, textColour, shapeColour,
}) => 
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${shape} fill="${shapeColour}"/>

<text x="150" y="125" font-size="50" text-anchor="middle" fill="${textColour}">${text}</text>

</svg>`;

inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "What 3 letter would you like in your svg?",
        validate: function(input) {
            if (input.trim().length > 3) {
                return 'please only enter 3 or fewer characters';
            }
            return true;
        }
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
]).then((answers) => {
    if (answers.shape === "Triangle") {
        const newShape = new Triangle('polygon points="150,30 30,150 270,150"');
        shape = newShape.polyPoints;    
    }else if (answers.shape === "Circle") {
        const newShape = new Circle('circle cx="150" cy="105" r="85"');
        shape = newShape.polyPoints;

    }else if (answers.shape === "Square") {
        const newShape = new Square('polygon points="50,30 250,30 250,230 50,230"');
        shape = newShape.polyPoints;
    }

    const svgContent = generateSVG(answers);

    fs.writeFile("logo.svg", svgContent, (err) => 
    err?console.log(err):console.log("Generated logo.svg")
    
    );
});