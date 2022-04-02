function getMiddle(s)
{
  if (s.length % 2 == 0){
   let middleOne = s[(Math.floor(s.length / 2) - 1)];
   let middleTwo = s[(Math.floor(s.length / 2))];
   return middleOne + middleTwo;
  } else {
      return s[(Math.floor(s.length / 2))]
  }
}

getMiddle('Mant')