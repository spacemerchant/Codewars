function towerBuilder(nFloors) {

    let tower = [ ];

    for (let i = 0; i < nFloors; i++){
        for(let j = 0; j < (nFloors - i - 1); j++){
            tower[i] += ' '
        }
        for(let q = 0; q < (i + 1); q++){
            tower[i] += '*'
        }
        for(let j = 0; j < (nFloors - i - 1); j++){
            tower[i] += ' '
        }
    }
    console.log(tower);
}
towerBuilder(3)