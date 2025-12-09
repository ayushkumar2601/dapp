
// export default App;
import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletMultiButton, WalletDisconnectButton, WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './Airdrop';

function App() {
  return (
    <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/jEQmlgdWPIOypiR9RR6vK">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton></WalletDisconnectButton>
          <div style={{ padding: 40 }}>I am Ayush Kumar.</div>
          <Airdrop></Airdrop>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
export default App;





// import React, { useMemo } from 'react';
// import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import {
//   WalletModalProvider,
//   WalletMultiButton,      // better than WalletConnectButton
//   WalletDisconnectButton
// } from '@solana/wallet-adapter-react-ui';
// import {
//   PhantomWalletAdapter,
//   UnsafeBurnerWalletAdapter
// } from '@solana/wallet-adapter-wallets';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { clusterApiUrl } from '@solana/web3.js';

// import '@solana/wallet-adapter-react-ui/styles.css';
// import Airdrop from './Airdrop';

// function App() {
//   const network = WalletAdapterNetwork.Devnet;
//   const endpoint = clusterApiUrl(network);

//   // list of wallets your app supports
//   const wallets = useMemo(
//     () => [
//       new PhantomWalletAdapter(),
//       new UnsafeBurnerWalletAdapter()
//     ],
//     [network]
//   );

//   return (
//     <ConnectionProvider endpoint={endpoint}>
//       <WalletProvider wallets={wallets} autoConnect>
//         <WalletModalProvider>
//           {/* This shows "Connect Wallet" + handles connect/disconnect */}
//           <WalletMultiButton />
//           <WalletDisconnectButton />

//           <div style={{ padding: 40 }}>I am Ayush Kumar.</div>
//           <Airdrop />
//         </WalletModalProvider>
//       </WalletProvider>
//     </ConnectionProvider>
//   );
// }

// export default App;


//sol balance, good ui, sign messages, airdrop, send sol, send tokens, swap tokens, stake sol, nft minting, display nfts

//pump is a dapp, muzz.100xdevs