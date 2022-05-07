//return the total number of smiling faces in the array
function countSmileys(arr) {
    let smiley = 0;
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i],arr[i].length)
        if (arr[i].length === 2) {
            if ((arr[i][0] === ':' || arr[i][0] === ';') && (arr[i][1] === ')' || arr[i][1] === 'D' )){
                smiley += 1;
            }
        }
        if (arr[i].length === 3){
            if ((arr[i][0] === ':' || arr[i][0] === ';') && (arr[i][1] === '-' || arr[i][1] === '~') && (arr[i][2] === ')' || arr[i][2] === 'D' )){
                smiley += 1;
            }
        }
    }
    return smiley
}
countSmileys([':D',':~)',';~D',':)'])

//Difficulty 3/5 // 

//TOP SOLUTIONS //

function countSmileys(arr) {
    var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
    var count = 0;
    
    for (var i=0; i<arr.length; i++){
      for (var j=0; j<smileys.length; j++){
        if (arr[i]===smileys[j]){
          count++;
        }
      }
      }
    return count;
    }