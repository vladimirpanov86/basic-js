const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(!Array.isArray(arr)) throw new Error();
  let resultArray = [... arr];
  // console.log(`after ${JSON.stringify(resultArray)}`)
  for(let i = 0; i < resultArray.length; i++) {
      switch (resultArray[i]) {
          case '--discard-next':
            resultArray[i] = undefined;
            resultArray[i+1] = undefined;
            break;
          case '--discard-prev':
            if(i === 0) {
              resultArray[i] = undefined;
              continue;
            }
            resultArray[i] = undefined;
            resultArray[i-1] = undefined;
            break;
          case '--double-next':
            if(resultArray[i+1] !== undefined) {
                resultArray[i] = resultArray[i+1];
            } else {
                resultArray[i] = undefined;
            }
            break;
          case '--double-prev':
            if(i === 0) {
              resultArray[i] = undefined;
              continue;
            }
            if(resultArray[i-1] !== undefined) {
                resultArray[i] = resultArray[i-1];
            } else {
                resultArray[i] = undefined;
            }
            break;
      }

  }
  // console.log(`after ${JSON.stringify(resultArray)}`)
  return resultArray.filter(e => e !== undefined);
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
