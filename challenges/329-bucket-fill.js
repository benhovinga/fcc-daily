/*
Bucket Fill
Given a 2D grid, a starting position ([row, col]), and a new value, replace the value at the starting position and all connected cells of the same value with the new value.

Cells are connected if they are adjacent horizontally or vertically (not diagonally).
Return the updated grid.

Tests:
Passed:1. bucketFill([["R", "G"], ["R", "G"]], [0, 1], "B") should return [["R", "B"], ["R", "B"]].
Passed:2. bucketFill([["Y", "G", "G"], ["Y", "Y", "Y"], ["B", "Y", "R"]], [1, 2], "B") should return [["B", "G", "G"], ["B", "B", "B"], ["B", "B", "R"]].
Passed:3. bucketFill([["O", "O", "P"], ["P", "O", "O"], ["P", "P", "O"]], [2, 0], "R") should return [["O", "O", "P"], ["R", "O", "O"], ["R", "R", "O"]].
Passed:4. bucketFill([["T", "T", "R", "T"], ["R", "T", "R", "T"], ["R", "T", "R", "T"], ["T", "T", "T", "T"]], [0, 3], "Y") should return [["Y", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["Y", "Y", "Y", "Y"]].
Passed:5. bucketFill([["G", "B", "G", "B"], ["R", "B", "B", "G"], ["B", "G", "B", "R"], ["B", "G", "G", "B"]], [2, 2], "G") should return [["G", "G", "G", "B"], ["R", "G", "G", "G"], ["B", "G", "G", "R"], ["B", "G", "G", "B"]].
*/

function bucketFill(grid, [row, col], newValue) {
  const gridClone = structuredClone(grid);

  function changeRegion(x, y, color) {
    if (x < 0 || x >= gridClone.length || y < 0 || y >= gridClone[x].length) return;
    else if (gridClone[x][y] === color) {
      gridClone[x][y] = newValue;
      changeRegion(x - 1, y, color); // Up
      changeRegion(x + 1, y, color); // Down
      changeRegion(x, y - 1, color); // Left
      changeRegion(x, y + 1, color); // Right
    }
  }

  changeRegion(row, col, gridClone[row][col]);

  return gridClone;
}
