function DNAStrand(dna){
    let dnaArray = dna.split('');
    return dnaArray.map( v => {
        if (v === 'A'){
            return 'T';
        }
        if (v === 'C'){
            return 'G';
        }
        if (v === 'T'){
            return 'A';
        }
        if (v === 'G'){
            return 'C';
        }
    }).join('')
}

//Difficulty 1/5


//TOP SOLUTIONS//

function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}

var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);