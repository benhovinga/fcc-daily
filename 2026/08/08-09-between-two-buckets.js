/*
Between Two Buckets
Given two buckets of paint, each with an RGB color and a fullness level, return the mixed RGB color as an array of three integers.

Each bucket is an object (JavaScript) or dictionary (Python) with a color property (an array of three integers [r, g, b]) and a fullness property (0–100).
The mixed color is a weighted average of each channel in the two colors based on fullness level, with each channel rounded to the nearest integer.

Tests:
Passed:1. mixPaint({ color: [250, 250, 250], fullness: 50 }, { color: [0, 0, 0], fullness: 50 }) should return [125, 125, 125].
Passed:2. mixPaint({ color: [250, 250, 250], fullness: 80 }, { color: [0, 0, 0], fullness: 20 }) should return [200, 200, 200].
Passed:3. mixPaint({ color: [100, 150, 200], fullness: 30 }, { color: [100, 150, 200], fullness: 70 }) should return [100, 150, 200].
Passed:4. mixPaint({ color: [143, 143, 101], fullness: 45 }, { color: [100, 204, 204], fullness: 90 }) should return [114, 184, 170].
Passed:5. mixPaint({ color: [15, 134, 249], fullness: 29 }, { color: [97, 178, 55], fullness: 54 }) should return [68, 163, 123].
*/

function mixPaint(bucket1, bucket2) {
  function weightedAverage(values, weights) {
    return (
      values.reduce((acc, value, i) => value * weights[i] + acc, 0) /
      weights.reduce((acc, weight) => acc + weight, 0)
    );
  }
  return [0, 0, 0].map((_, i) =>
    Math.round(
      weightedAverage(
        [bucket1.color[i], bucket2.color[i]],
        [bucket1.fullness, bucket2.fullness],
      ),
    ),
  );
}
