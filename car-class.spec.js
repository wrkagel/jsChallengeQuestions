// Create a car 'Class' the old-school way
// Classes and consturctor functions with new in JS are actually just syntatic sugar for nested functions and closures

// the car 'Class' should return an object with 4 properties
// make: a string with the make of the ccar
// model: a string with the model of the car
// getMileage: a method that returns the mileage of the car
// drive: a method that increases the mileage by a certain amount


// FORBIDDEN KEYWORDS
// class, set, get, this, new (yes no new keyword)

/*
COMPLETED
*/

function Car(carMake, carModel, startingMileage = 0){
    const make = carMake;                       // create the variables make model mileage, mileage being able to change
    const model = carModel;                     // set a default parameter for starting mileage to ensure 
    let mileage = startingMileage;              // there is no mileage at the beginning
                                                // set a function to get the mileage and return it
    function getMileage(){                      // create drive function to allow distance to be added to mileage
        return mileage;                         // several different ways to do that addition
    }                                           // then return the variables and functions

    function drive(dist){
        mileage += dist;
        // mileage = mileage + dist;

        // These are the same thing
        // mileage++;
        // mileage += 1;
        // mileage = mileage + 1;
    }

    return{make, model, drive, getMileage};

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