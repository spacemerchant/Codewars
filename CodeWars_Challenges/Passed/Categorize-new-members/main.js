function openOrSenior(data){
    let member = [];
    for (let i = 0; i < data.length; i++){
        let data2 = data[i]
        for (let i = 1; i <= 1; i++){
            if (data2[0] >= 55 && data2[1] > 7){
                member.push("Senior")
            } else {
                member.push("Open")
            }
        }
    }
    return member;
}
openOrSenior(([[45, 12],[55,21],[19, -2],[104, 20]]))

//CORRECT -- FIRST TRYY -- Difficulty 2/5 //



// Top Solution 
// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }
