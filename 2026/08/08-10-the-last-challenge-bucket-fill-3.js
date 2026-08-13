/*
The Last Challenge: Bucket Fill 3
Today marks a year of daily coding challenges. This is the last new one for now. Good luck!

Given a 2D grid of single-letter color strings and a target color, return the minimum number of flood fill "clicks" needed to make the entire grid that color.

Each click changes the clicked cell's color and the entire region of connected cells of the same color (4-directional).
Clicks can use any color as an intermediate step, not just the target color.

Tests:
Passed:1. bucketFill([["B", "B"], ["B", "B"]], "R") should return 1.
Passed:2. bucketFill([["G", "G", "G"], ["G", "G", "G"], ["G", "G", "G"]], "G") should return 0.
Passed:3. bucketFill([["P", "P", "Y"], ["Y", "P", "Y"], ["Y", "P", "P"]], "O") should return 2.
Passed:4. bucketFill([["G", "Y", "C", "C"], ["Y", "Y", "Y", "B"], ["C", "Y", "B", "B"], ["C", "B", "B", "C"]], "R") should return 4.
Failed:5. bucketFill([["G", "G", "O", "O"], ["G", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["G", "G", "G", "G"]], "P") should return 5. Actual 4.
Passed:6. bucketFill([["R", "G", "R", "G"], ["R", "G", "R", "G"], ["B", "B", "B", "B"], ["B", "B", "B", "B"], ["R", "G", "R", "G"]], "Y") should return 3.
*/

function bucketFill(grid, targetColor) {
  const gridClone = structuredClone(grid);

  function changeRegion(x, y, color, intermediate = "", dir = null) {
    if (x < 0 || x >= gridClone.length || y < 0 || y >= gridClone[x].length) {
      return;
    } else if (gridClone[x][y] === color) {
      gridClone[x][y] = targetColor;
      changeRegion(x - 1, y, color); // Up
      changeRegion(x + 1, y, color); // Down
      changeRegion(x, y - 1, color); // Left
      changeRegion(x, y + 1, color); // Right
    } else if (!intermediate) {
      intermediate = gridClone[x][y];
      changeRegion(x - 1, y, color, intermediate, [-1, 0]); // Up
      changeRegion(x + 1, y, color, intermediate, [1, 0]); // Down
      changeRegion(x, y - 1, color, intermediate, [0, -1]); // Left
      changeRegion(x, y + 1, color, intermediate, [0, 1]); // Right
    } else if (gridClone[x][y] === intermediate) {
      changeRegion(x + dir[0], y + dir[1], color, intermediate, dir); // Straight Line
    }
  }

  let clicks = 0;

  for (let i = 0; i < gridClone.length; i++) {
    for (let j = 0; j < gridClone[i].length; j++) {
      const cellColor = gridClone[i][j];
      if (cellColor === targetColor) continue;
      clicks++;
      changeRegion(i, j, cellColor);
    }
  }

  return clicks;
}
