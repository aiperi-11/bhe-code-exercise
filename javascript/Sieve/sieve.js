class Sieve {
  NthPrime(n) {

    if (n <= 0) {
      throw new Error("'n' must be bigger than 0");
    }

    // Get the upper limit for nth prime
    const upperLimit = Math.ceil(n * Math.log(n) + n * Math.log(Math.log(n)));
    const isPrime = new Array(upperLimit + 1).fill(true);
    const primeNumbers = [];

    for (let i = 2; i <= upperLimit; i++) {
      if (isPrime[i]) {
        primeNumbers.push(i);
        for (let j = i * i; j <= upperLimit; j += i) {
          isPrime[j] = false;
        }
      }
    }

    return primeNumbers[n - 1];
  }
}

module.exports = Sieve;
