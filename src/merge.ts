export function merge(collection_1: number[], collection_2: number[]): number[] {
  
    let output: number[] = [];
    let i = 0;
    let j = 0;

    while (i < collection_1.length && j < collection_2.length) {
      if (collection_1[i] <= collection_2[j]) {
        output.push(collection_1[i]);
        i++;
      } else {
        output.push(collection_2[j]);
        j++;
      }
    }

    while (i < collection_1.length) {
      output.push(collection_1[i]);
      i++;
    }
  
    while (j < collection_2.length) {
      output.push(collection_2[j]);
      j++;
    }
    return output;
}