const svgAttributes = require('./shapes.js');

describe('svgAttributes', () => {
    describe('shape', () => {
        const shape = new Triangle();
        shape.setColour("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"');
    })
})