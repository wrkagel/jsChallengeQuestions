// write a function that takes in a list of scores and returns a list of intitals
// ordered from highest score to lowest
// Assume no duplicate scores

// FORBIDDEN KEYWORDS
// for, while
// hint use map and sort

/*
COMPLETED
*/

function highScores(scores){
    const initials = scores.sort((a, b) => b.points - a.points);
    // creating a variable (initials) thats grabbing the scores array
    // then with the sort method im focusing the comparison part to go off of the points
    // in decending order
        const results = initials.map(x => x.intials)
        // then creating the results variable im immediately taking the sorted array
        // and focusing the new array that is returned on the initials or (intials) section of the original array
        return results;
    }

test('High Scores',()=>{
    const scores = [
    {intials:"ACR", points: 1000},
    {intials:"JAG", points: 1200},
    {intials:"TED", points: 90},
    {intials:"AAA", points: 0}
    ]
    const ordered = highScores(scores)
    expect(ordered).toEqual(['JAG','ACR','TED','AAA'])

})