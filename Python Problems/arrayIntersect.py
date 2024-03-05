class Solution(object):
    def intersect(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        from collections import Counter

        # Count occurrences of elements in both arrays
        count1 = Counter(nums1)
        count2 = Counter(nums2)

        # Initialize an empty list to store the intersection
        intersection = []

        # Iterate through the elements in nums1
        for num in nums1:
            # If the element exists in nums2 and has not been added to the intersection yet
            if count2[num] > 0:
                # Add the element to the intersection
                intersection.append(num)
                # Decrement the count of the element in nums2
                count2[num] -= 1

        return intersection