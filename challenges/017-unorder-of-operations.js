/*
Unorder of Operations
Given an array of integers and an array of string operators, apply the operations to the numbers sequentially from left-to-right. Repeat the operations as needed until all numbers are used. Return the final result.

For example, given [1, 2, 3, 4, 5] and ['+', '*'], return the result of evaluating 1 + 2 * 3 + 4 * 5 from left-to-right ignoring standard order of operations.

Valid operators are +, -, *, /, and %.

Tests:
Passed:1. evaluate([5, 6, 7, 8, 9], ['+', '-']) should return 3
Passed:2. evaluate([17, 61, 40, 24, 38, 14], ['+', '%']) should return 38
Passed:3. evaluate([20, 2, 4, 24, 12, 3], ['*', '/']) should return 60
Passed:4. evaluate([11, 4, 10, 17, 2], ['*', '*', '%']) should return 30
Passed:5. evaluate([33, 11, 29, 13], ['/', '-']) should return -2
*/

function evaluate(numbers, operators) {
  let nextOperator = 0;

  return numbers.reduce((product, num) => {
    switch (operators[nextOperator]) {
      case "+":
        product += num;
        break;
      case "-":
        product -= num;
        break;
      case "*":
        product *= num;
        break;
      case "/":
        product /= num;
        break;
      case "%":
        product %= num;
        break;
      default:
        throw new Error(`Operator '${operators[nextOperator]}' is not supported.`);
    }

    if (++nextOperator >= operators.length)
      nextOperator = 0;

    return product;
  });
}
