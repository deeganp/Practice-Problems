function findKthLargest(nums, k) {
    // Sort the array in descending order
    nums.sort((a, b) => b - a);
    
    // Return the kth largest element
    return nums[k - 1];
}