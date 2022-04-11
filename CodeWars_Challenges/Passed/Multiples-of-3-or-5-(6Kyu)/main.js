function solution(number){
    let sum = 0;
    for (let i = 1; i < number; i++){
        if (i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum
}

// Difficulty: 1/5//
// First Level 6 Kyu completed ^_^



// Top Solution // Identical to mine :)
function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }