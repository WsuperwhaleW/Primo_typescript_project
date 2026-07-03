import { merge } from '../src/merge';

test('merges three sorted inputs where the third is descending', () => {
  expect(merge([1, 4, 7], [2, 5, 8], [9, 6, 3])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('handles all empty arrays', () => {
  expect(merge([], [], [])).toEqual([]);
});

test('handles a mix of empty and non-empty arrays', () => {
  expect(merge([], [2, 5, 8], [])).toEqual([2, 5, 8]);
  expect(merge([3, 4], [], [2, 1])).toEqual([1, 2, 3, 4]);
});

test('produces output in ascending order', () => {
  const result = merge([1, 100, 250], [2, 3, 99], [500, 400, 4]);
  for (let idx = 1; idx < result.length; idx++) {
    expect(result[idx]).toBeGreaterThanOrEqual(result[idx - 1]);
  }
});

test('preserves duplicates across all three inputs', () => {
  expect(merge([2, 5], [5, 6], [5])).toEqual([2, 5, 5, 5, 6]);
});

test('handles negative numbers and zero', () => {
  expect(merge([-5, 0, 3], [-2, 4], [2, -1, -10])).toEqual([-10, -5, -2, -1, 0, 2, 3, 4]);
});

test('sorts numerically, not lexicographically', () => {
  expect(merge([1, 3], [2, 20], [10])).toEqual([1, 2, 3, 10, 20]);
});

test('does not mutate the input arrays', () => {
  const c1 = [1, 4, 7];
  const c2 = [2, 5, 8];
  const c3 = [9, 6, 3];
  merge(c1, c2, c3);
  expect(c1).toEqual([1, 4, 7]);
  expect(c2).toEqual([2, 5, 8]);
  expect(c3).toEqual([9, 6, 3]);
});
