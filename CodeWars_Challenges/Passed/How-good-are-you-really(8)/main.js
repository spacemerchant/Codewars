function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > (classPoints.reduce((a, v) => a + v) / classPoints.length)
}
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)

//Difficulty 1/5

//TOP SOLUTIONS//

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    var classAvg = 0;
    for (var i = 0; i < classPoints.length; i++){
      classAvg += classPoints[i]; 
    }
    classAvg = classAvg/classPoints.length; 
    return yourPoints > classAvg;
}