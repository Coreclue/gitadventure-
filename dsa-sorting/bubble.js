// Bubble Sort algorithim sorts an array by repeatedly swapping the adjacent elements if they are in the wrong order. The algorithm is named for the way smaller or larger elements "bubble" to the top of the list. The algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.

console.log("FILE IS RUNNING");
//

function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => { //swap values
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
// loop with i from end of array towards beginning.
 // if arr[j] is greater than arr[j+1], swap two values.
for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {  
        swap(arr, j, j + 1);
      }
    }
  }
// retrun assorted array.
  return arr;
}

console.log(bubbleSort([2,11,9,26,31,35,60,70,700,7000,700000]));



module.exports = bubbleSort;


// ### **BubbleSort Pseudocode*

// - Loop with ***i*** from end of array towards beginning
//     - Loop with ***j*** from the beginning until ***i - 1***
//     - If ***arr[j]*** is greater than ***arr[j+1]***, swap those two values!
// - Return the sorted array
// - This technique is called Bubble Sort. Why?
//     - Because the big numbers bubble to the top!