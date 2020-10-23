let triangle = (ab, bc) => {
    console.log(`Nilai AB : ${ab}`);
    console.log(`Nilai BC : ${bc}`);
    
    ab = Math.pow(8, 2);
    bc = Math.pow(6, 2);
    let ac = Math.sqrt(ab+bc);

    console.log(`panjang sisi AB pada segitiga siku-siku tersebut adalah : ${ac} cm`)
}

triangle(8, 6);