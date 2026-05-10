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
