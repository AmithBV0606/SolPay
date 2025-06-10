<div align="center"> 
    <h1 style="display: flex; justify-content: center; align-items: flex-end;">
    SolPay 
    <img 
        src="app/favicon.ico" 
        alt="Home page" 
        style="width: 35px; height: 35px; margin-left: 6px"
    /> 
    </h1>
</div>

SolPay is a lightweight Solana-based payment application built with `Next.js` and `React`. It enables users to connect their Solana wallets and send transactions seamlessly through an intuitive UI. Designed with TailwindCSS and powered by the Solana Wallet Adapter and `@solana/web3.js`, SolPay offers a simple, secure, and fast way to handle on-chain payments. It also leverages React Toastify for real-time feedback and Headless UI for accessible components, delivering a smooth developer and user experience.

## 🌟 Features

- **Send SOL Tokens**: Transfer SOL to any valid Solana wallet address
- **Wallet Integration**: Connect with popular Solana wallets (Phantom, Solflare, etc.)
- **Real-time Updates**: Live transaction status and balance updates
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Secure Transactions**: Built on Solana's fast and secure blockchain infrastructure

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Blockchain**: Solana Web3.js
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun
- A Solana wallet (Phantom, Solflare, etc.)
- In the wallet settings, under `Developer Settings`, turn on the `Testnet Mode`.
- Then select `Solana Devnet` and copy the address of that devnet.
- Some SOL tokens for testing (use Solana devnet for development)
    - Ref : https://faucet.solana.com/

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AmithBV0606/SolPay.git
cd SolPay
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Setup

No `.env`. This project doesn't require any environment variables.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🎯 Usage

### Connecting Your Wallet

1. Click the "Select Wallet" button
2. Select your preferred Solana wallet (Phantom, Solflare, etc.)
3. Approve the connection request in your wallet

### Sending SOL

1. Enter the recipient's Solana wallet address.
2. Specify the amount of SOL to send.
3. Click "Submit" and approve the transaction in your wallet.
4. Wait for transaction confirmation.

## 🏗 Project Structure

```
SolPay/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── WalletConnection/  # Wallet connection components
│   ├── TransferForm/      # SOL transfer form
│   └── UI/               # UI components
├── lib/                   # Utility functions
│   ├── solana.ts         # Solana blockchain utilities
│   └── utils.ts          # General utilities
├── public/               # Static assets
├── styles/               # Additional styling files
└── types/                # TypeScript type definitions
```

## 🔧 Configuration

### Wallet Adapters

The project uses Solana wallet adapters to support multiple wallets:

- Phantom
- Solflare  
- Backpack
- Glow
- And many more...

## 🧪 Testing

### Development Testing

1. Use Solana devnet for testing
2. Get free devnet SOL from [Solana Faucet](https://faucet.solana.com/)
3. Test transfers between different devnet addresses

## 🚢 Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write clean, readable code
- Add proper error handling
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Amith BV**
- GitHub: [@AmithBV0606](https://github.com/AmithBV0606)

## 🙏 Acknowledgments

- [Solana Labs](https://solana.com/) for the amazing blockchain infrastructure
- [Vercel](https://vercel.com/) for Next.js and deployment platform
- The Solana developer community for continuous support and resources

---

**⚡ Built on Solana - Fast, Secure, Decentralized ⚡**