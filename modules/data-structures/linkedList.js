//Based on geeksforgeeks.
// Other Options with Linked Lists:
// 1. Deletion and Insertion. 
//(When deleting or inserting you will need to pick a node in the list to start from, create a temp value, and 
//insert or remove a node with the pointers. Delete temp to free up the data.)
// 2. Searching from beginning to end or vice versa.

let head; 
const linkedList =  function(d) {
    this.data = d;
    this.next = null;
    this.previous = null;
}

head = new linkedList(1);
let second = new linkedList(2);
let third = new linkedList(3);
let fourth = new linkedList(4);
let fifth = new linkedList(5);


head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

second.previous = head;
third.previous = second;
fourth.previous = third;
fifth.previous = fourth;

const printList = function(){
    let n = head;
    let listData = [];
    let i = 0;
    while(n !== null){
        listData[i] = n;
        n = n.next;
        ++i;
    }
    return listData;
}

const searchList = function(n) { 
    let s = head; // This search is linear from head to tail of the list.
    while(s.next !== null){
        if(s.data === n){
            return true;
        }
        s = s.next;
    }
    return false;
}


export {searchList, printList};


