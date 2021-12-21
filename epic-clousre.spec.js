// Write a function that takes in a value and number representing how deep to nest that value in a closure
// hint if the input is 10 that means the first 9 function calls return a function

/*
COMPLETED
*/

function epicClosure(value, times ){
    if(times > 1){                                          // if times is greater than 1, you will return the function 
        return ()=> {return epicClosure(value, --times)}    // *arrow function* *()=>{}* 
                                                            // within that function you return a "RECURSIVE FUNCTION",
                                                            // which is a function that calls itself
    } else {                                                // while also having to subtract 1 from times to stop it from being an infinite loop        
        return ()=> {return (value)}                        // when times equals 1 you then return the function that equals the value
    }
}
                                                            // think russian dolls

test("1", ()=>{
    const result = epicClosure(100,1)
    expect(result()).toBe(100)
}) 


test("3", ()=>{
    const result = epicClosure(100,3)
    expect(result()()()).toBe(100)
})

test("10", ()=>{
    const result = epicClosure(100,10)
    expect(result()()()()()()()()()()).toBe(100)
})