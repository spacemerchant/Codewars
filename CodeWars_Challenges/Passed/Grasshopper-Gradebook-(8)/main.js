function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3;
    if (average >= 90){
        return 'A';
    } else if (average < 90 && average >= 80){
        return 'B';
    } else if (average < 80 && average >= 70){
        return 'C';
    } else if (average < 70 && average >= 60){
        return 'D';
    } else if (average < 60){
        return 'F';
    }
}

//Difficulty 0/5

// TOP SOLUTIONS //

function getGrade (s1, s2, s3) {
    var s = (s1 + s2 + s3) / 3
    return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
  }