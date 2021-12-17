// you have to write a function that calculates the cost of shipping a piece of postage
// it cost 10 cents per ounce, plus $5 for overnight, and $10 for outside the continental us
// overnight and continental can be assumed false if not provided


function postageCost(postage){
    const {weight, overnight, continental} = postage || 0; //deconstructor
    let cost = weight * 0.10
    if (overnight == true)
    {
        cost += 5
    }
    if (continental == true)
    {
        cost += 10
    }

    return cost   
    // use object destructuring and default arguments in the destructuring to get the variables from the postaage object

}

test("overnight outside the continent shipping", ()=>{
    const cost = postageCost({weight:12, overnight:true, continental:true});                                           
    expect(cost).toBe(16.2);
});

test("just weight", ()=>{
    const cost = postageCost({weight:20});
    expect(cost).toBe(2);
});

test("overnight", ()=>{
    const cost = postageCost({weight:15, overnight:true});
    expect(cost).toBe(6.50);
})