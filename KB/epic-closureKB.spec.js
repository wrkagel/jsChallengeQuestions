// Write a function that takes in a value and number representing how deep to nest that value in a closure
// hint if the input is 10 that means the first 9 function calls return a function

//INPUT: value to nest, times to nest
//OUTPUT: function recursion followed by value at end

function epicClosure(value, times)
{   
    let i = 1 //keep this inside the function so it can be called/reset multiple times (global bug nonsense emerges otherwise)
    let innerFunc = function()
    {
        if (i == times)
        {
            return value
        }
        else
        {
            i++
            return innerFunc
        }             
    }
    return innerFunc  
}  
    
test("1", ()=>{
    const result = epicClosure(100,1)
    expect(result()).toBe(100) //returns a function
}) 


test("3", ()=>{
    const result = epicClosure(100,3)
    expect(result()()()).toBe(100) //returns a function which immediately calls itself two more times
})

test("10", ()=>{
    const result = epicClosure(100,10)
    expect(result()()()()()()()()()()).toBe(100)
})