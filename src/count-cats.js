const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let countCat = 0;
  let rowArray = array.length;
  for(let i = 0; i < rowArray; i++) {
    for(let j = 0; j < array[i].length; j++) {
      if(array[i][j] == '^^') {
        countCat++;
      }
    }
  }
  return countCat;
};