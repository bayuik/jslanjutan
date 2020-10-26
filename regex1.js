let regex = () => {
    let str = "abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKL";
    console.log(str.match(/[ckl]/ig));
}

regex();