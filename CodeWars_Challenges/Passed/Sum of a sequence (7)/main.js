const sequenceSum = (begin, end, step) => {
    if (begin > end) {
        return 0
    }
    let sum = 0;
    for (let i = begin; i <= end; step > 1 ? i = i + (step) : i++) {
        sum += i;
    }
    return sum;
  };
sequenceSum(2,6,2)