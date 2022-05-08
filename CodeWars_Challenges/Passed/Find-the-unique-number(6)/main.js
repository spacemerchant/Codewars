function findUniq(arr) {
    arr.sort((a,b) => a - b);
    if(arr[0] != arr[1]){
        return arr[0];
    } else {
        return arr[arr.length - 1];
    }
}
//Performance 2620ms

function findUniq(arr) {
    if (arr[0] !== arr[1] && arr[0] !== arr[2]){
        return arr[0];
    } else {
        for (let i = 0; i < arr.length; i++){
            if (arr[i] !== arr[0]){
                return arr[i];
            }
        }  
    }
}
findUniq([ 0, 1, 0 ])

//Refactored: performance 1217ms *Fastest algorithm | Faster than all top solutions ;)

//Difficulty 2/5 


//TOP SOLUTIONS

function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
//Performance 2103ms


function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
}
//Performance 2323ms

function findUniq(arr) {
    let [a,b,c] = arr.slice(0,3);
    if( a != b && a!=c ) return a;
    for( let x of arr ) if( x!=a ) return x
}
//Performance 1432ms

function findUniq(arr) {
    return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
}
//Performance 2536ms