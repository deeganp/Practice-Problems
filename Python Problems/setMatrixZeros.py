class Solution(object):
    def setZeroes(self, matrix):
        # Get dimensions of the matrix
        m = len(matrix)
        n = len(matrix[0])

        # Initialize sets to keep track of rows and columns with zeros
        zero_rows = set()
        zero_cols = set()

        # Iterate through the matrix to find zeros and mark rows and columns
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == 0:
                    zero_rows.add(i)
                    zero_cols.add(j)

        # Iterate through the matrix again and set zeros in marked rows and columns
        for i in range(m):
            for j in range(n):
                if i in zero_rows or j in zero_cols:
                    matrix[i][j] = 0