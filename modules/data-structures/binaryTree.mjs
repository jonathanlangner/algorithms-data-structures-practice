const binLeaf = function(val){ // Note many data structures could also be done using a class. 
    this.key = val;
    this.left = this.right = null;
}

let root = null;

root = new binLeaf(9);
root.left = new binLeaf(7);
root.right = new binLeaf (19);
root.left.left = new binLeaf(4);
root.left.right = new binLeaf(3);


//Created Tree for Test:

/*
                 9
               /   \
              7     19
             / \    / \ 
            4   3      
*/

const treePrinter = function(root){
    if(root === null){
        return;
    }
    console.log(root.key + " ");
    treePrinter(root.left);
    treePrinter(root.right);
}


//treePrinter(root);

export {binLeaf, treePrinter};