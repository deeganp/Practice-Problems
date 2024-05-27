// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order. Note that combinations are unordered. in javascript


function combine(n, k) {
    const result = [];
    const path = [];
    
    function backtrack(start) {
        // If the current combination is of length k, add it to the result
        if (path.length === k) {
            result.push([...path]);
            return;
        }
        
        // Iterate from the current start number to n
        for (let i = start; i <= n; i++) {
            // Add the current number to the combination
            path.push(i);
            // Recurse with the next number (i + 1)
            backtrack(i + 1);
            // Backtrack: remove the last number added
            path.pop();
        }
    }
    
    // Start the backtracking with the first number
    backtrack(1);
    
    return result;
}

// Example usage:
console.log(combine(4, 2));
// Output: [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
