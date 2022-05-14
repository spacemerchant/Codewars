function abbrevName(name){
    let split = name.split(' ')
    console.log(split)
    return (split[0][0] + '.' + split[1][0]).toUpperCase();
}
abbrevName("Sam Harris")

//Difficulty 0/5

//TOP SOLUTION//

function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}