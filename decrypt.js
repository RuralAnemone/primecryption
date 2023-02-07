const nthPrime = require('./nthPrime.js');

function decrypt(string) {
    const encryptedArray = string.split("|");
    const decryptedArray = [];
    encryptedArray.forEach((encryptedValue, i) => {
        const decryptedValue = nthPrime(encryptedValue);
        decryptedArray.push(String.fromCharCode(decryptedValue));
    });
    return decryptedArray.join("");
}

export default decrypt;