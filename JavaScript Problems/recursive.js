function recursiveProduct(arr){
    let curr = 0;
    function recursion(curr){
     if (curr == arr.length){
       return 1;
     }
   else {
     return (arr[curr] * recursion(curr + 1));
   }
    }
     return recursion(curr);
   }
   
   console.log(recursiveProduct([2]));