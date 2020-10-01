const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currentInput: [],
  getLength() {
    return this.currentInput.length
  },
  addLink(value = '( )') {
    this.currentInput.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if( typeof position != "number" || position < 0 || position > this.currentInput.length || !Number.isInteger(position)) {
      this.currentInput = [];
      throw new Error()
    }
    this.currentInput = this.currentInput.slice(0, position -1).concat(this.currentInput.slice(position));
    return this
  },
  reverseChain() {
    this.currentInput.reverse()
    return this
  },
  finishChain() {
    let result = this.currentInput.join('~~');
    this.currentInput = [];
    return result;
  }
};

module.exports = chainMaker;
