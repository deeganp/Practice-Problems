def move_zeroes(nums):
    non_zero_pointer = 0

    # Iterate through the array
    for i in range(len(nums)):
        # If the current element is non-zero
        if nums[i] != 0:
            # Swap the current element with the element at non_zero_pointer
            nums[i], nums[non_zero_pointer] = nums[non_zero_pointer], nums[i]

            # Move the non_zero_pointer to the next position
            non_zero_pointer += 1
