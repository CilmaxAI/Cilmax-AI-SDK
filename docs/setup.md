# Setup Guide

## Requirements
- Node.js (v14 or higher)
- npm or yarn

## Installation

To get started with Cilmax AI SDK, you need to install the SDK package.

```bash
npm install cilmax-ai-sdk
# OR
yarn add cilmax-ai-sdk
```
---
# Usage

Once installed, you can start using the SDK in your project:

```javascript
const CilmaxAI = require('cilmax-ai-sdk');
const cilmaxAI = new CilmaxAI();

cilmaxAI.getWallet();
cilmaxAI.sendTokens(100, 'recipient-address');
cilmaxAI.getWalletBalance();
```

```yaml

---

### 8. **.gitignore**
```plaintext
node_modules/
*.log
.DS_Store
```
