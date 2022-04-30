function comp(array1, array2){
    if(array1 === null || array2 === null){return false}
    if ((array1.length === 0 || array2.length === 0) && !(array1.length === 0 && array2.length === 0)){
        return false
    }
    array1 = array1.sort((a,b) => a - b )
    let a2Square = array2.map( e => e**2).sort((a,b) => a - b )
    let a2Route = array2.map(e => Math.sqrt(e)).sort(((a,b) => a - b ))
    
    return array1.every((v, i) => v === a2Square[i]) || array1.every((v, i) => v === a2Route[i])
}

//Difficulty 4/5

//PSEUDOCODE REALLY HELPED! GOT SORT IDEA AFTER DIFFUSED THINKING WALK!!

/*
Create two arrays of a2:
    a2-1 is the square root of the array
    a2-2 is the square of the array

look through a1
    for each element is it found in a2-1 or in a2-2
    if yes return

*/


// TOP SOLUTIONS //

function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
}


function comp(a, b) {
    return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}