function firstNonConsecutive (arr) {
    for( let i = 1; i < arr.length; i++){
        if (arr[i] !== (arr[i-1] + 1)){
            return arr[i];
        }
    }
    return null
}
firstNonConsecutive([1,2,3,4,5,6,7,8])

//Difficulty//

//TOP SOLUTIONS//

function firstNonConsecutive (arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);

    return (Number.isInteger(result)) ? result : null;
}