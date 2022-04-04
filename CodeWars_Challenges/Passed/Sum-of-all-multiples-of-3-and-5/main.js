// original
function findSum(n) {
    let sum = 0;
    for (let i = 3; i <= n; i++){
        if (i % 3 === 0 || i % 5 == 0){
            sum += i;
        }
    }
    return sum
}
findSum()



// refactored
function findSum(n) {
    let sum = 0;
    for (let i = 3; i <= n; i++){
        (i % 3 === 0) || (i % 5 === 0) ? sum += i : 0;
    }
    return sum
}
findSum()