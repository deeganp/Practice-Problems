// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

const topKFrequent = function(nums, k) {
    const frequencyMap = new Map();
    
    // Count frequency of each number
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Sort by frequency and return top k frequent elements
    return [...frequencyMap]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(pair => pair[0]);
};