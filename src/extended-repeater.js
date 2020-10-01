const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let firstStr = '', secondStr = '', resultStr = '';
  if(options.separator === undefined) options.separator = '+'
  if(options.additionSeparator === undefined) options.additionSeparator = '|'

  if(options.repeatTimes === undefined && options.additionRepeatTimes !== undefined) {
    secondStr = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes)
    secondStr += secondStr + options.additionSeparator;
    resultStr = (str + secondStr).slice(0, -1);
    return resultStr;
  }
  if(options.repeatTimes !== undefined && options.additionRepeatTimes === undefined) {
    firstStr = (str + options.separator).repeat(options.repeatTimes)
    // firstStr += firstStr + options.additionSeparator;
    resultStr = firstStr.slice(0, -options.separator.length);
    return resultStr;
  }
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
