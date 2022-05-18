function isPangram(string){
    let count = [];
    let array = string.toLowerCase().split('').filter(v => v !== ' ' && v !== '.');
    if (array.length < 26){
        return false;
    }
    for (let i = 0; i < array.length; i++){
        if (!count.includes(array[i])){
            count.push(array[i])
        }
    }
    return count.length >= 26;
}
isPangram("The quick brown fox jumps over the lazy dog.")
// 899ms



//Difficulty 3/5 //


// TOP SOLUTIONS //

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}
//917ms


function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}
//873ms

function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}
//913ms