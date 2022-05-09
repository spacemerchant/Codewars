function alphabetPosition(text) {
    let array = text.toLowerCase().split(' ');
    let key = [null,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let position = []
    array.map( (input) => {
        for (let i = 0; i < input.length; i++){
            position.push(key.indexOf(input[i]));
        }
    });
    return position.filter(value => value >= 1).join(' ');
}
alphabetPosition("The sunset sets at twelve o' clock.");

//Difficulty 2/5 


//TOP SOLUTIONS//

function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
}


function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length-1);
}

let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');


function alphabetPosition(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); //***//
    return text.toLowerCase().split('')
    .filter( letter => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    }  )
    .map( letter => alphabet.indexOf(letter) + 1 )
    .join(' ')
}