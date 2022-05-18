function order(words){
    let array = words.split(' ');
    let order = [];
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
            if (Number(array[i][j]) > 0){
                let num = array[i][j]
                console.log(array[i][j])
                order[num-1] = array[i];
            }
        }
    }
    return order.join(' ');
}
// 930ms
order("is2 Thi1s T4est 3a");

//Difficulty 3/5 


//TOP SOLUTIONS//

function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
}
// 984ms


var reg = /\d/;

function order(words){
  return words.split(' ').sort(comparator).join(' ');
}

function comparator(word, nextWord) {
  return +word.match(reg) - +nextWord.match(reg)
}
//1007ms


function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    for(i = 0; i <= array.length; i++) {
      for(j = 0; j < array.length; j++) {
        if(array[j].indexOf(i) >= 0) {
          sortedArray.push(array[j]);
        }
      }
    }
    return sortedArray.join(' ');
}
//1035ms


function order(words) {
    return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
}
//Didn't work