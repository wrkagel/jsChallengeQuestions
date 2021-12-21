// write a function that takes in an array and reverses each word in the array then the array

function ultraReverse(ray){    
   return ray.map(x => x.split("").reverse().join("")).reverse()
}
// Called the array "ray", and use map to go through the elements
// (x=>x) for map, will runs until every element of the array is gone through, like a for loop
// I then split the elements into 3 elements seperated by commas (a,b,c ex.)
// reverse the contents of those elements (c,b,a ex.)
// join those elements then back together (cba ex.)
// then reverse the result of the map after it has run
// since it runs like a for loop it executes 3 times creating the end result (["zyx","fed","cba"])

test("Super Reverse", ()=>{
    let words = ["abc","def","xyz"]
    words = ultraReverse(words)
    expect(words).toEqual(["zyx","fed","cba"])
    
})