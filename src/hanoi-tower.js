const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1;
  let seconds = 0;
  let object = new Object();
  seconds = Math.floor(turns * 3600 / turnsSpeed);
  object.turns = turns;
  object.seconds = seconds;
  return object;
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
