let regex = value => {
    let kata = value.match(/Belajar|html|css/g);
    console.log(...kata)
}

regex("Belajar html");
regex("Belajar javascript");
regex("Belajar css");
regex("Belajar php");