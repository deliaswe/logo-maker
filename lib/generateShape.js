// shape class import
const {circle, rectangle, square, triangle} = require('./shapes.js');

// function for shapes
function shapeRender(shape, backgroundColor, textColor, text) {
    switch(shape) {
        case 'circle':
            const circle = new circle(backgroundColor, textColor, text);
            return circle.render();
            break;
        case 'square':
            const square = new square(backgroundColor, textColor, text);
            return square.render();
            break;
        case 'triangle':
            const triangle = new triangle(backgroundColor, textColor, text);
            return triangle.render();
            break;
    }  
}

// function for shapes, setColor, and setText
function generateShape(shape, backgroundColor, textColor, text) {
    return `<svg width="300" height="200">
    ${shapeRender(shape, backgroundColor, textColor, text)}
    </svg>`;
}

// export generateShape
module.exports = generateShape;


