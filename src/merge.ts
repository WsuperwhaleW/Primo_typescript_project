// collection_3 is expected in descending order; it is reversed internally before merging
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const output: number[] = [];
  const asc3 = [...collection_3].reverse();
  let i = 0, j = 0, k = 0;

  while (i < collection_1.length || j < collection_2.length || k < asc3.length) {
    const a = i < collection_1.length ? collection_1[i] : Infinity;
    const b = j < collection_2.length ? collection_2[j] : Infinity;
    const c = k < asc3.length ? asc3[k] : Infinity;
    const min = Math.min(a, b, c);

    output.push(min);

    if (min === a) i++;
    else if (min === b) j++;
    else k++;
  }

  return output;
}