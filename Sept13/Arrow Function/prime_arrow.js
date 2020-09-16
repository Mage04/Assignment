var arr = [4, 6, 8, 9,  7, 31, 97, -1, 17,2, 87, 100];

var isPrime = (num) => {
    if (num <= 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++)
            if (num % i === 0)
                return false;
        return true;
    }
}

console.log(arr.filter(isPrime));   