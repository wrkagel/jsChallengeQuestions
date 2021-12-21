// A string is considered "screaming" if 50% or more of its characters are capitalized
// noScreams is a function that should take in an array of strings and return an array with all screams removed

// FORBIDDEN KEYWORDS
// for, while
// remove all that are screams from the array
// filter is the way to go, 

function noScreams(ray){
    return ray.filter(yelp => yelp.replace(/[A-Z]/g, "").length > 2)
}
// filtering through the array "ray", I changed the strings to "yelp" considering they are yelling
// while running the filter I replaced all the capitalized characters with nothing
// that removed them from the strings they are in
// then whilst still in the filter, checked the length to be greater than 50%
// returned the ending result

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