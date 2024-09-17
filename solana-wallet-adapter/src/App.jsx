import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { Airdrop } from './Airdrop';
import {
  WalletConnectButton,
    WalletDisconnectButton,
    WalletModalProvider,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
function App() {
  //Create your own rpc url? Use Alchemy, ********In endpoint replace with Alchemy RPC URL(**Devnet)
  return (
    <ConnectionProvider endpoint={"endpoint"}>  
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <WalletMultiButton></WalletMultiButton>
                  <br/>
                  <br/>
                  <WalletDisconnectButton></WalletDisconnectButton>
                  <br/>
                    <div>
                      Hi,there <b>Hello</b>
                    </div>
                    <Airdrop></Airdrop>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  )
}
export default App
