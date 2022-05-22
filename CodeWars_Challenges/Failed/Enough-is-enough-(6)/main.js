function deleteNth(arr,n){
    console.log(arr,n)
    let enough = [];
    for (let i = 0; i < arr.length; i++){
        let count = 0;
        for (let j = i; j < arr.length; j++){

            if (arr[i] === arr[j]){
                console.log(arr[j])
                count += 1;
            }
            if (count > n){
                // console.log(`count:${count}`)
                // console.log(`current: ${arr[j]}`)
                arr.splice(j,1);
            }
        }
    }
    return arr
}
deleteNth([ 1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1 ], 3)


//Difficulty 4/5


//TOP SOLUTIONS

function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
}


const deleteNth = (a, x) => {
    let m = {};
    return a.filter( v => (m[v] = m[v]+1||1) <= x );
}
