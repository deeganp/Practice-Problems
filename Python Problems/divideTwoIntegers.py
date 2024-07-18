def divide(dividend: int, divisor: int) -> int:
    # Constants for 32-bit signed integer range
    INT_MAX = 2**31 - 1
    INT_MIN = -2**31

    # Handle edge case for overflow
    if dividend == INT_MIN and divisor == -1:
        return INT_MAX

    # Determine the sign of the result
    negative = (dividend < 0) != (divisor < 0)

    # Convert both numbers to positive
    dividend, divisor = abs(dividend), abs(divisor)

    quotient = 0
    # Count how many times the divisor can be doubled before it exceeds the dividend
    for i in range(31, -1, -1):
        if (dividend >> i) >= divisor:
            quotient += 1 << i
            dividend -= divisor << i

    # Apply the sign to the result
    if negative:
        quotient = -quotient

    # Ensure the result is within the 32-bit signed integer range
    return max(min(quotient, INT_MAX), INT_MIN)

# Example usage:
print(divide(10, 3))    # Should return 3
print(divide(7, -3))    # Should return -2
print(divide(-7, 3))    # Should return -2
print(divide(-7, -3))   # Should return 2
print(divide(1, 1))     # Should return 1
print(divide(-2147483648, -1)) # Should return 2147483647
