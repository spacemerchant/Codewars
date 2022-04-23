function invert(array) {
    let inverse =[]
    array.forEach(element => {
        element === 0 ? inverse.push(-0) : inverse.push(element * -1)
    });
    return inverse
}

// Difficulty 1/5 //

//Top Solutions //

function invert(array) {
    return array.map( x => x === 0 ? x : -x);
}