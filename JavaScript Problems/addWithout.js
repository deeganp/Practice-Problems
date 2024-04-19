// Given two integers a and b, return the sum of the two integers without using the operators + and -.

function getSum(a, b) {
    while (b !== 0) {
        let carry = a & b;  // Calculate carry
        a = a ^ b;          // Add without carrying
        b = carry << 1;     // Shift carry to the left
    }
    return a;
}