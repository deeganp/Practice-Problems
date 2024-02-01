function moveZeroes(nums) {
    let nonZeroPointer = 0;

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is non-zero
        if (nums[i] !== 0) {
            // Swap the current element with the element at nonZeroPointer
            [nums[i], nums[nonZeroPointer]] = [nums[nonZeroPointer], nums[i]];
            
            // Move the nonZeroPointer to the next position
            nonZeroPointer++;
        }
    }
}