//This method is used by websites we visit on https
const { publicEncrypt, privateDecrypt } = require("crypto");
const { publicKey, privateKey } = require("./keypair");

const message = "The british are planning an attack on us!";

const encryptedData = publicEncrypt(publicKey, Buffer.from(message));
// console.log(encryptedData.toString("hex"));

const decryptedData = privateDecrypt(privateKey, encryptedData);
console.log(decryptedData.toString("utf-8"));
