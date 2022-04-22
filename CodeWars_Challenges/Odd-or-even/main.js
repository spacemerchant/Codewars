function oddOrEven(array) {
    let sum = 0
    array.forEach(element => {
        sum += element
    });
    console.log(sum)
    let result = sum % 2 ? "odd" : "even"
    return result
}
oddOrEven([1023, 1, 2])

//Difficulty 1/5

//Top solutions

function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}