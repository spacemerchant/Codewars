function high(x){
    let letterValue = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let array = x.split(' ')
    let wordsV = []
    for(let i = 0; i < array.length; i++){
        let words = array[i].split('');
        let value = 0;
        words.forEach( val => value += letterValue.indexOf(val) + 1)
        wordsV.push(value)
    }
    console.log(array)
    return array[(wordsV.indexOf(Math.max(...wordsV)))]
}
let x = 'aa b'
high(x)

//Difficulty 4/5 

//TOP SOLUTIONS 

function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}