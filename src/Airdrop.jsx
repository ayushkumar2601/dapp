// // The useWallet hook provides the wallet variable inside the Airdrop component
// //because I wrapped the Airdrop component inside the WalletProvider
// import { useWallet } from "@solana/wallet-adapter-react";

// function Airdrop() {
//   const wallet = useWallet();

//   const handleAirdrop = () => {
//     if (!wallet.publicKey) {
//       alert("Please connect your wallet first!");
//       return;
//     }

//     alert("Wallet: " + wallet.publicKey.toString());
//   };
//   const {connection}=UseConnection()

//   //define the function inside the wallet body
//   function sendAirdropToUser() {
//     connection.requestAirdrop(wallet.publicKey,10)
//   }
//   return (
//     <div style={{ padding: 20 }}>
//         hi Mr {wallet.publicKey ? wallet.publicKey.toString() : "Guest"}
//       <input type="text" placeholder="Amount" />
//       <button onClick={sendAirdropToUser}>Send Airdrop</button>
//     </div>
//   );
// }

// export default Airdrop;


import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  const [amount, setAmount] = useState("");

  async function sendAirdropToUser() {
    try {
      if (!wallet.publicKey) {
        alert("Please connect your wallet first!");
        return;
      }

      if (!amount || isNaN(amount)) {
        alert("Enter a valid SOL amount");
        return;
      }

      const lamports = Number(amount) * LAMPORTS_PER_SOL;

      const signature = await connection.requestAirdrop(wallet.publicKey, lamports);

      await connection.confirmTransaction(signature, "confirmed");

      alert(`💰 Airdrop Successful! Hash:\n${signature}`);

    } catch (err) {
      console.error(err);
      alert("Airdrop failed — Devnet might be busy.");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <div>
        👋 Hi, {wallet.publicKey ? wallet.publicKey.toString() : "Guest"}
      </div>

      <input
        type="number"
        placeholder="Amount in SOL"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginTop: 10 }}
      />

      <button
        onClick={sendAirdropToUser}
        style={{ display: "block", marginTop: 10 }}
      >
        🚀 Request Airdrop
      </button>
    </div>
  );
}

export default Airdrop;
