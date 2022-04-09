function repeater(string, n){
    let repeat = [];
    for (let i = 0; i < n; i++){
        repeat.push(string)
    }
    return repeat.join('')
}
repeater('ban',5)


// COMPLETED // Difficulty: 1/5

// Top Solution //
function repeater(string, n){
    return string.repeat(n) // repeat method for string //
}