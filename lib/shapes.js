

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


module.exports = Triangle;
