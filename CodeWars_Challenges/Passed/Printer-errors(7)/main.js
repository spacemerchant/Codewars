function printerError(s) {
    let valid = ('abcdefghijklm').split('')
    let array = s.split('')
    let error =  array.filter( c => {
        if (!valid.some( v => v === c)){return c;}
    })
    return `${error.length}/${s.length}`
}
printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz");

//Difficulty 2/5

//TOP SOLUTIONS//

function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}

const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;