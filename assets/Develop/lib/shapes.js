class shape {
    constructor (shape, shapeColor, text, textColor){
        this.shape = shape
        this.shapeColor = shapeColor 
        this.text = text
        this.textColor = textColor
    }
};

class Circle extends shape {
    constructor (shape, shapeColor, text, textColor){
        super(shape, shapeColor, text, textColor)
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
};

class Square extends shape {
    constructor (shape, shapeColor, text, textColor){
        super(shape, shapeColor, text, textColor)
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="100" style="fill:${this.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" /> 
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
      `
    }
};

class Triangle extends shape {
    constructor (shape, shapeColor, text, textColor){
        super(shape, shapeColor, text, textColor)
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,15 100,100 0,100" style="fill:${this.shapeColor};stroke:purple;stroke-width:1" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
};

module.exports = {
    Circle, Square, Triangle
};