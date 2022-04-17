function towerBuilder(nFloors) {

    let tower = [''];
    let n = nFloors + 2;

    for (let i = 0; i < nFloors; i++){

        tower[i] = ''
        for(let j = 1; j < (n - i - 2); j++){
            tower[i] += ' ';
        }
        for(let q = 0; q < (i + 1); q++){
            tower[i] += '*';
        }
        for(let q = 1; q < (i + 1); q++){
            tower[i] += '*';
        }

        for(let k = 1; k < (n - i - 2); k++){
            tower[i] += ' ';
        }
    }
    return tower;
}
towerBuilder(3)

// Difficulty 4/5


// TOP SOLUTION //

function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
      tower.push(" ".repeat(nFloors - i - 1)
               + "*".repeat((i * 2)+ 1)
               + " ".repeat(nFloors - i - 1));
    }
    return tower;
  }

  /* Use of repeat function with concatination to push into each inde */