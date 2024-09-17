import { useConnection, useWallet } from "@solana/wallet-adapter-react"
//Compnents in react are very similar to creating your own html tag
//The useWallet 'Hook' 'provides' the wallet variable inside the Airdrop 'Componet'
//beacuse I wrapped the Airdrop component inside the WalletProvider 
export function Airdrop(){
    //Hooks in react
    const wallet=useWallet();
    const {connection}=useConnection();
    //Define the function inside the component body
    async function sendAirdropToUser(){
        const amount=document.getElementById("publicKey").value
        await connection.requestAirdrop(wallet.publicKey,amount*1000000000)
        alert("Airdropped sol")
    }
    return <div>
        <input id="publicKey" type="text" placeholder="Amount"/>
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
}