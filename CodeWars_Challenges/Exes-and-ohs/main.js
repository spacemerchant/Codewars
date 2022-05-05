function XO(str) {
    let x = 0;
    let o = 0;
    let array = str.toLowerCase().split('')
    array.forEach(element => {
        if ( element === 'x'){
            x += 1;
        } else if (element === 'o'){
            o += 1;
        }
    });
    return x === o;
}
XO("xxOo")

//Difficulty 0/5 //

//TOP SOLUTIONS //

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}