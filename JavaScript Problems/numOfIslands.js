// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


const numIslands = function(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }
    
    const numRows = grid.length;
    const numCols = grid[0].length;
    let numIslands = 0;
    
    const dfs = (row, col) => {
        if (row < 0 || col < 0 || row >= numRows || col >= numCols || grid[row][col] === '0') {
            return;
        }
        
        // Mark the current cell as visited by changing '1' to '0'
        grid[row][col] = '0';
        
        // Recursively explore adjacent cells
        dfs(row + 1, col); // Down
        dfs(row - 1, col); // Up
        dfs(row, col + 1); // Right
        dfs(row, col - 1); // Left
    };
    
    // Iterate through each cell in the grid
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (grid[i][j] === '1') {
                // Found a new island, increment count and start DFS
                numIslands++;
                dfs(i, j);
            }
        }
    }
    
    return numIslands;
};