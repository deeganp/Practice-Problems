// Given two integer arrays nums1 and nums2, return an array of their intersection.
//  Each element in the result must appear as many times as it shows in both arrays
//   and you may return the result in any order.




let intersect = function(nums1, nums2) {
    const obj = {};
    const res = [];
    for (let i = 0; i < nums1.length; i++){
        obj[nums1[i]] = (obj[nums1[i]] || 0) + 1;
    }
    for (let i = 0; i < nums2.length; i++){
        if (obj[nums2[i]]){
            res.push(nums2[i]);
            obj[nums2[i]] = (obj[nums2[i]] - 1);
        }
    }
    return res;
};