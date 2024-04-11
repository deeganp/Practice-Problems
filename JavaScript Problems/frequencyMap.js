// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


const majorityElement = function(nums) {
    const frequencyMap = new Map();
    let maxNumber = null;
    let maxFrequency = -Infinity;
    
    
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    for (let [number, frequency] of frequencyMap) {
    if (frequency > maxFrequency) {
      maxNumber = number;
      maxFrequency = frequency;
    }
  }
  
  return maxNumber;
};