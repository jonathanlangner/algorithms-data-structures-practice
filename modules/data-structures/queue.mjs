// Queue Practice in JS. Based on GeeksforGeeks
// FIFO First in first out.
// Difference with a queue: We can access both ends of the queue unlike a stack.

const maxQueueSize = 80;
const queueStorage = Array(maxQueueSize).fill(0);  
let front = 0;
let rear = -1;
let max = maxQueueSize;


// FIFO Enqueue: Adds an item to the rear of the queue.
const fifoEnqueue = function (item) {
    if(rear === (maxQueueSize - 1)){
        console.log("Queue Overflow");
        return -1;
    }
    else{
        queueStorage[++rear] = item;
        return item;
    }
};

// LIFO Dequeue: Remove the item from the front of the queue.
const fifoDequeue = function () {
    if(front === rear + 1){
        console.log("Queue is Empty");
        return -1;
    }
    else{
        console.log(queueStorage[front] + " dequeued from queue");
        let x = queueStorage[++front];
        console.log("Front item is {0}", queueStorage[front]);
        console.log("Rear item is {0}", queueStorage[rear]);
        return x;
    }

};


//A Function to print the stack
const printQueue = function(){
    if(front === rear + 1){
        console.log("Queue is Empty.");
    }
    else{
        for(let i = front; i <= rear; ++i){
            console.log(queueStorage[i] + "enqueued to queue");
        }
    }
}

const queue ={ 
    enqueue: fifoEnqueue,
    dequeue: fifoDequeue,
    print: printQueue,
};

export{queue};


// fifoEnqueue(Math.round(Math.random()* 100));
// fifoEnqueue(Math.round(Math.random()* 100));
// fifoEnqueue(Math.round(Math.random()* 100));
// fifoEnqueue(Math.round(Math.random()* 100));
// fifoEnqueue(Math.round(Math.random()* 100));
// fifoDequeue();
// fifoDequeue();
// printQueue();