//if you want another person with the key to be able to get the original message, use encryption
const { createHmac } = require("crypto");

const key = "super-secret-key!";
const key2 = "super-secret-key2!";
const message = "The british are planning an attack on us!";

const hmac = createHmac("sha256", key).update(message).digest("hex");
console.log("hmac :>> ", hmac);

const hmac2 = createHmac("sha256", key2).update(message).digest("hex");
console.log("hmac2 :>> ", hmac2);
