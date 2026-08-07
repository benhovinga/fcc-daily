/*
Magic Square Solver
Given a 3x3 grid with one missing number (represented as 0), return the missing number that completes the magic square, or "impossible" if no valid number exists.

A magic square is a grid where every row, column, and diagonal adds up to the same number.

Tests:
Passed:1. solveMagicSquare([[2, 7, 6], [9, 0, 1], [4, 3, 8]]) should return 5.
Passed:2. solveMagicSquare([[0, 14, 12], [18, 10, 2], [8, 6, 16]]) should return 4.
Passed:3. solveMagicSquare([[12, 17, 16], [19, 0, 10], [14, 13, 18]]) should return "impossible".
Passed:4. solveMagicSquare([[15, 35, 31], [43, 27, 11], [23, 19, 0]]) should return 39.
Passed:5. solveMagicSquare([[26, 41, 14], [47, 35, 0], [32, 29, 44]]) should return "impossible".
*/

function solveMagicSquare(grid) {
  function sum(a, b){
    return a + b
  };

  const tests = [];
  for (let i = 0; i < grid.length; i++) {
    tests.push(grid[i]); // row -

    let col = []
    for (let j = 0; j < grid[i].length; j++)
      col.push(grid[j][i]);

    tests.push(col); // col |
  }
  tests.push([grid[0][0], grid[1][1], grid[2][2]]); // diag \
  tests.push([grid[0][2], grid[1][1], grid[2][0]]); // diag /

  const goodTests = tests.filter(test => !test.includes(0));
  const missingTests = tests.filter(test => test.includes(0));

  let lineTotal;
  let missingNumber;

  try {
    goodTests.forEach(test => {
      const testTotal = test.reduce(sum, 0);
      if (!lineTotal)
        lineTotal = testTotal;
      else if (lineTotal !== testTotal)
        throw new Error("test totals do not match");
    });

    missingTests.forEach(test => {
      const testNumber = lineTotal - test.reduce(sum, 0);
      if (!missingNumber)
        missingNumber = testNumber; 
      else if (missingNumber !== testNumber)
        throw new Error("new numbers do not match");
    });
  } catch {
    return "impossible";
  }
  return missingNumber;
}
