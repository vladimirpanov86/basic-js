const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if(message === undefined || key === undefined) throw new Error;
    let symbol = '';
    let output = [];
    let outputStr = '';
    if (this.mode === true) {
      for (let i = 0, j = 0; i < message.length; i++) {
        if( message.toUpperCase().charCodeAt(i) >= 65 && message.toUpperCase().charCodeAt(i) <= 90) {
          symbol = (((message.toUpperCase().charCodeAt(i) + key.toUpperCase().charCodeAt(j % key.length)) % 26) + 65);
          output[i] = String.fromCharCode(symbol);
          j++;
        } else {
          output[i] = message[i];
        }
      }
    }
    outputStr = output.join('');
    if (this.mode === true) {
      return outputStr;
    } else {
      return outputStr.split("").reverse().join("");
    }
  }
  decrypt(message, key) {
    if(message === undefined || key === undefined) throw new Error;
    let symbol = '';
    let output = [];
    let outputStr = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if( message.toUpperCase().charCodeAt(i) >= 65 && message.toUpperCase().charCodeAt(i) <= 90) {
        symbol = (((message.toUpperCase().charCodeAt(i) + 26 - key.toUpperCase().charCodeAt(j % key.length)) % 26) + 65);
        output[i] = String.fromCharCode(symbol);
        j++;
      } else {
        output[i] = message[i];
      }
    }
    outputStr = output.join('');

    if (this.mode === true) {
      return outputStr;
    } else {
      return outputStr.split("").reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
