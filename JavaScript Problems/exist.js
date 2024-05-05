
// in javascript Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically 
// neighboring. The same letter cell may not be used more than once.


function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    const backtrack = (row, col, index) => {
        // If index equals the length of the word, we have found it
        if (index === word.length) {
            return true;
        }

        // Check boundary conditions and if the current cell matches the current character in the word
        if (row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== word[index]) {
            return false;
        }

        // Mark the cell as visited
        const temp = board[row][col];
        board[row][col] = '#';

        // Check all four directions
        const found =
            backtrack(row + 1, col, index + 1) ||
            backtrack(row - 1, col, index + 1) ||
            backtrack(row, col + 1, index + 1) ||
            backtrack(row, col - 1, index + 1);

        // Restore the cell
        board[row][col] = temp;

        return found;
    };

    // Iterate through each cell and try to find the word
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (backtrack(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
}