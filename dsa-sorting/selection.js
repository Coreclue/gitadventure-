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