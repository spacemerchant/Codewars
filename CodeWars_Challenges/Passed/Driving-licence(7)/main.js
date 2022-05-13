function driver(data) {
    let liscenseNumber ='';
    if (data[2].length >= 5){
        liscenseNumber += data[2].slice(0,5);
    } else {
        liscenseNumber += data[2].slice(0,data[2].length);
        while(liscenseNumber.length < 5){
            liscenseNumber += '9';
        }
    }
    let dob = data[3].split('-');
    liscenseNumber += dob[2][2];
    let month = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
    let dobMonth;
        month.forEach( (string,i) => {
            let regex = new RegExp(dob[1], 'i');
            if (regex.test(string)){
                (i + 1) < 10 ? dobMonth = '0' + `${i + 1}` : dobMonth = i + 1;
            }
        })
    if (data[4] ==='F'){
        dobMonth = dobMonth.toString();
        liscenseNumber += (((Number(dobMonth[0])) + 5 + dobMonth[1]).toString());
    } else {
        liscenseNumber += dobMonth;
    }
    liscenseNumber += dob[0] + dob[2][3];
    if (data[1] === ''){
        liscenseNumber += data[0][0] + '9';
    } else {
        liscenseNumber += data[0][0] + data[1][0];
    }
    liscenseNumber += '9' + 'AA'
    return liscenseNumber.toUpperCase();
}
driver(["Johanna","","Gibbs","13-Dec-1981","F"]);

//Difficulty 4/5

//TOP SOLUTIONS
function driver(data) {
    var name = (data[2].slice(0,5).toUpperCase() +'99999').slice(0,5);    // 5
    var dob = new Date(data[3]);
    var dec = (dob.getYear().toString().length==2 ? dob.getYear().toString()[0] : dob.getYear().toString()[1]);  // 1
    var month = (data[4] == "M" ? ("0" + (dob.getMonth()+1).toString()).slice(-2) : dob.getMonth()+51);
    var day = ("0" + dob.getDate().toString()).slice(-2);
    var yearDig = dob.getYear().toString().slice(-1);
    var inits = data[0][0] + (data[1]=="" ? "9" : data[1][0])
    var arb1 = "9"
    var arb2 = "AA"
    return name + dec + month + day + yearDig + inits + arb1 + arb2
}