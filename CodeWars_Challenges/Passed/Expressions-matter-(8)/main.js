function expressionMatter(a, b, c) {
    const A = a * b * c;
    const B = a + b + c;
    const C = (a + b) * c;
    const D = a * (b + c);
    const E = a * b + c; 
    const F = a + b * c;

    let sort = [A,B,C,D,E,F].sort((a,b) => a - b);
    return sort[sort.length - 1];
}

//Difficulty 1/5

//TOP SOLUTIONS//

function expressionMatter(a, b, c) {
    return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
}


function expressionMatter(a, b, c) {
    return Math.max(
      a + b + c,
      a * b * c,
      a * (b + c),
      (a + b) * c,
      a + b * c,
      a * b + c,
    );
  }