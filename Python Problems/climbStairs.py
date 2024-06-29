class Solution:
    def climbStairs(self, n: int) -> int:
        
        if n == 0:
            return 1
        if n == 1:
            return 1
    
    # Initialize base cases
        prev2 = 1  # f(0)
        prev1 = 1  # f(1)
    
    # Compute the number of ways to reach each step from 2 to n
        for i in range(2, n + 1):
            current = prev1 + prev2
            prev2 = prev1
            prev1 = current
    
        return prev1