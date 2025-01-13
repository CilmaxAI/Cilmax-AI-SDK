// index.js
const Wallet = require("./wallet");
const Transaction = require("./transactions");
const Analytics = require("./analytics");

class CilmaxAI {
  constructor() {
    this.wallet = new Wallet();
    this.transaction = new Transaction(this.wallet);
    this.analytics = new Analytics(this.wallet);
  }

  getWallet() {
    return this.wallet;
  }

  async sendTokens(amount, toAddress) {
    return await this.transaction.sendTransaction(amount, toAddress);
  }

  async checkTransactionStatus(transactionId) {
    return await this.transaction.getTransactionStatus(transactionId);
  }

  async getWalletBalance() {
    return await this.analytics.getBalance();
  }

  async getTransactionHistory() {
    return await this.analytics.getTransactionHistory();
  }
}

module.exports = CilmaxAI;
