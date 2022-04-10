// Original //
function capitalize(s){
    let evenS = s.split('')
    let oddS = s.split('')
    for (i = 0; i < s.length; i++) {
        if ( i === 0 || i % 2 === 0){
            evenS[i] = evenS[i].toUpperCase()
        }
    }
    for (i = 0; i < s.length; i++){
        if (i === 1 || i % 2 !== 0){
           oddS[i] = oddS[i].toUpperCase()
        }
    }
    return ar = [evenS.join(''), oddS.join('')];
};
capitalize('abcdef')

// Difficulty 2/5.


// Refactored // replaced if statements with ternary operators for cleaner code. Combined into one for loop
function capitalize(s){
    let evenS = s.split('')
    let oddS = s.split('')
    for (i = 0; i < s.length; i++) {
        ( i === 0 || i % 2 === 0) ? evenS[i] = evenS[i].toUpperCase() : 0;
        (i === 1 || i % 2 !== 0) ? oddS[i] = oddS[i].toUpperCase(): 0;
    }
    return ar = [evenS.join(''), oddS.join('')];
};

// Top solutions //

function capitalize(s){
    return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
  };




  function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };