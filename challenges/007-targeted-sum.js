/*
Targeted Sum
Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.

The returned array should have the indices in ascending order.

Tests:
Passed:1. findTarget([2, 7, 11, 15], 9) should return [0, 1].
Passed:2. findTarget([3, 2, 4, 5], 6) should return [1, 2].
Passed:3. findTarget([1, 3, 5, 6, 7, 8], 15) should return [4, 5].
Passed:4. findTarget([1, 3, 5, 7], 14) should return "Target not found".
*/

function findTarget(arr, target) {
  const indices = [];

  outerLoop: for (let index1 = 0; index1 < arr.length; index1++) {
    for (let index2 = index1 + 1; index2 < arr.length; index2++) {
      if (arr[index1] + arr[index2] === target) {
        indices.push(index1, index2);
        break outerLoop;
      }
    }
  }

  if (indices.length !== 2) return "Target not found";
  return indices;
}
