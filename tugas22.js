// Buatlah perulangan array dengan forEach yang mana array didapat dari String “Saya ingin belajar bersama”

let strIndex = words => {
    words = words.split(" ");
    words.forEach((item, index) => console.log(`Item : ${item} Index ke ${index}`));
}

strIndex('Saya ingin belajar bersama');