function twoSum(nums, target) {
    // Create a map to store the complement of each number and its index
    const numMap = new Map();
    
    // Iterate through the array of numbers
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement needed to reach the target
        const complement = target - nums[i];
        
        // Check if the complement is already in the map
        if (numMap.has(complement)) {
            // Return the indices of the two numbers that add up to the target
            return [numMap.get(complement), i];
        }
        
        // If not, add the current number and its index to the map
        numMap.set(nums[i], i);
    }
    
    // If no solution is found
    return null;
}