function isPrime(num) {
    let j = 0;
    if (num < 0) {
        return false;
    }
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            j += 1
        }
    }
    return (j == 2);
}
console.log(isPrime(-1));