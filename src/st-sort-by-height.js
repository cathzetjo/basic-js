/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {

  const notSortedElement = -1;
  const arrWithoutMinusOne = arr.filter((el) => el !== notSortedElement);
  const sort = arrWithoutMinusOne.sort((a, b) => a - b);
  return arr.map((element) => {
    if (element === notSortedElement) {
      return element;
    }
    return sort.shift();
  });
}
