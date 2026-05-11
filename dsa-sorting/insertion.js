// Insertion Sort
// Insertion Sort algorithm sorts an array by repeatedly taking the next unsorted element and inserting it into the correct position in the sorted portion of the array. The algorithm maintains a sorted subarray on the left side of the array and iteratively expands it by inserting elements from the unsorted portion. The algorithm is efficient for small data sets or partially sorted arrays, but it is not suitable for large data sets as its average and worst-case time complexity is quite high.

function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {

    let currentValue = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > currentValue) {

      arr[j + 1] = arr[j];

      j--;
    }

    arr[j + 1] = currentValue;
  }

  return arr;
}

console.log(insertionSort([4, 10, 8, 40, 30, 50, 60, 70, 80, 90, 100]));
module.exports = insertionSort;