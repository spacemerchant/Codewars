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

number([[5,3], [6,2], [8,2], [1,10]]);
