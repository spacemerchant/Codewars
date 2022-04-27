function friend(friends){
    return friends.filter( value => value.length == 4 && ( value.toUpperCase() != value.toLowerCase() || value.codePointAt(0) > 127 ) )
}
friend(['Boris', 'Rachel', 'Chris', 'Max', 'Lisa', 'Ryan', 'Kieran', 'Mark'])


//Difficulty 2/5 //

//TOP SOLUTIONS //

function friend(friends){
    //your code here
    var realFriends = [];
    for(i=0; i<friends.length; i++){
      if(friends[i].length == 4 && isNaN(friends[i])){ //could have used isNan()
        realFriends.push(friends[i]);
      }
    }
    
    return realFriends
}