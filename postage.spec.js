// you have to write a function that calculates the cost of shipping a piece of postage
// it cost 10 cents per ounce, plus $5 for overnight, and $10 for outside the continental us
// overnight and continental can be assumed false if not provided

/*
COMPLETED
*/

function postageCost(postage){
    // use object destructuring and default arguments in the destructuring
    // to get the variables from the postage object
    
    const {weight = 0, overnight = false, continental = false} = postage;
        let cost = 0
        if(overnight){
            cost += 5;
        }
        if (continental){
            cost += 10;
        }
        return (weight * .1) + cost; 

}
// destruct the object postage into several variables, weight, overnight, continental
// assign them default value, two of which you just put false if value not given
// create an additional cost value to check if there is a change in overnight or continental
// if so you add cost of that value to the total
// cost += 5/10     means      cost = cost plus 5    then cost now = 5
// so if you add the 10 next it creates 15
// return weight *'s a dimes value + cost(s)

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
});
