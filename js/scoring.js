exports.scoreThrows = function (array){
  let totalScore = 0;
  let counter = 0;
  let radius = 0;

  // check radius >=0 else >> "error"
  for (var i = 0; i < array.length ; i++) {
    if (array[i] < 0) {
      alert('Error in radius report!');
      return;
    } else {
      if (array[i] <5) {
        totalScore = totalScore + 10;
        counter ++;
      }
      if (array[i] >= 5 && array[i] <= 10) {
        totalScore = totalScore + 5;
      }
      if (array[i] > 10) {
        totalScore = totalScore;
      }
    }
  }
  if (counter === array.length) {
    totalScore = totalScore + 100;
  }

return totalScore;
};