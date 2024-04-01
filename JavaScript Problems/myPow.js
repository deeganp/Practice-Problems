function pow(x, n) {
    if (n === 0) {
        return 1; // x^0 = 1
    }
    if (n < 0) {
        // If n is negative, compute 1 / x^-n
        return 1 / pow(x, -n);
    }
    if (n % 2 === 0) {
        // If n is even, compute x^(n/2) * x^(n/2)
        const half = pow(x, n / 2);
        return half * half;
    } else {
        // If n is odd, compute x * x^(n-1)
        return x * pow(x, n - 1);
    }
}