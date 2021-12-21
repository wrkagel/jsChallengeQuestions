
// create a Shape class 
// the constructor should take in the sides and length
// You should assume all sides are the same length 
// the class should hold a variable count which tracks the total shapes created
// the class should have the method
// getPerimeter
// you should throw an BadShape Error if the either sides < 3 or length is less 0
class Shape{

    static count = 0;

    constructor(sides, length){
        if (sides < 3) throw new BadShape(`sides: ${sides} invalid. Sides must be 3 or greater`);
        if (length < 0) throw new BadShape(`length: ${length} invalid. Length must be 0 or greater`);
        this.sides = sides;
        this.length = length;
        Shape.count++;
    }

    getPerimeter() {
        return this.sides * this.length;
    }

}

class BadShape extends Error{
    
    constructor(message) {
        super(message);
        this.name = "Bad Shape Error.";
    }

}

test("Triangle", ()=>{
    const triangle = new Shape(3,10)
    expect(triangle.getPerimeter()).toBe(30)
})

test("Square", ()=>{
    const square = new Shape(4,10)
    expect(square.getPerimeter()).toBe(40)
})

test("negative-triangle",()=>{
    expect(()=>{
        const square = new Shape(3,-10)
    }).toThrow(BadShape)
})

test("line",()=>{
    expect(()=>{
        const square = new Shape(2,100)
    }).toThrow(BadShape)
})