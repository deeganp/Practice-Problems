# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

# Notice that the solution set must not contain duplicate triplets.



class Solution:
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums.sort()  # Sort the array to easily handle duplicates and for two-pointer approach
        result = []

        for i in range(len(nums) - 2):
            # Skip duplicates for the first element of the triplet
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            
            left = i + 1
            right = len(nums) - 1

            while left < right:
                total = nums[i] + nums[left] + nums[right]

                if total < 0:
                    left += 1
                elif total > 0:
                    right -= 1
                else:
                    # Found a triplet that sums up to zero
                    result.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1

                    # Skip duplicates for the second element of the triplet
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    
                    # Skip duplicates for the third element of the triplet
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1

        return result
