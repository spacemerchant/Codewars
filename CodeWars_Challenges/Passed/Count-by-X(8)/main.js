function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++){
        z.push(x * i);
    }
    return z;
}

//Difficulty 0/5//

//TOP SOLUTIONS//

const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)