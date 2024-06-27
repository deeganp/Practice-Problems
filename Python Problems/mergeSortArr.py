# You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

# Merge nums1 and nums2 into a single array sorted in non-decreasing order.

# The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where
# the first m elements denote
# the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


def merge(nums1, m, nums2, n):
    # Initialize pointers for nums1, nums2, and the end of the merged array
    p1 = m - 1  # pointer for the last element in the initial part of nums1
    p2 = n - 1  # pointer for the last element in nums2
    p = m + n - 1  # pointer for the last position in nums1

    # While there are elements to compare in both arrays
    while p1 >= 0 and p2 >= 0:
        if nums1[p1] > nums2[p2]:
            nums1[p] = nums1[p1]
            p1 -= 1
        else:
            nums1[p] = nums2[p2]
            p2 -= 1
        p -= 1

    # If there are remaining elements in nums2, copy them over
    while p2 >= 0:
        nums1[p] = nums2[p2]
        p2 -= 1
        p -= 1