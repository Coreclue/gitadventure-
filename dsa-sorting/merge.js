// Merge Sort
// merge arrays based on (n)log(n) time complexity and sorted input values. Sets conditions for j and i. push results with empty array to j and i.
//

function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

const output = merge([1, 10, 50], [2, 12, 14, 99, 100]);
console.log(output);

function mergeSort() { }

module.exports = { merge, mergeSort };