// var ascii = require("ascii-codes");
// var assert = require("assert");

// assert.equal("A", ascii.symbolForDecimal(65));

// console.log(ascii.symbolForDecimal(5623));

const args = process.argv;

const text = args[2];
if (text) {
  for (let i in text) {
    const letter = text[i];
    console.log(letter, "=", letter.charCodeAt(0));
  }
}
