// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
//  The relative order of the elements should be kept the same. Then return the number of unique elements in nums.




function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let uniqueCount = 1; // Initialize unique count to 1 (assuming there's at least one element)
    
    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // If the current element is different from the previous unique element
        if (nums[i] !== nums[uniqueCount - 1]) {
            // Move the current element to the next available position in the array
            nums[uniqueCount] = nums[i];
            // Increment the unique count
            uniqueCount++;
        }
    }

    // Return the number of unique elements (which is equal to unique count)
    return uniqueCount;
}