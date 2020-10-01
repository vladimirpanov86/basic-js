const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.level = 0;
    this.maxLevel = 0;
  }

  calculateDepth(arr) {
    if(Array.isArray(arr)) {
      this.level++;
      this.maxLevel = this.maxLevel < this.level ? this.level : this.maxLevel;
      arr.forEach(this.calculateDepth, this)
      this.level--;
    }
    return this.maxLevel;
  }
};