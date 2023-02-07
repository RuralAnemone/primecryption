const encrypt = require('./encrypt.js');
const decrypt = require('./decrypt.js');

const encrypted = encrypt('Hello, world!');
console.log(decrypt(encrypted));