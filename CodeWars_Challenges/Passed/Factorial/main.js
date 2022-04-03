function factorial(n)
{
    if (n > 12 || n < 0) {
        throw new RangeError('n must be greater than 0 or less than 12')
    }
    if (n === 0){return 1};
    let factorial = 1;
    for (let i = n; i > 1; i--){
        factorial = factorial * i;
    }
    return factorial
}

factorial(0);