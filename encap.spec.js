// create a function that uses a closure to encapsulate a value
// the function should return an array where the first function is a getter, and the second a setter
// the function should have a second optional parameter that defines a custom setter 
/*
COMPLETED
*/


function encapsulate(value, set){// not two parameters but parameter and callback function
    let num = value;             // assigned the parameter value to num, then returned that value thru getter function
                                 // the set value function is for if they put in a new value for num
    function getValue(){         // that creates a different result because a new value was assigned
        return num;              // if the function is asked to use the callback funtion the option is then called
    }                            // the if statment is deciding which setter to send back depending on if a callback function is used
    function setValue(newValue){   
        num = newValue;
    }
    function option(newValue){
        num = set(newValue);
    }

    if(set){
    return [getValue, option];
    }else{
    return [getValue, setValue];
    }
    
}

test("simple encap",()=>{
    const [getValue,setValue] = encapsulate(100)
    expect(getValue()).toBe(100)
    setValue(1000)
    expect(getValue()).toBe(1000)

}) 

test("Advanced encap", ()=>{
    const noNegative = function(value) {
        if(value < 0){
            return 0
        }else{
            return value
        } 
    }
    const [getValue,setValue] = encapsulate(100, noNegative)
    setValue(-99)
    expect(getValue()).toBe(0)
}) 