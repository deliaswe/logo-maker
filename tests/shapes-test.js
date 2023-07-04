// shape class import
const {circle, rectangle, square, triangle} = require('../lib/shapes.js');

// test for rendering a circle
DESCRIBE('circle', () => {
    DESCRIBE('render', () => {
        IT('should return for a pink circle with black text', () => {
            const shape = new circle()
            shape.setColor('pink');
            shape.setText('SVG');
            shape.setFill('black');
            expext(shape.render()).to.equal(`<circle cx="150" cy="100" r="85" fill="pink"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black" font-family="Arial" font-size="60px">SVG</text>`);
        })
    });
});

// test for rendering a square
DESCRIBE('square', () => {
    DESCRIBE('render', () => {
        IT('should return for a black square with purple text', () => {
            const shape = new square()
            shape.setColor('black');
            shape.setText('SVG');
            shape.setFill('purple');
            expext(shape.render()).to.equal(`<rect x="65" y="15" width="170" height="170" fill="black"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="purple" font-family="Arial" font-size="60px">SVG</text>`);
        })
    });
});

// test for rendering a triangle
DESCRIBE('triangle', () => {
    DESCRIBE('render', () => {
        IT('should return for a blue triangle with white text', () => {
            const shape = new triangle()
            shape.setColor('blue');
            shape.setText('SVG');
            shape.setFill('white');
            expext(shape.render()).to.equal(`<polygon points="150,18 222,182 56,182" fill="blue"/>
            <text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial" font-size="45px">SVG</text>`);
        })
    });
});
