// function for shapes, setColor, and setText
class shapes {
    constructor(color, text, fill) {
        this.color = color;
        this.text = text;
        this.fill = fill;
    }
    setColor(color) {
        this.color = color;
    }
    setText(text) {
        this.text = text;
    }
    setFill(fill) {
        this.fill = fill;
    }
}

// circle class
class circle extends shapes {
    render() {
        return `<circle cx="150" cy="100" r="85" fill="${this.color}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.fill}" font-family="Arial" font-size="60px">${this.text}</text>`;
    }
}

// square class
class square extends shapes {
    render() {
        return `<rect x="65" y="15" width="170" height="170" fill="${this.color}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.fill}" font-family="Arial" font-size="60px">${this.text}</text>`;
    }
}

// triangle class
class triangle extends shapes {
    render() {
        return `<polygon points="150,18 222,182 56,182" fill="${this.color}"/>
        <text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" fill="${this.fill}" font-family="Arial" font-size="45px">${this.text}</text>`;
    }
}

// export shapes
module.exports = {
    circle,
    square,
    triangle
}
