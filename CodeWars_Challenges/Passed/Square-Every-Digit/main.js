function squareDigits(num){
    let digitArray = num.toString().split('')
    squaredArray = []
    digitArray.forEach(int => {
       number = Number(int)
       squaredArray.push(number**2)
    });
    return (Number(squaredArray.join(''))); 
}
squareDigits(3212)


// Difficulty 1/5 // 

//Top solutions //

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
}