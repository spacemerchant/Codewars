function getCount(str) {
    var vowelsCount = 0;
    let strArray = str.split('')
    strArray.forEach( str => {
        if (str.includes("a") || str.includes("e") || str.includes("i") || str.includes("o") || str.includes("u")){
            vowelsCount += 1;
        }
    });
    
    return vowelsCount;
}

getCount('apples')

//Difficulty 1/5

