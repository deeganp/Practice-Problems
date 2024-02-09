// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.




function isHappy(n) {
    // Function to compute the sum of the squares of the digits of a number
    function getSumOfSquaresOfDigits(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }
    
    // Use two pointers to detect cycles
    let slow = n;
    let fast = n;
    do {
        slow = getSumOfSquaresOfDigits(slow);
        fast = getSumOfSquaresOfDigits(getSumOfSquaresOfDigits(fast));
    } while (slow !== fast);
    
    // If the cycle includes 1, n is a happy number
    return slow === 1;
};