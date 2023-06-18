// Requiring npm packages
const fs = require('fs');
const inquirer = require('inquirer');
const shaped = require('./lib/shapes.js');
const Shaped = new shaped();
function init() {

   // questions for shapes, text, and colors
    inquirer
    .prompt([
        {
            type:"input",
            message:"Please enter up to three characters for your logo: ",
            name:"text",
        },
        {
            type:"input",
            message: "Please enter your desired color for the text or enter the associated hexadecimal number.",
            name:"textColor",  
        },
        {
            type:"list",
            message: "Please enter your desired color for the shape or enter the associated hexadecimal number.",
            name:"shape",
            choices:["Circle","Triangle","Square"],
        },
        {
            type:"input",
            message: "Please enter your desired color for the shape or enter the associated hexadecimal number.",
            name:"shapeColor",  
        },
    ])
    
    // ./logo.svg file
    .then((data)=>{
        fs.writeFileSync("./logo.svg",`<svg width="${300}" height="${200}" version="${1.1}" xmlns="http://www.w3.org/2000/svg">`);
        switch(data.shape){
            case "Circle":
                fs.appendFileSync("./logo.svg",` ${Shaped.circle(data.shapeColor)}`);
            break;

            case "Triangle":
                fs.appendFileSync("./logo.svg",` ${Shaped.triangle(data.shapeColor)}`);
            break;

            case "Square":
                fs.appendFileSync("./logo.svg",` ${Shaped.square(data.shapeColor)}`);
            break;

        }
        fs.appendFileSync("./logo.svg",` ${Shaped.text(data.text,data.textColor)}`);
        fs.appendFileSync("./logo.svg",`</svg>`);
    });
}
init(); 