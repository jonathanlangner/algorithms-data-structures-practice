const express = require('express');

//ARRAYS FOR OPERATING ON.
const bigArr = require("./modules/data-structures/arrays");


//ALGORITHMS:
const binSearch = require("./modules/algorithms/binarySearch");
const bubbleSort = require("./modules/algorithms/bubbleSort");
const linearSearch = require("./modules/algorithms/linearSearch");
const removeDuplicates = require("./modules/algorithms/removeDuplicates");   

//DATA STRUCTURES
const linkedList = require("./modules/data-structures/linked-list");
const stack = require("./modules/data-structures/stack");

const app = express();
const PORT = 3003;

const unsort = [...bigArr];
const sortedArr = bubbleSort(unsort);


app.get('/', (req, res)=>{
    res.status(200);
    res.send("Result is: " + sortedArr); // You can compile to the browser like this for now.
    // The other alternative is testing with Jest.
    // res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);
