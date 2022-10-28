//Checks to see if an array is sorted least to greatest.
//Additional checks will need to be added to see if the input from the array is a number or not.
const checkSortResult = function(a){
    for(let i = 0; i <= a.length-1; ++i){
        if(a[i] > a[i+1]){
            return false;
        }
    }
    return true;
}


//TODO An Alphabetical Character Sort Check, &  A Word Alphabetical Sort Check.


module.exports = checkSortResult;