function enough(cap, on, wait) {
    let passengers = on + wait;
    if (passengers <= cap ){
        return 0;
    }
    if (passengers > cap){
        return passengers - cap;
    }
}

//Difficulty 1/5 


//TOP SOLUTIONS

function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
}


function enough(cap, on, wait) {
    return (on+wait > cap) ? on+wait-cap : 0;
}