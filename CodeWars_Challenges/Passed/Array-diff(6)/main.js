function arrayDiff(a, b) {
    return a.filter( c => {
        if (!b.some( v => v === c)){return c;}
    })
}
arrayDiff([1,2,3], [1,2])

//Time 875ms

//Difficulty 2/5

//TOP SOLUTIONS//
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}
//796ms

function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
}
//905ms