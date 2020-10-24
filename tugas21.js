// Buatlah perubahan kata “masak” menjadi “makan” dalam kalimat “Saya belajar masak nasi goreng”

let changeWord = word => {
    console.log(word);
    console.log(word.replace('masak', 'makan'));
}

changeWord('Saya belajar masak nasi goreng');
