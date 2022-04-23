function countPositivesSumNegatives(input) {
    if (input == [0,0] || input == null){
        return []
    }
    let answer = []
    let positive = 0;
    let negative = 0;
    for (let i = 0; i < input.length; i++){
        if (input[i] > 0){
            positive += 1;
        } else if (input[i] < 0){
            negative += input[i];
        }
    }
    answer = [positive,negative]
    return answer

}

// Failed

// Top Solutions //

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0) // INPUT LENGTH!
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative]; // Can return an array directly no need to create a variable
}



function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}