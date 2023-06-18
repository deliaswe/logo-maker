import {Circle, Triangle, Square} from "./shapes.js";

describe("shape", () => {
const shape = new Shape();
shape.setColor("red");
expect(shape.render()).toBe(expected)
})

describe("Shape", () => {
describe('circle', () => {
it('should draw a blue circle', () => {
const shape = new Shapes();
shape.setColor("blue");
expect(shape.render()).toEqual(<circle cx="150" cy="100" r="80" fill="blue"></circle>);
});
});

describe('triangle', () => {
it('should draw a blue triangle', () => {
const shape = new Shapes();
shape.setColor("blue");
expect(shape.render()).toEqual(<polygon points="40,220 250,200 145,0" style="fill:blue"></polygon>);
});
});

describe('square', () => {
it('should draw a blue square', () => {
const shape = new Shapes();
shape.setColor("blue");
expect(shape.render()).toEqual(<rect x="100" y="50" rx="10" ry="10" width="100" height="100" fill="blue"></rect>);
});
});
});

