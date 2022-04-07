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

//CORRECT//



// Top Solution 

