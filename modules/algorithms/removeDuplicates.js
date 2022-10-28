const bigArr = require("../data-structures/arrays");

    const smallDupe = [1,2,4,4,5,6,7,7,9,7,7,7];
    let valueList = [];
    let newList = [];
    let firstVal = true;
    let iterator = 0;
    for(let i = 0; i < bigArr.length-1; ++i){
        valueList.push(i);
    }
    let duplicatesRemoved = 0;
    let elseCount = 0;


const removeDuplicates = function(arr){
    let finLen = arr.length - 1;
    if(iterator !== valueList.length){
        for(let i = 0; i <= finLen; i++){
          if(valueList[iterator] === arr[i] && firstVal === true){
            newList.push(arr[i]);
            firstVal = false;
          }
          else if(valueList[iterator] === arr[i] && firstVal === false){
            arr.splice(i, 1);
            --i;
            finLen = arr.length - 1;
            ++duplicatesRemoved;
          }
        }
        firstVal = true;
        ++iterator;
        return removeDuplicates(arr);
    }
    else{
        return arr;
    }

}

module.exports = removeDuplicates;

