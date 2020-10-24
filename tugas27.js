// Gabungkanlah kata berikut ini menjadi satu variabel :

// “No”,” rumah saya”,30, “A”
// “Jalan pangeran Tirtayasa No”, 70

let joinStr = (...str) => {
    let str1 = str.join(" ");
    console.log(str1);
}

joinStr('No', 'rumah saya', 30, 'A');
joinStr('Jalan pangeran Tirtayasa No', 70);