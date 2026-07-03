import { merge } from './merge';

const col1 = [1, 4, 7];
const col2 = [2, 5, 8];
const col3 = [9, 6, 3]; // descending

const result = merge(col1, col2, col3);

console.log('col1  :', col1);
console.log('col2  :', col2);
console.log('col3  :', col3);
console.log('merged:', result);