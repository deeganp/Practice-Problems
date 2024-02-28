def two_sum(nums, target):
    # Create a dictionary to store the complement of each number and its index
    num_map = {}
    
    # Iterate through the list of numbers
    for i, num in enumerate(nums):
        # Calculate the complement needed to reach the target
        complement = target - num
        
        # Check if the complement is already in the dictionary
        if complement in num_map:
            # Return the indices of the two numbers that add up to the target
            return [num_map[complement], i]
        
        # If not, add the current number and its index to the dictionary
        num_map[num] = i
    
    # If no solution is found
    return None