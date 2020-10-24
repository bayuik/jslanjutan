// Buatlah filter deret bilangan 32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66 dengan ketentuan angka lebih besar dari 15



let greaterThan = (num) => {
    let numbers = num.filter(num => num > 15);
    return numbers;
}

console.log(greaterThan([32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66]));