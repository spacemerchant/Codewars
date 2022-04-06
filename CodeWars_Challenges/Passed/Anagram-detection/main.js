// write the function isAnagram
var isAnagram = function(test, original) {
    test = test.toLowerCase(), original = original.toLowerCase();
    let testArray = test.split('').sort();
    let originalArray = original.split('').sort();

    if (testArray.length != originalArray.length){
        return false
    }
    for (let i = 0; i < testArray.length; i++){
        if ( testArray[i] != originalArray[i]){
            return false
        }
    }
    return true
}

// Best solution 
var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
};