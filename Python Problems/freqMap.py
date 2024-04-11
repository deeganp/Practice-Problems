# Given an array nums of size n, return the majority element.

# The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


def majority_element(nums):
    count_map = {}
    majority_threshold = len(nums) // 2
    
    # Count the frequency of each element
    for num in nums:
        count_map[num] = count_map.get(num, 0) + 1
    
    # Find the element with frequency greater than n/2
    for num, count in count_map.items():
        if count > majority_threshold:
            return num