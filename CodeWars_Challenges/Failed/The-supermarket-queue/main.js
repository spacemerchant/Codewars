function queueTime(customers, n) {
    if (customers.length === 0){
        return 0
    }

    let largestTime = (arr) => arr.reduce( function (acc, curr){
        return Math.max(acc,curr)
    });
    let smallestTime = (arr) => arr.reduce( function (acc, curr){
        return Math.min(acc,curr)
    });

    let totalTime = 0

    if ( n >= customers.length){
        return totalTime += largestTime(customers)
    }
    if (n < customers.length){
        for(let i = 0; i < customers.length; i++){

            totalTime += tillTime;

            for(let i = 0; i < n; i++){
                let tillTime = 0;
                if (customers[i] < tillTime){
                    tillTime += customers[i];
                }
            }
        }
    }
    return totalTime
}
queueTime([1,2,3,4], 2)

//Failed //

// TOP SOLUTION //
function queueTime(customers, registers) {
    let arr = [];
  
    for(let i = 0; i < registers; i++)
      arr[i] = 0;
  
    for(let i = 0; i < customers.length; i++) {
      arr[0] += customers[i];
      arr.sort((a, b) => a - b);
    }
  
    return arr[arr.length - 1];
  }