var uniqueInOrder=function(iterable){
    let iterableArray;
    let iterableCheck = () => {
        if (Array.isArray(iterable)){
            iterableArray = iterable
        } else {
            iterableArray = iterable.split('')
        }
    }
    iterableCheck();
    let unique = [];
    for (let i = 0; i < iterableArray.length; i++){
        if (iterableArray[i] !== unique[unique.length - 1]){
            unique.push(iterableArray[i])
        }
    }
    return unique
}

// Difficulty 3/5 // 

// Top Solutions //
function uniqueInOrder(it) {
    var result = []
    var last
    
    for (var i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }
    
    return result
  }

//

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}