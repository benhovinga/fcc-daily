/*
Bucket Fill 2
Given a 2D grid of single-letter color strings and a target color, return the minimum number of flood fill "clicks" needed to make the entire grid the target color.

Each click changes the clicked cell's color and the entire region of connected cells of the same color with the target color.
Cells are connected horizontally and vertically (not diagonally).

Tests:
Passed:1. bucketFill([["R", "R"], ["R", "R"]], "G") should return 1.
Passed:2. bucketFill([["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]], "B") should return 0.
Passed:3. bucketFill([["G", "Y", "Y"], ["G", "Y", "G"], ["Y", "Y", "G"]], "R") should return 3.
Passed:4. bucketFill([["G", "G", "P", "Y"], ["O", "P", "P", "P"], ["O", "O", "P", "G"], ["G", "O", "O", "G"]], "P") should return 5.
Passed:5. bucketFill([["G", "G", "C", "C", "O"], ["B", "Y", "B", "Y", "O"], ["B", "J", "O", "J", "B"], ["G", "Y", "Y", "Y", "B"], ["G", "P", "P", "G", "G"]], "Y") should return 12.
*/

function bucketFill(grid, targetColor) {
  const gridClone = structuredClone(grid);

  function changeRegion(x, y, color) {
    if (x < 0 || x >= gridClone.length || y < 0 || y >= gridClone[x].length) return;
    else if (gridClone[x][y] === color) {
      gridClone[x][y] = targetColor;
      changeRegion(x - 1, y, color); // Up
      changeRegion(x + 1, y, color); // Down
      changeRegion(x, y - 1, color); // Left
      changeRegion(x, y + 1, color); // Right
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
