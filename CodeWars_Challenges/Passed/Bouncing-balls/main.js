function bouncingBall(h,  bounce,  window) {
    if ((h > 0) && (bounce < 1 && bounce > 0) && window < h) {
        let ballPass = 0;
        let height = h - (h * (1-bounce));
        while (height > window){
            console.log(ballPass)
            height -= height * (1-bounce);
            ballPass += 1;
        }
        return ballPass * 2 + 1 ;
    } else{
        return -1
    }
}
bouncingBall(30, 0.66, 1.5)
//(3.0, 0.66, 1.5)


//Difficulty 1/5 

//TOP RESULTS //
function bouncingBall(h,  bounce,  window) {
    var rebounds = -1;
    if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
    return rebounds;
}