function bubbleSort(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            count++;
            if (arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    console.log("total count:: " + count);
    return arr;

}

function bubbleSort2(arr) {
    let count = 0; 
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            count++ 
            if (arr[j] > arr[j+1]){
                count++;
                if(arr[j] > arr[j + 1]){
                    let temp = arr[j+1];
                    arr[j] = arr[j + 1];
                    arr[j+1] = temp;j
fsasdf
                }

            }
        }
    }
    console.log("total count:", count)
    return arr;
}

bubbleSort([4, 10, 8, 40, 30, 50, 60, 70, 80, 90, 100]);

bubbleSort2([4, 10, 8, 40, 30, 50, 60, 70, 80, 90, 100]);


