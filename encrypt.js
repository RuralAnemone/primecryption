import "nthPrime.js";

function encrypt(string) {
    let array = [];
    [...string].forEach((char, i) => { // plop string into an array of characters
        const asciiValue = string.charCodeAt(i);
        array.push(nthPrime(asciiValue) * nthPrime(i));
    });
    return array.join("|");
}

export default encrypt;