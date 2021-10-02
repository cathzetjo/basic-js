/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
    calculateDepth(arr) {

        let array = [];
        let minLevel = 1;
        let filter = arr.filter((item) => Array.isArray(item));

        if (filter.length === 0) { return minLevel;}
        else {return (minLevel + this.calculateDepth(array.concat(...filter)));}

    }
}
