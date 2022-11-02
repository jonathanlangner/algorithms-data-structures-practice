const swap = function (arr, l, h){
    const temp = arr[l];
    arr[l] = arr[h];
    arr[h] = temp;
}

const selectionSort = function(arr){
    let min_index = 0;
    let i = 0; 
    let j = 0;
    const arrLength = arr.length; 
    for(i = 0; i < arrLength -1; ++i){
        min_index = i;
        for(j = i + 1; j < arrLength; ++j){
            if(arr[j] < arr[min_index]){
                min_index = j;
            }

        }
        swap(arr, min_index,i);
    }
    return arr;
}

export{selectionSort};