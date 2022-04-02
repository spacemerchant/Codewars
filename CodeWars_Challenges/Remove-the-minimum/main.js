function removeSmallest(numbers) {
    let newNums = numbers
    let minimum = Infinity
    numbers.forEach(element => {
        if (element < minimum){
            minimum = element
        }

    });
    let minIndex = numbers.findIndex(nums => nums === minimum)
    return newNums.slice(0,minIndex).concat(newNums.slice(minIndex + 1,newNums.length))
}

removeSmallest([2, 2, 1, 2, 1]) 

