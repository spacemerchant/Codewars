function disemvowel(str) {
    let words = str.split(' ');
    console.log(words);
    function valCheck(letter){
        low = letter.toLowerCase();
        if (low != 'a' && low != 'e' && low != 'i' && low != 'o' && low != 'u'){
            return letter;
        }
    }
    let lowVal=[];
    for (let i = 0; i < words.length; i++){
        let noValWords = []
        for(let j = 0; j < words[i].length; j++){
            noValWords.push(valCheck(words[i][j]))
        }
        lowVal.push(noValWords.join(''))
    }
    console.log(lowVal.join(' '))
}
disemvowel("This website is for losers LOL!")

//Difficulty 5/5 // Took over 3 hours to solve

// Top Solution// 

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, ''); 
    
/*
g tells to find all matches, not just the first.

i tells to be case insensitive.

What goes inside the // is the pattern.

[] tells to match any character in a set.

aeiou are the characters in the set. 
*/
  }