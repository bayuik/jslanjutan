// Periksalah apakah Infinity atau Not Infinity dari deret bilangan 2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16

let isInfinity = (...num) => {
    num.forEach(num => {
        if(isFinite(num)) {
            console.log(`Angka ${num} NOT Infinity`);
        } else {
            console.log(`Angka ${num} infinity`)
        }
    })
}

isInfinity(2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16);