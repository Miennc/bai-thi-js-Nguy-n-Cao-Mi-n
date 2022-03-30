function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
( function (){
 const id =   setInterval(() => {
     const rand =  Math.floor(Math.random() * 101);
     console.log(`${rand} là số nguyên tố? ${isPrime(rand)} `);
    }, 1000);
    setTimeout(() => {
      clearInterval(id);
    }, 5000);
 }
 )();
 