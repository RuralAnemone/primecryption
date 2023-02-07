import "nthPrime.js";

function encrypt(string) {
    let array = [];
    [...string].forEach((char, i) => { // plop string into an array of characters
        const asciiValue = string.charCodeAt(i);
        array.push(nthPrime(asciiValue) * nthPrime(i));
    });
    randomizeArray(array);
    return array.join("|");
}

function randomizeArray(array) {
    array = array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    // stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/46545530#46545530
}

export default encrypt;