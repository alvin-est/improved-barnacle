// Import classes
import Square from '../lib/Square.js';
import Triangle from '../lib/Triangle.js';
import Circle from '../lib/Circle.js';

describe('Shape Tests', () => {
    describe('Triangle', () => {
        test('renders correctly with color', () => {
            const triangle = new Triangle();
            triangle.setColor('blue');
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });

    describe('Circle', () => {
        test('renders correctly with color', () => {
            const circle = new Circle();
            circle.setColor('green');
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
        });
    });

    describe('Square', () => {
        test('renders correctly with color', () => {
            const square = new Square();
            square.setColor('red');
            expect(square.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="red" />');
        });
    });
});