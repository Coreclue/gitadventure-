// Selection Sort
// Selection Sort algorithm sorts an array by repeatedly finding the minimum element from the unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array: the subarray which is already sorted and the remaining subarray which is unsorted. In every iteration of selection sort, the minimum element from the unsorted subarray is picked and moved to the sorted subarray. The algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr;
}

module.exports = selectionSort;

console.log(selectionSort([4, 10, 8, 40, 30, 50, 60, 70, 80, 90, 100]));