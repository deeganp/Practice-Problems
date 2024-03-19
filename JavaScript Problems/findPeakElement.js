function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < nums[mid + 1]) {
            // Move right if the mid element is less than the next element
            left = mid + 1;
        } else {
            // Move left if the mid element is greater than or equal to the next element
            right = mid;
        }
    }

    // At the end of the loop, left and right will be pointing to the peak element
    return left;
}