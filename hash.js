//Always returns the same value (predictable)
//solution is salt that adds a random value to the hash
const { createHash } = require("crypto");

const hash = (input) => createHash("sha256").update(input).digest("hex");

const hash1 = hash("hi-mom!");
console.log("hash1 :>> ", hash1);
