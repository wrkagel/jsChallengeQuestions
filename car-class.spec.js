// Create a car 'Class' the old-school way
// Classes and constructor functions with new in JS are actually just syntactic sugar for nested functions and closures

// the car 'Class' should return an object with 4 properties
// make: a string with the make of the car
// model: a string with the model of the car
// getMileage: a method that returns the mileage of the car
// drive: a method that increases the mileage by a certain amount


// FORBIDDEN KEYWORDS
// class, set, get, this, new (yes no new keyword)


const Car = (make, model) => {
    let mileage = 0;
    return {
        make,
        model, 
        getMileage: () => mileage, 
        drive: miles => {mileage+=miles}
    };
}

test("Make a car", ()=>{
    const car = Car("Subaru","Crosstrek")
    expect(car.make).toBe("Subaru")
    expect(car.model).toBe("Crosstrek")
})

test("Driving a car", ()=>{
    const car = Car("Subaru","Crosstrek")
    expect(car.getMileage()).toBe(0)
    car.drive(300)
    expect(car.getMileage()).toBe(300) 
})