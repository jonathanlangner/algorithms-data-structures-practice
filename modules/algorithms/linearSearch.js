const linearSearch = function (a, s){
    const arrLength = a.length - 1;
        for(let i = 0; i <= arrLength; ++i ){
            if(a[i] === s){
                return true;
            }
        }
        return false;
}

module.exports = linearSearch;
