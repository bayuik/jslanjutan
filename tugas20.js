let match = (a, b) => {
    let word = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable";

    console.log(word.match(a));
    console.log(word.match(b));
}

match('are', 'words');