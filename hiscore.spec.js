// write a function that takes in a list of scores and returns a list of initials
// ordered from highest score to lowest
// Assume no duplicate scores

// FORBIDDEN KEYWORDS
// for, while
// hint use map and sort

function highScores(scores){
    //Solves in an overly complicated way using the Map class.
    sortedScores = scores.sort((a,b)=> b.points - a.points);
    let rankings = new Map();
    sortedScores.forEach(el=>rankings.set(el.initials, el.points));
    return [...rankings.keys()];
    //Actual solution.
//    return scores.sort((x, y) => y.points - x.points).map(x => x.initials);
}

test('High Scores',()=>{
    const scores = [
    {initials:"ACR", points: 1000},
    {initials:"JAG", points: 1200},
    {initials:"TED", points: 90},
    {initials:"AAA", points: 0}
    ]
    const ordered = highScores(scores)
    expect(ordered).toEqual(['JAG','ACR','TED','AAA'])

})