import express from "express";

//ARRAYS FOR OPERATING ON.
import {bigArr, primesForBinSearch} from "./modules/data-structures/arrays.mjs";

//ALGORITHMS:
import {binarySearch} from "./modules/algorithms/binarySearch.mjs";
import {bubbleSort} from "./modules/algorithms/bubbleSort.mjs";
import {linearSearch} from "./modules/algorithms/linearSearch.mjs";
import {removeDuplicates} from "./modules/algorithms/removeDuplicates.mjs";   

//DATA STRUCTURES
import {printList, searchList} from "./modules/data-structures/linkedList.mjs";
import {stack} from "./modules/data-structures/stack.mjs";

const app = express();
const PORT = 3003;

const unsort = [...bigArr];
const sortedArr = bubbleSort(unsort);


app.get('/', (req, res)=>{
    res.status(200);
    res.send("Result is: " + sortedArr); 
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);
