function sumDigits(number) {
    let splitIt = number.toString().split('');
    let sum = 0;
    splitIt.forEach( int => int > 0 ? sum +=Number(int) : 0);
    console.log(sum)
  }
sumDigits(52)
