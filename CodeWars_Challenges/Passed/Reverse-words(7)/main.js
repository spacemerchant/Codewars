function reverseWords(str) {
    let array = str.split(' ');
    let reverse = [];
    array.forEach(element => {
        reverse.push(element.split('').reverse().join(''))
    });
    return reverse.join(' ');
}
reverseWords('The quick brown fox jumps over the lazy dog.')