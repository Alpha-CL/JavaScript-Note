



function primeNumber() {

    var  num = parseInt(prompt("Please enter a number"));

    if(num > 1 && num % num != 0) {
        return num;
    } else {
        console.log("Is not a prime number");
    }
}

console.log(primeNumber());
