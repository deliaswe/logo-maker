// requiring npm packages
const inquirer = require('inquire');
const fs = require('fs');
const square = require('./lib/square');
const triangle = ('./lib/triangle.js');
const circle = require('./lib/circle');

function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter 3 characters of text.',
            name: 'textColor',
            validate: function (input) {
                return input.length > 0 && input.length <=3
            }
        },
        
    ])
}