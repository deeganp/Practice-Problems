function secondLargest(nums){
    let largest = -Infinity;
    for (let num of nums){
        if (num > largest){
            largest = num;
        }
    }
    let secondLargest = -Infinity;
    for (let num of nums){
        if ((num > secondLargest) && (num < largest) ){
            secondLargest = num
        }
    }
    return secondLargest
}