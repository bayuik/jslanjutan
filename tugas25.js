// Buatlah filter,sorting dan reverse deret bilangan 2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16 dengan ketentuan filter angka lebih besar dari 10

let sortFilter = (...nums) => {
    console.log(`Sebelumnya : ${nums}`)
    
    let asc = nums.sort((a, b) => a - b);
    console.log(`Ascending : ${asc}`);

    let desc = nums.sort((a, b) => b - a);
    console.log(`Descending : ${desc}`);

    let filtr = nums.filter(num => num > 10);
    console.log(`Filter > 10 : ${filtr}`);
}

sortFilter(2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16)