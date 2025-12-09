import { useWallet } from "@solana/wallet-adapter-react";

function Airdrop() {
  const wallet = useWallet();

  const handleAirdrop = () => {
    if (!wallet.publicKey) {
      alert("Please connect your wallet first!");
      return;
    }

    alert("Wallet: " + wallet.publicKey.toString());
  };

  return (
    <div style={{ padding: 20 }}>
        hi Mr {wallet.publicKey ? wallet.publicKey.toString() : "Guest"}
      <input type="text" placeholder="Amount" />
      <button onClick={handleAirdrop}>Send Airdrop</button>
    </div>
  );
}

export default Airdrop;
