// write a function that takes in a number and gives back the output in USD
// with appropriate precision
// negative amounts should throw an error

/*
COMPLETED
*/
function usd(amount = 0){
    if (amount < 0){
        throw 'Error';
    }
    else {
        let decimal = amount.toFixed(2);
        return `$${decimal}`;
    }
    // create an if statment to first make sure there is an actual value, if not throw and error
    // but if there is "usd" you have to account for the deicmals to be included
    // creating the variable decimal and using the .toFixed(2) method, fixes the deicmal point to 2 after the decimal shown
    // then return the template literal `$${decimal}`, a shorter version of a concatenated string
}

test("100 dollars", ()=>{
    const result = usd(100)
    expect(result).toBe("$100.00")
})

test("91.3688 dollars", ()=>{
    const result = usd(91.3688)
    expect(result).toBe('$91.37')
})

