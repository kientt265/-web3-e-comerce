
import { createWeb3Modal, defaultConfig,  useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { BrowserProvider, Contract, formatEther, parseEther} from 'ethers'
import { useEffect, useState } from "react";
import { shortenAddress } from './lib/utils'
import { useWeb3Modal } from '@web3modal/ethers/react'
const projectId = import.meta.env.VITE_PROJECT_ID;

const sepolia = {
  chainId: 11155111,
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia.etherscan.io/",
  rpcUrl: import.meta.env.VITE_SEPOLIA_RPC_URL,
};

const metadata = {
  name: "Crowfunding",
  description: "Website help people donation for me",
  url: "https://mywebsite.com", // custom your domain here
  icons: ["https://avatars.mywebsite.com/"], //custom your logo here
};

const ethersConfig = defaultConfig({
  metadata,
  enableEIP6963: true,
  enableInjected: true,
  enableCoinbase: true,
});

createWeb3Modal({
  ethersConfig,
  chains: [sepolia],
  projectId,
  enableAnalytics: true,
});

function App() {
  const { address, isConnected } = useWeb3ModalAccount()
  const {walletProvider} = useWeb3ModalProvider()
  const { open } = useWeb3Modal()
  return (
    <>
    <header className="mx-auto px-2 p-4  border-b">
      <div className=" flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">VerifComerce</h1>

        </div>
        <button onClick={() => open()}   className="bg-slate-900 text-white py-2 px-3 rounded-lg hover:bg-slate-800 transition-colors">{isConnected ? `${shortenAddress(address)}` : "Connect Wallet"}</button>

      </div>
    </header>
    <div>
      
    </div>
    </>
  )
}

export default App
