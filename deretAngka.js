let numbers = number => {
    for(let i = 1; i <= number; i++) {
        if(i % 3 === 0) {
            console.log("NIO");
        } else if (i % 5 === 0) {
            console.log("MIC");
        } else {
            console.log(i);
        }
    }
}

numbers(10);
numbers(20);
numbers(30);