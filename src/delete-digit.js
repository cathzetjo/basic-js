const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const string = n+'';
  const array = string.split('');
  const min = Math.min.apply(null, array);
  const index = array.indexOf(min+'');
  const length = array.length;

  for (let i=0; i<length; i++) {
    if (i===(index)) {
      array.splice(index, 1);
    }
  }
  return Number(array.join(''));
}

module.exports = {
  deleteDigit
};
