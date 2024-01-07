function generatePascalsTriangle(numRows) {
    if (numRows <= 0) {
        return []; // Return an empty array for numRows <= 0
    }

    const triangle = []; // Initialize an empty array to store the triangle

    for (let i = 0; i < numRows; i++) {
        const row = []; // Initialize a new row array for each iteration

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1); // If it's the first or last element of the row, push 1
            } else {
                // Calculate other elements using values from the previous row
                row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
        }

        triangle.push(row); // Push the newly generated row to the triangle array
    }

    return triangle; // Return the completed Pascal's triangle
};
