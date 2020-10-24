// Buatlah sorting dan reverse dari deret angka array ini : 32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66

let sortReverse = (...nums) => {
    console.log(`Sebelumnya : ${nums}`);
    nums.sort((a,b) => a - b);
    console.log(`Ascending : ${nums}`);
    nums.sort((a,b) => b - a);
    console.log(`Descending : ${nums}`);


}

sortReverse(32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66)