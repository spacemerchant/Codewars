function positiveSum(arr) {
let sum = 0;

arr.forEach(element => {
    element > 0 ? sum += element : 0;
});
console.log(sum)
}

positiveSum([1,-2,3,4,5])

//Difficulty 1/5



//TOP SOLUTION 

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }