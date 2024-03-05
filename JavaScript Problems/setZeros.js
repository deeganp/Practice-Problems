function setZeroes(matrix) {
    // Get dimensions of the matrix
    const m = matrix.length;
    const n = matrix[0].length;

    // Initialize sets to keep track of rows and columns with zeros
    const zeroRows = new Set();
    const zeroCols = new Set();

    // Iterate through the matrix to find zeros and mark rows and columns
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }

    // Iterate through the matrix again and set zeros in marked rows and columns
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (zeroRows.has(i) || zeroCols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
}
