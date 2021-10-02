/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    let newArray = [];
    const val = undefined;
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i++;
                arr[i + 1] = val;
                break;
            case '--discard-prev':
                newArray.splice(i - 1, 1);
                break;
            case '--double-next':
                newArray.push(arr[i + 1]);
                break;
            case '--double-prev':
                newArray.push(arr[i - 1]);
                break;
            default:
                newArray.push(arr[i]);
                break;
        }
    }
    const filterArray = newArray.filter((el) => el !== val);

    return filterArray;

}
