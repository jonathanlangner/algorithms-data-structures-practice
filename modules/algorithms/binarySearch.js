const arr4 = [28,23,46,14,55,20,3,34,17,13,47,22,1,31,48,29,13,47,54,17,50,9,29,5,2,23,16,1,44,13,0,43,5,14,920];

//Binary Search Iterative Method: Data must be sorted for Binary Search to Work work.
const sortedArr = bubbleSort(arr4);
console.log(sortedArr);
const binarySearch = function(a, searchItem, low, high){
    let mid = 0;
    high = a.length - 1;
    low = 0;
    while(high >= low){
        
        mid = Math.floor((low + high) / 2);
        if(searchItem === a[mid]){
            return true;
        }
        else if(searchItem > a[mid]){ // searchItem value is is on the right side.
            low = mid + 1;
        }
        else{   // searchItem value is is on the left side.
            high = mid - 1;
        }

    }
    return false;
}



console.log(binarySearch(sortedArr, 9220));
