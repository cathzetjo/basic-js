/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {

  const arr = matrix.toString().split(',');
  const cat ='^^';
  let count =0;
  if (!arr.includes(cat)) {
    return count;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === cat) {
      count++;
    }
  }
  return count;
}
