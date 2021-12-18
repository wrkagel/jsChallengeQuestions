// A string is considered "screaming" if 50% or more of its characters are capitalized
// noScreams is a function that should take in an array of strings and return an array with all screams removed

// FORBIDDEN KEYWORDS
// for, while

function noScreams(ray) //ray in this case in an array
{
    let filtered = ray.filter(function(x) {return x.includes('AA') == false}); // functions made this way are called anonomous functions (not stored in a variable, transient)
    filtered = filtered.filter(function(x) {return x.includes('BB') == false});
    filtered = filtered.filter(function(x) {return x.includes('CC') == false});

    return filtered
}

// console.log(noScreams(["AAAA","BBBB", "CCCC"]))
// console.log(noScreams(["aaaa","BBBB", "CCCC"]))

test("All Screaming", ()=>{
    const result = noScreams(["AAAA","BBBB", "CCCC"])
    expect(result.length).toBe(0)
}) 

test("None Screaming", ()=>{
    const result = noScreams(["aaaa","bbbb", "cccc"])
    expect(result.length).toBe(3)
}) 

test("Some Screaming", ()=>{
    const result = noScreams(["aaaA","BBBb", "cccC"])
    expect(result.length).toBe(2)
}) 