function highAndLow(numbers){
    let array = numbers.split(' ');
    let numArray = array.map(Number);
    let sortNumArray = numArray.sort(function(a,b){return a-b});
    return sortedNumbers = ((sortNumArray[sortNumArray.length-1]).toString() + " " + sortNumArray[0].toString());

}
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")


// Difficulty 1/5 //

//TOP SOLUTION //

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}