def remove_duplicates(nums):
    if not nums:
        return 0
    
    unique_count = 1  # Initialize unique count to 1 (assuming there's at least one element)

    # Iterate through the array starting from the second element
    for i in range(1, len(nums)):
        # If the current element is different from the previous unique element
        if nums[i] != nums[unique_count - 1]:
            # Move the current element to the next available position in the array
            nums[unique_count] = nums[i]
            # Increment the unique count
            unique_count += 1

    # Return the number of unique elements (which is equal to unique count)
    return unique_count