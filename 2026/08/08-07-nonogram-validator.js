/*
Nonogram Validator
Given an array of clue numbers and an array of cells, determine whether the cells satisfy the nonogram clue.

The clue is an array of numbers representing the lengths of consecutive filled cells, in order. For example, a clue of [3, 2] means there should be 3 consecutive filled cells followed by 2 consecutive filled cells, separated by at least one empty cell.
The row is an array of 1s (filled) and 0s (empty).

Tests:
Passed:1. isValidNonogram([3, 2], [1, 1, 1, 0, 1, 1]) should return true.
Passed:2. isValidNonogram([3, 2], [0, 1, 1, 1, 1, 1]) should return false.
Passed:3. isValidNonogram([1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1]) should return false.
Passed:4. isValidNonogram([1, 1, 1, 1], [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0]) should return true.
Passed:5. isValidNonogram([3, 2, 3], [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0]) should return true.
Passed:6. isValidNonogram([3, 2, 3], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0]) should return false.
*/

function isValidNonogram(clues, cells) {
  function isNono(cursor, clue) {
    const end = cursor + clue;
    return cells
      .slice(cursor, end)
      .every(cell => cell === 1) && 
      !cells.at(end);
  }

  let cursor = cells.indexOf(1);

  for (let i = 0; i < clues.length; i++) {
    if (!isNono(cursor, clues[i]))
      return false;
    cursor += clues[i] + 1;
    cursor += cells.slice(cursor).indexOf(1);
  }
  
  return !(cells[cursor] === 1);
}
