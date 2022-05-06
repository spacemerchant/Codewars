function findNb(m) {
    let cubes = 0, volume = 0;
    while (volume < m){
        cubes += 1;
        volume += Math.pow(cubes,3);
    }
    return volume == m ? cubes : -1;
}
findNb(4183059834009);
findNb(24723578342962);


// Difficulty 1/5//

//TOP SOLUTION//

function findNb(m) {
    var n = 0
    while (m > 0) m -= ++n**3
    return m ? -1 : n
}