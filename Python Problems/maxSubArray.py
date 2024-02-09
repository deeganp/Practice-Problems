# Given an integer array nums, find the subarray with the largest sum, and return its sum.


def maxSubArray(nums):
    max_sum = nums[0]  # Initialize max_sum to the first element of the array
    current_sum = nums[0]  # Initialize current_sum to the first element of the array
    
    # Iterate through the array starting from the second element
    for num in nums[1:]:
        # Update current_sum to be the maximum of the current element or the current element plus the previous sum
        current_sum = max(num, current_sum + num)
        
        # Update max_sum to be the maximum of the current maximum sum or the current sum
        max_sum = max(max_sum, current_sum)
    
    return max_sum  # Return the maximum sum found