// write a function that takes in a list of scores and returns a list of intitals
// ordered from highest score to lowest
// Assume no duplicate scores

// FORBIDDEN KEYWORDS
// for, while
// hint use map and sort

//map(): creates a new array from calling a function for every array element.
//sort(): sort elements, ascending order by default

function getInitials(scores)
{
    //console.log(scores.intials)
    return scores.intials
}

function highScores(scores){
   
    //sort scores from lowest points to highest descending order
    scores.sort((firstItem, secondItem) => secondItem.points - firstItem.points); // same as scores.sort( function(firstItem, secondItem) {return secondItem.points - firstItem.points});
    
    //I do realize all of this can be replaced with the following:, but it feels naughty.
    //const sortedScores = [scores[0].initials, scores[1].initials, scores[2].initials, scores[3].initials];
    
    //console.log(scores)
    //console.log("scores second " + scores)
    newScores = scores.map(getInitials) //scores can't just call map, a new variable has to be assigned to it!!
    return newScores
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