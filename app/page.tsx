"use client";

import React, { useState, useEffect } from "react";
import * as web3 from "@solana/web3.js";
import { toast } from "react-toastify";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import ListItems from "@/components/ListItems";

// tx = Trnasaction

export default function Home() {
  // Initializing State Variables :
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [txSig, setTxSig] = useState("");

  // Variables that allows us to get information about the wallet : Wallet Adapter
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  // create tx; create instruction; send tx to solana
  const handleTransaction = async () => {
    // Error handling : check if wallet is connected
    if (!connection || !publicKey) {
      toast.error("Please connect your wallet!!");
      return;
    }

    // Create a tx object
    const transaction = new web3.Transaction();

    // Create instruction
    const instruction = web3.SystemProgram.transfer({
      fromPubkey: publicKey,
      lamports: amount * web3.LAMPORTS_PER_SOL,
      toPubkey: new web3.PublicKey(account),
    });

    // Add instruction to transaction
    transaction.add(instruction);

    try {
      // Send out transaction to the blockchain
      const signature = await sendTransaction(transaction, connection);
      setTxSig(signature);

      const newBalance = balance - amount;
      setBalance(newBalance);
    } catch (error) {
      console.log("Error is : ", error);
      toast.error("Transaction failed!!");
    } finally {
      // Resetting state variables :
      setAccount("");
      setAmount(0);
      // @ts-ignore
      document.getElementById("account").value = "";
      // @ts-ignore
      document.getElementById("amount").value = "";
    }
  };

  // Run code whenever user connects his/her wallet to our application :
  useEffect(() => {
    const getInfo = async () => {
      if (connection && publicKey) {
        const info = await connection.getAccountInfo(publicKey);
        setBalance(info?.lamports! / web3.LAMPORTS_PER_SOL);
      }
    };
    getInfo();
  }, [connection, publicKey]);

  return (
    <div>
      <p>SolPay</p>
    </div>
  );
}
