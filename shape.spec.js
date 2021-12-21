
// create a Shape class 
// the constructor should take in the sides and length
// You should assume all sides are the same length 
// the class should hold a variable count which tracks the total shapes created
// the class should have the method
// getPerimeter
// you should throw an BadShape Error if the either sides < 3 or length is less 0

/*
COMPLETED
*/

class Shape{
                                                        // static shapecount is shared within the class
    static shapeCount = 0;                              // default to 0 and then do Shape.shapeCount++ to 
                                                        // take the chapesount in the shape class and adding it 
                                                        // everytime it is called
    constructor (sides = 0, length = 0){                // create a constructor with default values, you use the (this.)
        this.sides = sides;                             // because you are in a class constructor, create an if statement
        this.length = length;                           // to check the shape is "good", by the sides and length variables
        Shape.shapeCount++;                             // if the sides || length aren't valid you throw NEW badShape class
        if (this.sides < 3 || this.length < 0){         // with an error string
            throw new BadShape('You done did it')   
        }
    }                                                   // create a getPerimeter method and return the variables
                                                        // they are the (this.) because they are already applied to the class
    getPerimeter (){                                    // multiply them to get the result to then run the tests
        return this.sides * this.length;
    }
}

class BadShape{
    
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