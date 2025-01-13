// usage-example.js
const CilmaxAI = require("../src");

const cilmaxAI = new CilmaxAI();

async function runExample() {
  const wallet = cilmaxAI.getWallet();
  console.log("Public Key:", wallet.getPublicKey());

  const balance = await cilmaxAI.getWalletBalance();
  console.log("Balance:", balance);

  const transactionResult = await cilmaxAI.sendTokens(100, "recipient-address");
  console.log("Transaction Result:", transactionResult);

  const status = await cilmaxAI.checkTransactionStatus(transactionResult.transactionId);
  console.log("Transaction Status:", status);
}

runExample();
