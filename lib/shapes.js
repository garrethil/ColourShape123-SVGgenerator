

class Triangle {
    constructor(polyPoints, colour) {
        this.colour = colour;
        this.polyPoints = polyPoints;
        this.polyPoints = '150, 18 244, 182 56, 182';
        
    }
    setColour(colour) {
        this.colour = colour;
    }
    render() {
        return `<polygon points="${this.polyPoints}" fill="${this.colour}"/>`;
    }
}

class Square {
    constructor(polyPoints, colour) {
        this.colour = colour;
        this.polyPoints = polyPoints;
        this.polyPoints = '-100,100 100,100 100,-100 -100,-100';
        
    }
    setColour(colour) {
        this.colour = colour;
    }
    render() {
        return `<polygon points="${this.polyPoints}" fill="${this.colour}"/>`;
    }
}

class Circle {
    constructor(polyPoints, colour) {
        this.colour = colour;
        this.polyPoints = polyPoints;
        this.polyPoints = '150, 100 250, 200 50, 200';
        
    }
    setColour(colour) {
        this.colour = colour;
    }
    render() {
        return `<polygon points="${this.polyPoints}" fill="${this.colour}"/>`;
    }
}


module.exports = Triangle;
module.exports = Square;
module.exports = Circle;