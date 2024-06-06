def uniquePaths(m, n):
    # Create a 2D array to store the number of unique paths
    dp = [[0] * n for _ in range(m)]

    # Initialize the first row and first column to 1
    for i in range(m):
        dp[i][0] = 1
    for j in range(n):
        dp[0][j] = 1

    # Calculate the number of unique paths for each cell
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

    # The bottom-right cell contains the total number of unique paths
    return dp[m - 1][n - 1]