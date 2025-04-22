/* Dynamic Prgramming - Problem
📌 Problem Summary:

You’re at the top-left corner (0,0) of a grid and can only move:
	Right ➡️
	Down ⬇️

You want to know how many ways there are to travel to the bottom-right corner of a m x n grid.

For a 3x3 grid, you’re going from (0, 0) to (2, 2).
*/

const gridTraveller = (m, n) => {
    // Create a 2D array to store the number of ways to reach each cell

    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    console.log("The initial dp array is: ", dp);
    dp[1][1] = 1; // Base case: 1 way to be at the start

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const current = dp[i][j];
            console.log(`Current position: (${i}, ${j}), ways: ${current}`);
            // Move down
            // Check if moving down is within bounds
            // If we are at the last row, we can't move down
            if (i + 1 <= m) {
                console.log(`Moving down to (${i + 1}, ${j}), current ways - before: ${dp[i + 1][j]}`);
                dp[i + 1][j] += current; // move down
                console.log(`Moving down to (${i + 1}, ${j}), updated ways - after: ${dp[i + 1][j]}`);
            }
            // Move right
            if (j + 1 <= n) {
                console.log(`Moving right to (${i}, ${j + 1}), current ways - before: ${dp[i][j + 1]}`);
                dp[i][j + 1] += current; // move right
                console.log(`Moving right to (${i}, ${j + 1}), updated ways - after: ${dp[i][j + 1]}`);
            }
        }
    }

    return dp[m][n];
};

console.log(gridTraveller(2, 2)); // Output: 6