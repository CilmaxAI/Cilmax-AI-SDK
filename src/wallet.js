// wallet.js
const { generateKeypair } = require("crypto");

class Wallet {
  constructor() {
    this.keypair = this.createKeypair();
  }

  createKeypair() {
    const keypair = generateKeypair("rsa", { modulusLength: 2048 });
    return keypair;
  }

  getPublicKey() {
    return this.keypair.publicKey.export({ type: "spki", format: "pem" });
  }

  getPrivateKey() {
    return this.keypair.privateKey.export({ type: "pkcs8", format: "pem" });
  }

  saveWallet() {
    // Logic to save wallet to database or file
  }
}

module.exports = Wallet;
