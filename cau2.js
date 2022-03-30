const arr = [10, 5, 2, 5, 6, 7, 8, 9];
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log(`tổng các số trong mảng là ${sum}`);
        resolve();
    }, 2000);
})
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                for (let i = 0; i < arr.length; i++) {
                    let factorial = 1;
                    for (let j = arr[i]; j > 0; j--) {
                        factorial = factorial * j;
                    }
                    console.log(`giai thừa của số ${arr[i]}  là ${factorial}`);
                }
                resolve();
            }, 4000);
        })
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let prime = [];
                for (let i = 0; i < arr.length; i++) {
                    if (isPrime(arr[i])) {
                        prime.push(arr[i]);
                    }
                }
                console.log(`các số nguyên tố trong mảng là ${prime}`);
                resolve();
            }, 2000);
        })
    }).then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 3 == 0) {
                        console.log(`các số chia hết cho 3 là:${arr[i]} `);
                    }
                }
                resolve();
            }, 2000);
        })
    });
