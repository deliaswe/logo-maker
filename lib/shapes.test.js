import {Circle, Triangle, Square} from "./shapes.js";

describe("Shape tests", () => {
describe("Circle test", () => {
test("should render a circle with the specified color", () => {
const shape = new Circle();
shape.setColor("orange");
expect(shape.render()).toBe(`<circle cx="150" cy="100" r="80" fill="orange"/>`);
});
});

describe("Triangle test", () => {
test("should render a triangle with the specified color", () => {
const shape = new Triangle();
shape.setColor("pink");
expect(shape.render()).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="pink"/>`);
});
});

describe("Square test", () => {
test("should render a square with the specified color", () => {
const shape = new Square();
shape.setColor("purple");
expect(shape.render()).toBe(`<rect x="90" y="40" width="120" height="120" fill="purple"/>`);
});
});
});
