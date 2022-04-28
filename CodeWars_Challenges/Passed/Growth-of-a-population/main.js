function nbYear(p0, percent, aug, p) {
    let nYears = 0;
    percent = (percent / 100);

    while (p0 < p){
        p0 += Math.floor((p0*percent) + (aug));
        nYears += 1;
    }
    return nYears;
}
nbYear(1000, 2, 50, 1214)

// Difficulty 2/5 
/* Got stuck on Math.floor() because in a population, there cannot be fractional amount of people */


//TOP SOLUTION //


function nbYear(p0, percent, aug, p) {
    
    for (var years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
}