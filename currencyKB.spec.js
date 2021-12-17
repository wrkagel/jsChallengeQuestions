// write a function that takes in a number and gives back the output in USD
// with appropriate precision
// negative amounts should throw an error

function usd(amount){
    if (amount >= 0)
    {
        return ("$" + amount.toFixed(2))
    }
    else
    {
        console.log("The number can't be negative")
    }


}
//console.log(usd(100))

test("100 dollars", ()=>{
    const result = usd(100)
    expect(result).toBe("$100.00")
})

test("91.3688 dollars", ()=>{
    const result = usd(91.3688)
    expect(result).toBe('$91.37')
})

