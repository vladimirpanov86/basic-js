const CustomError = require("../extensions/custom-error");
const testOptional = require("../extensions/it-optional");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let result = '';
  const sortedArray = members.filter(e => typeof e === 'string').map(e => {return e.trim().toUpperCase()})

  for(const element of sortedArray.sort()) {
    if(typeof element !== 'string') {
      continue;
    } else {
      result += element[0];
    }
  }
  return result;
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
