// Carilah nilai minimal dan maksimal dari deret angka : 45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10

let num = [45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10];

let min = Math.min(...num);
let max = Math.max(...num);

console.log(`Nilai minimal : ${min}`);
console.log(`NIlai maksimal : ${max}`);