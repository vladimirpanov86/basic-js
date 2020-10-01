const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date=0) {
  if(date === `undefined` || date === 0) return `Unable to determine the time of year!`;
  if(Object.prototype.toString.call(date) !== '[object Date]') throw `Unable to determine the time of year!`;

  if(date.getMonth() === 11 || (date.getMonth() <= 1 && date.getMonth() >= 0)) return `winter`;
  if(date.getMonth() >= 2 && date.getMonth() <= 4) return `spring`;
  if(date.getMonth() >= 5 && date.getMonth() <= 7) return `summer`;
  if(date.getMonth() >= 8 && date.getMonth() <= 10) return `autumn/fall`;
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
