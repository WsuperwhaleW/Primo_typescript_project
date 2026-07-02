import { merge } from '../src/merge';
test('Merge function merges two sorted arrays correctly', () => {
  const result = merge([1, 2, 3], [4, 5, 6]);
  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});
test('Merge function handles empty arrays correctly', () => {
  const result = merge([], [4, 5, 6]);
  expect(result).toEqual([4, 5, 6]);
});
test('Merge function handles arrays with different lengths correctly', () => {
  const result = merge([1, 2, 3], [4, 5, 6, 7]);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
});