# Blockchain-Based Land Registration System

## Overview  
A secure, decentralized land registration system leveraging blockchain technology to prevent fraudulent property transactions. This solution empowers government ministries to maintain tamper-proof records of property contracts using Ethereum smart contracts.

## Key Features  
- Immutable contract records on the blockchain  
- Transparent transaction history  
- Fraud-resistant operations  
- IPFS integration for document storage  

---

## Prerequisites  

### Software & Tools
- [Ganache](https://www.trufflesuite.com/ganache) (v2.5+ recommended)
- [MetaMask](https://metamask.io) browser extension 
- [Truffle Suite](https://www.trufflesuite.com/truffle) (v5.0+)
- Node.js (v14+)
- npm (v6+)

### Accounts & Setup
1. **Ganache Configuration**  
   - Run Ganache using default settings (Local Network RPC: `http://127.0.0.1:7545`)
   
2. **MetaMask Setup**  
   - Connect to Ganache network  
   - Import test accounts using Ganache's private keys  

---

## Installation  

### 1. Clone Repository
```bash
git clone [repository-url] && cd [project-directory]
```

### 2. Install Dependencies
```bash
npm install
npm install react-bootstrap bootstrap
npm install ipfs-api
npm install html-react-parser --save
```

### 3. Blockchain Deployment
```bash
truffle migrate --reset
```

---

## Running the Application  

### 1. Start Blockchain
- Ensure Ganache is running

### 2. Launch Frontend
```bash
cd client
npm run start
```

### 3. Browser Setup
1. Open `http://localhost:3000`  
2. Confirm MetaMask connection to Ganache network  
3. Approve transaction requests when prompted  

---

## System Architecture  
![System Diagram](docs/architecture-diagram.png)  
 

---

## Troubleshooting  
- **Transaction Errors**: Reset MetaMask account (Settings > Advanced > Reset Account)  
- **Connection Issues**: Verify Ganache RPC matches MetaMask network  
- **Migration Problems**: Run `truffle migrate --reset --compile-all`  

## License  
[MIT License](LICENSE)  

---

*Developed for secure government land registry operations. Contact maintainers for production deployment guidance.*
