import express from "express";
import path from "path";
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();



//ARRAYS FOR OPERATING ON.
import {bigArr, primesForBinSearch,charArr, multiDimensionalArr} from "./modules/data-structures/arrays.js";

//ALGORITHMS:
import {binarySearch} from "./modules/algorithms/binarySearch.js";
import {bubbleSort} from "./modules/algorithms/bubbleSort.js";
import {linearSearch} from "./modules/algorithms/linearSearch.js";
import {removeDuplicates} from "./modules/algorithms/removeDuplicates.js";   

//DATA STRUCTURES
import {printList, searchList} from "./modules/data-structures/linkedList.js";
import {stack} from "./modules/data-structures/stack.js";
import {queue} from "./modules/data-structures/queue.js";
import {binLeaf, treePrinter} from "./modules/data-structures/binaryTree.js";

const app = express();
const PORT = process.env.PORT || 5000;

const unsort = [...bigArr];
const sortedArr = bubbleSort(unsort);


router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });
  
  router.get('/shop',function(req,res){
    res.sendFile(path.join(__dirname+'/express/shop.html'));
  });
  

app.use('/', router);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);
