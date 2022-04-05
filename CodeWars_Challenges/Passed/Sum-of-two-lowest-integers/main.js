function sumTwoSmallestNumbers(numbers) {  
   let sorted = numbers.sort((function(a, b){return a-b}));
   return sorted[0]+sorted[1]
}