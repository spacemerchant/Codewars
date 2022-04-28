var number = function(busStops){
    return busStops.reduce((acc,v) => acc + (v[0] - v[1]), 0)
}

//Difficulty 1/5 

//Previous attempt ()

var number = function(busStops){
    let onTheBus = 0;
    for(let i = 0; i < busStops.length; i++){
        let arr = busStops[i];

        for (let i = 0; i < arr.length; i++ ){
            i == 0 ? onTheBus += arr[0] : onTheBus -= arr[1];
        }
    }
    console.log(onTheBus);
    return onTheBus;
}

/* Used two for loops in order to breakdown array nesting. New solution is much more streamlined and effective */


//Top solution //

const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)