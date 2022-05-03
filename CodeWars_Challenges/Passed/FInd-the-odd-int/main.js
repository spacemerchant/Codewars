function findOdd(A) {

   A.sort((a,b) => a-b)
   console.log(A)
   let odd;
   A.forEach(element => {
       if ((A.lastIndexOf(element) - A.indexOf(element) + 1) % 2 !==0 ){
           odd = element
       }
   });
   return odd
}
findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])

//Difficulty 2/5 

// TOP SOLUTIONS //

const findOdd = (xs) => xs.reduce((a, b) => a ^ b)

function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}
