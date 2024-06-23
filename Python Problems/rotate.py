def rotate(nums, k):
    n = len(nums)
    k %= n  # In case k is greater than the length of the array
    
    # Helper function to reverse a part of the array in place
    def reverse(start, end):
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1
    
    # Step 1: Reverse the entire array
    reverse(0, n - 1)
    
    # Step 2: Reverse the first k elements
    reverse(0, k - 1)
    
    # Step 3: Reverse the remaining elements
    reverse(k, n - 1)