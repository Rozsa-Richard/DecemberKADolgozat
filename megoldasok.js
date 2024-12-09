function getMiddle(s) {
    const lenght = s.length;
    const middle = Math.floor(lenght/2);
    if (lenght %2 !==0){
      return s[middle];
    }
    return s[middle -1] +s[middle];
}

var isSquare = function(n){
    if (n< 0){
      return false;
    }
    const sqrtN = Math.sqrt(n);
    return Number.isInteger(sqrtN)
}

function stringClean(s){
    return s.replace(/[0-9]/g, '');
}
function bmi(weight, height) {
    const bmi = weight/(height*height);
    if (bmi <= 18.5){
      return "Underweight";
    }
    else if (bmi <= 25){
      return "Normal";
    }
    else if (bmi <= 30){
      return "Overweight";
    }
    else if (bmi > 30){
      return "Obese";
    }
  }