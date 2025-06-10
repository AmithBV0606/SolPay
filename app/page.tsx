"use client";

import React, { useState, useEffect } from "react";
import * as web3 from "@solana/web3.js";
import { toast } from "react-toastify";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

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
    <main className="min-h-screen text-white mt-16 w-full">
      <section className="grid grid-cols-1 sm:grid-cols-6 gap-4 p-4">
        {/* Form : */}
        <form className="rounded-lg min-h-content p-4 bg-[#1A1C23] col-span-1 sm:col-span-6 max-w-5xl lg:ml-[8%] xl:ml-[10%] 2xl:ml-[25%]">
          {/* Main Heading + Submit button : */}
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-3xl text-[#2E8A9E]">Send Sol</h2>

            <button
              className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-800 bg-[#512da8] rounded-lg w-24 py-1 font-semibold transition-all duration-200 hover:bg-[#46237A] cursor-pointer h-12"
              onClick={handleTransaction}
              disabled={!account || !amount}
            >
              Submit
            </button>
          </div>

          {/* Receiver Address : */}
          <div className="mt-12 space-y-2">
            <h3 className="text-xl text-gray-300">Address of receiver</h3>

            <input
              id="account"
              type="text"
              placeholder="Public key of receiver"
              className="text-[#2E8A9E] p-4 w-full bg-black outline-none resize-none rounded-lg placeholder:text-gray-500 placeholder:text-lg border-2 border-gray-500"
              onChange={(event) => setAccount(event.target.value)}
            />
          </div>

          {/* Amount you want to send : */}
          <div className="mt-6 space-y-2">
            <h3 className="text-xl text-gray-300">Amount</h3>

            <input
              id="amount"
              type="number"
              min={0}
              placeholder="Amount of SOL"
              className="text-[#2E8A9E] p-4 w-full bg-black outline-none resize-none rounded-lg placeholder:text-gray-500 placeholder:text-lg border-2 border-gray-500"
              onChange={(event) => setAmount(Number(event.target.value))}
            />
          </div>
        </form>
      </section>
    </main>
  );
}
