// ? Goal: Create a stack with a customizable size, and begin familiarizing myself with this data type.
// ? See geeksforgeeks for example.


const maxStackSize = 80;
const stackStorage = Array(maxStackSize).fill(0);

let total = -1;

//isEmpty Returns true if stack is empty, false otherwise.
const isEmpty = function () {
    return (total < 0);
};

// LIFO Peak: Check the value of the top item in the stack, in the case of LIFO
const lifoPeak = function () {
    if(total < 0){
        console.log("Stack Underflow.");
        return 0;
    }
    else{
        let topVal = stackStorage[total];
        return topVal;
    }
};

// LIFO Push: Push on item on to the top of the stack.
const lifoPush = function (x) {
    if(total >= (maxStackSize - 1)){
        console.log("Stack Overflow");
    }
    else{
        total+=1;
        stackStorage[total] = x;
        console.log(x + " was added to the stack at position: " + total);
        return true;
    }
};

// LIFO Pop: Pop the item from the top of the stack.
const lifoPop = function () {
    if(total === -1){
        console.log("Stack Underflow");
        return false;
    }
    else{
        let x = stackStorage[total];
        --total;
        return x;
    }

};

//stackSize: Returns the Size of the Stack as integer.
const stackSize = function () {
    if(total === -1){ // If it is -1 there are no elements on the stack.
        console.log("Nothing on Stack");
    }
    else{ // Returns number of elements presently on the Stack.
        let output = total + 1;
        return output;
    }
};

//A Function to print the stack
const printStack = function(){
        if(total <= -1){
            console.log("Nothing On Stack.");
        }
        else{
            for(let i = total; i > -1; --i){
                console.log(stackStorage[i]);
            }
        }
}

// Function Calls for LIFO
console.log(`Stack Size is: ${stackSize()}`);
console.log(`Is the Stack Empty? ${isEmpty()}`);
console.log(`Peak Returned: ${lifoPeak()}`);

for(let i=0; i < 25; i++){
    lifoPush(Math.round(Math.random() * 300));
}
printStack();
console.log(`Is the Stack Empty? ${isEmpty()}`);

for(let i=0; i < 3; i++){
    lifoPop();
}

printStack();

console.log(`Stack Size is: ${stackSize()}`);



