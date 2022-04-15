function descendingOrder(n){

    let num = (n.toString().split('').sort())
    let numArr = []
    num.forEach( value =>{
        numArr.push(Number(value)) 
    });
    numArr.sort(function(a, b){return b - a})
    sorted = Number(numArr.join(''))
    console.log(sorted)
}
descendingOrder(123456789)

//difficulty 2/5 //



// TOP SOLUTION //
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}