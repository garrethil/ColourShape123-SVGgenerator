const Triangle = require('../shapes.js');

describe('Triangle', () => {
    describe('shapes', () => {
        it('should return the appropriat svg string', () => {
            const shape = new Triangle();
            shape.setColour("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
        });
    });
});