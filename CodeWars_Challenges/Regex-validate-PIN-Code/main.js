function validatePIN (pin) {
    let arrayPin = pin.toString().split('')
    if (arrayPin.includes('\n')){
        return false
    }
    let numPin = arrayPin.map(Number);
    console.log(numPin)
    if (numPin.includes(NaN)){
        return false
    }
   
    if (numPin.length === 4 || numPin.length === 6){
        return true;
    }else {
        return false;
    }
}
console.log(validatePIN("123\n")); 
// COMPLETED // Featured weird 'edge case of /n' apparently /n when converted with Number converts to 0. 3/5