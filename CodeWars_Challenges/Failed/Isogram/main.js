function isIsogram(str){
    if (str == '' || str == undefined){
        return true
    } else {
        lowerCase = str.toLowerCase()
        lowArray = lowerCase.split('')
        let strIsogram;
        let checkIt = function(lowArray){
            for (let i = 0; i < lowArray.length; i++){
                let repeat = 0
                lowArray.forEach(letter =>{
                    if (letter == lowArray[i]){
                        repeat += 1
                    }
                });
                console.log(repeat)
                if (repeat > 1){
                    return strIsogram = false
                } else {
                    return strIsogram = true
                }
            }
        }
        checkIt(lowArray)
        return strIsogram
    }        
}
isIsogram('Dermatoglyphics')

// DID NOT SOLVE
// LOOKED AT SOLUTION AFTER 01:30 HOURS

// SOLUTION:
function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i){
        for(j = i + 1; j < str.length; ++j){
            if(str[i] === str[j]){
                return false;
            }
        }
    }
    return true;
}


// Updating my solution: 

/* 
    * no need for if statement return true at end will make a type of implicit true return if false is not returned.
    * to lowercase is correct. Removes issues of string capitalization.
    * solution did not split into an array
    * My attempt correctly deduced two for loops would be needed; one to iterate through each string and one to check if the string
      is equal to the first iterated loops

*/
function isIsogram(str){
    let i, j; // declared two variables that were used in for loop 
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i){
        for(j = i + 1; j < str.length; ++j){ // used to check next letter (j = i + 1)
            if(str[i] === str[j]){ // if next letter is equal to current i loop letter return false
                return false;
            }
        }
    }
    return true;
}