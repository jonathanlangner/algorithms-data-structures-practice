import express from "express";
import path from "path";
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();



//ARRAYS FOR OPERATING ON.
import {bigArr, primesForBinSearch,charArr, multiDimensionalArr} from "./modules/data-structures/arrays.mjs";

//ALGORITHMS:
import {binarySearch} from "./modules/algorithms/binarySearch.mjs";
import {bubbleSort} from "./modules/algorithms/bubbleSort.mjs";
import {linearSearch} from "./modules/algorithms/linearSearch.mjs";
import {removeDuplicates} from "./modules/algorithms/removeDuplicates.mjs";   

//DATA STRUCTURES
import {printList, searchList} from "./modules/data-structures/linkedList.mjs";
import {stack} from "./modules/data-structures/stack.mjs";
import {queue} from "./modules/data-structures/queue.mjs";
import {binLeaf, treePrinter} from "./modules/data-structures/binaryTree.mjs";

const app = express();
const PORT = 3003;

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
