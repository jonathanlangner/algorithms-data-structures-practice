//Binary Search Iterative Method: Data must be sorted for Binary Search to Work work.
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

export {binarySearch};
