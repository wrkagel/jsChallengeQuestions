// write a function that takes in an array and reverses each word in the array then the array

function ultraReverse(ray){
    const newRay = ray.reverse()
    for (let i = 0; i < newRay.length; i++){
        newRay[i] = newRay[i].split('').reverse().join('')
    }
    return newRay

}

test("Super Reverse", ()=>{
    let words = ["abc","def","xyz"]
    words = ultraReverse(words)
    expect(words).toEqual(["zyx","fed","cba"])
    
})