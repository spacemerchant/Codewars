var min = function(list){
    list.sort((a,b) => {
       return a - b
    });
    return list[0];
}
min ([5,8,3,9,1,0])

var max = function(list){
    list.sort((a,b) => {
        return b - a
     });
    return list[0];
}
max ([5,8,3,9,1,0])

//Difficulty 0/5 //

//TOP SOLUTION //
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);