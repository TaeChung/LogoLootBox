const {
    Circle, Square, Triangle
} = require("./lib/shapes.js")

const inquirer = require ("inquirer")

const fs = require ("fs")

inquirer.prompt ([
    {
        type:"input", 
        message:"enter three letters",
        name: "pittsburgh",
    },
    {
        type:"input", 
        message:"enter shape COLOR",
        name: "detroit",
    },
    {
        type:"input", 
        message:"enter text color",
        name: "hellNorway",
    },
    {
        type:"list", 
        message:"pick a shape",
        name: "extraThick", 
        choices: ["circle", "square", "triangle"]
    },
]).then(answers=>{
    if(answers.extraThick=="circle") {
        let shape = new Circle (answers.extraThick, answers.detroit, answers.pittsburgh, answers.hellNorway)
        fs.writeFileSync ("./output/shape.svg", shape.render())
    }
    if(answers.extraThick=="square") {
        let shape = new Square (answers.extraThick, answers.detroit, answers.pittsburgh, answers.hellNorway)
        fs.writeFileSync ("./output/shape.svg", shape.render())
    }
    if(answers.extraThick=="triangle") {
        let shape = new Triangle (answers.extraThick, answers.detroit, answers.pittsburgh, answers.hellNorway)
        fs.writeFileSync ("./output/shape.svg", shape.render())
    }
});