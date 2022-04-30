function sortArray(array) {
    let og = array.slice();
    let sorted = array.sort( (a,b) => {
        if (a % 2 !== 0){
            return a - b;
        }
    })
    let sortedArray = [];
    for (let i = 0; i < og.length; i++){
        if (i % 2 !== 0){
        
        }
    }
    console.log(sortedArray, sorted, og);
}
sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])


//Failed //

// Top Solution //

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}

// variable that holds a filtered array with only the sorted sorted odd variables. Both sorting odd integers and removing any even integers. 
// map function that says in the original array, is the variable even? If the variable is not even REMOVE the sorted variabe from the sorted array and add it to the mapped array. 
// If the variable is even return the variable. (This keeps the order in place).


function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => {
        if (x % 2){
            console.log(odd)
            return odd.shift()
        } else {
            console.log(x)
            return x
        }
    });
}

sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
